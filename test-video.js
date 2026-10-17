const http = require('node:http');
const { server, startServer } = require('./server.js');

async function checkEndpoint(url, headers = {}) {
  return new Promise((resolve, reject) => {
    const req = http.get(url, { headers }, (res) => {
      let data = [];
      res.on('data', chunk => data.push(chunk));
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          dataLength: Buffer.concat(data).length,
          dataText: Buffer.concat(data).toString('utf-8')
        });
      });
    });
    req.on('error', reject);
  });
}

async function runTests() {
  // Give server 500ms to listen
  await new Promise(r => setTimeout(r, 500));
  const address = server.address();
  const PORT = address ? address.port : 3000;
  const BASE_URL = `http://localhost:${PORT}`;

  console.log(`Starting video endpoint verification tests on ${BASE_URL}...`);

  try {
    // Test 1: Health check
    console.log('\n[1/6] Health Check: GET /api/health');
    const health = await checkEndpoint(`${BASE_URL}/api/health`);
    console.log(`  Status: ${health.statusCode}`);
    console.log(`  Response: ${health.dataText.trim()}`);
    if (health.statusCode !== 200) throw new Error('Health check failed');

    // Test 2: Video info API
    console.log('\n[2/6] Video Info API: GET /api/video-info');
    const info = await checkEndpoint(`${BASE_URL}/api/video-info`);
    console.log(`  Status: ${info.statusCode}`);
    console.log(`  Response: ${info.dataText.trim()}`);
    if (info.statusCode !== 200) throw new Error('Video info API failed');

    // Test 3: Video Streaming Full Stream GET /video
    console.log('\n[3/6] Video Streaming Endpoint (Full File): GET /video');
    const fullStream = await checkEndpoint(`${BASE_URL}/video`);
    console.log(`  Status: ${fullStream.statusCode} (expected 200)`);
    console.log(`  Content-Type: ${fullStream.headers['content-type']}`);
    console.log(`  Content-Length: ${fullStream.headers['content-length']} bytes`);
    console.log(`  Accept-Ranges: ${fullStream.headers['accept-ranges']}`);
    if (fullStream.statusCode !== 200 || fullStream.headers['content-type'] !== 'video/mp4') {
      throw new Error('Full video stream failed');
    }

    // Test 4: Video Streaming Partial Range GET /video with Range header (HTTP 206)
    console.log('\n[4/6] Video Streaming Endpoint (HTTP 206 Partial Content): Range: bytes=0-1023');
    const partialStream = await checkEndpoint(`${BASE_URL}/video`, {
      Range: 'bytes=0-1023'
    });
    console.log(`  Status: ${partialStream.statusCode} (expected 206)`);
    console.log(`  Content-Range: ${partialStream.headers['content-range']}`);
    console.log(`  Content-Length: ${partialStream.headers['content-length']} (expected 1024)`);
    console.log(`  Bytes received: ${partialStream.dataLength}`);
    if (partialStream.statusCode !== 206 || partialStream.dataLength !== 1024) {
      throw new Error('Partial video stream failed');
    }

    // Test 5: Static MP4 Endpoint GET /rickroll.mp4
    console.log('\n[5/6] Direct MP4 Endpoint: GET /rickroll.mp4');
    const staticMp4 = await checkEndpoint(`${BASE_URL}/rickroll.mp4`, {
      Range: 'bytes=100-200'
    });
    console.log(`  Status: ${staticMp4.statusCode} (expected 206)`);
    console.log(`  Content-Range: ${staticMp4.headers['content-range']}`);
    if (staticMp4.statusCode !== 206 || staticMp4.dataLength !== 101) {
      throw new Error('Static MP4 endpoint failed');
    }

    // Test 6: Root web page GET /
    console.log('\n[6/6] Web Page Serving: GET /');
    const page = await checkEndpoint(`${BASE_URL}/`);
    console.log(`  Status: ${page.statusCode}`);
    console.log(`  Content-Type: ${page.headers['content-type']}`);
    console.log(`  Contains skillissue: ${page.dataText.includes('skillissue')}`);
    if (page.statusCode !== 200 || !page.dataText.includes('skillissue')) {
      throw new Error('Web page serving failed');
    }

    console.log('\n======================================================');
    console.log(' ALL VIDEO ENDPOINTS VERIFIED & WORKING BEAUTIFULLY!');
    console.log('======================================================\n');
    process.exit(0);
  } catch (err) {
    console.error('\n Test failed:', err.message);
    process.exit(1);
  }
}

runTests();
