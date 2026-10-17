const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const url = require('node:url');

const BASE_DIR = __dirname;
const VIDEO_FILES = [
  'rickroll.mp4',
  'vidssave.com Rickroll (Meme Template) 360p.mp4'
];

const MEME_FILES = {
  raigbait: 'raigbaitmeme.mp4',
  garbage: 'computeringarbage.mp4',
  rickroll: 'rickroll.mp4'
};

function findVideoFile() {
  for (const f of VIDEO_FILES) {
    const fullPath = path.join(BASE_DIR, f);
    if (fs.existsSync(fullPath)) {
      return { filename: f, fullPath };
    }
  }
  return null;
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8'
};

function streamVideo(req, res, videoPath) {
  fs.stat(videoPath, (err, stats) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: 'Video file not found', path: videoPath }));
    }

    const fileSize = stats.size;
    const range = req.headers.range;

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Range, Content-Type');

    if (req.method === 'OPTIONS') {
      res.writeHead(204);
      return res.end();
    }

    if (range) {
      // Range: bytes=start-end
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

      if (isNaN(start) || start >= fileSize || end >= fileSize || start > end) {
        res.writeHead(416, {
          'Content-Range': `bytes */${fileSize}`,
          'Content-Type': 'video/mp4'
        });
        return res.end();
      }

      const chunksize = end - start + 1;
      const fileStream = fs.createReadStream(videoPath, { start, end });

      res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': 'video/mp4',
        'Cache-Control': 'no-cache'
      });

      fileStream.on('error', (streamErr) => {
        console.error('Error streaming chunk:', streamErr);
        if (!res.headersSent) {
          res.writeHead(500);
          res.end();
        }
      });

      fileStream.pipe(res);
    } else {
      res.writeHead(200, {
        'Content-Length': fileSize,
        'Content-Type': 'video/mp4',
        'Accept-Ranges': 'bytes',
        'Cache-Control': 'public, max-age=3600'
      });

      const fileStream = fs.createReadStream(videoPath);
      fileStream.on('error', (streamErr) => {
        console.error('Error streaming full video:', streamErr);
        if (!res.headersSent) {
          res.writeHead(500);
          res.end();
        }
      });

      fileStream.pipe(res);
    }
  });
}

const server = http.createServer((req, res) => {
  const reqUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  let pathname = decodeURIComponent(reqUrl.pathname);

  // Normalize path
  if (pathname === '/' || pathname === '/index.html') {
    pathname = '/skillissue.club.html';
  }

  // CORS headers for APIs
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Video Streaming Endpoints
  if (pathname === '/video' || pathname === '/video/stream' || pathname === '/api/video') {
    const videoInfo = findVideoFile();
    if (!videoInfo) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: 'Rickroll video file missing' }));
    }
    return streamVideo(req, res, videoInfo.fullPath);
  }

  // Video Metadata / API Endpoint
  if (pathname === '/api/video-info' || pathname === '/api/video/status') {
    const videoInfo = findVideoFile();
    if (!videoInfo) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ status: 'error', message: 'Video file not found' }));
    }
    const stats = fs.statSync(videoInfo.fullPath);
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    return res.end(JSON.stringify({
      status: 'online',
      message: 'Video endpoint active and ready',
      video: {
        title: 'Rick Astley - Never Gonna Give You Up (Meme Template)',
        filename: videoInfo.filename,
        sizeBytes: stats.size,
        durationSeconds: 7.15,
        resolution: '640x360 (16:9)',
        codecs: 'avc1.4d401e, mp4a.40.2'
      },
      endpoints: {
        stream: '/video',
        streamAlias: '/video/stream',
        apiVideo: '/api/video',
        staticFile: '/' + encodeURIComponent(videoInfo.filename),
        info: '/api/video-info',
        health: '/api/health'
      },
      memes: [
        { key: 'raigbait', title: 'Ragebait Meme', file: 'raigbaitmeme.mp4', url: '/raigbaitmeme.mp4' },
        { key: 'garbage', title: 'Computer In Garbage', file: 'computeringarbage.mp4', url: '/computeringarbage.mp4' },
        { key: 'rickroll', title: 'Classic Rickroll', file: 'rickroll.mp4', url: '/video' }
      ]
    }, null, 2));
  }

  // Health endpoint
  if (pathname === '/api/health') {
    const videoInfo = findVideoFile();
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    return res.end(JSON.stringify({
      status: 'healthy',
      service: 'skillissue.club',
      uptime: process.uptime(),
      videoAvailable: Boolean(videoInfo),
      videoFilename: videoInfo ? videoInfo.filename : null
    }, null, 2));
  }

  // Static File Serving
  const safePath = path.normalize(path.join(BASE_DIR, pathname));
  if (!safePath.startsWith(BASE_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    return res.end('Forbidden');
  }

  fs.stat(safePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      return res.end('<h1>404 Not Found</h1><p>The requested file does not exist.</p>');
    }

    const ext = path.extname(safePath).toLowerCase();

    // If requesting MP4 directly, use range-capable stream
    if (ext === '.mp4') {
      return streamVideo(req, res, safePath);
    }

    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, {
      'Content-Type': contentType,
      'Content-Length': stats.size,
      'Cache-Control': 'no-cache'
    });

    fs.createReadStream(safePath).pipe(res);
  });
});

const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000;

function startServer(port) {
  server.listen(port, () => {
    console.log(`\n=================================================`);
    console.log(` skillissue.club tribunal server is running!`);
    console.log(` Web App:           http://localhost:${port}/`);
    console.log(` Video Endpoint:    http://localhost:${port}/video`);
    console.log(` Video Info API:    http://localhost:${port}/api/video-info`);
    console.log(` Health Check API:  http://localhost:${port}/api/health`);
    console.log(`=================================================\n`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.warn(`Port ${port} in use, attempting port ${port + 1}...`);
      startServer(port + 1);
    } else {
      console.error('Server error:', err);
    }
  });
}

startServer(DEFAULT_PORT);

module.exports = { server, startServer, findVideoFile };
