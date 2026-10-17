# BUILD SKILLISSUE.CLUB — THE INTERNET'S MOST INFURIATINGLY BEAUTIFUL WEBSITE

## YOUR ROLE

You are a senior frontend engineer, award-winning UI/UX designer, creative interaction designer, motion designer, and comedy copywriter.

Your task is to build a fully functional, visually exceptional, single-page interactive website called **skillissue.club**.

The concept is simple: create a website that looks beautiful, behaves in unexpectedly annoying ways, hilariously roasts users when they make mistakes, and makes them want to try the next interaction.

The website should make users think:

"WHY DID THAT JUST HAPPEN?"

Then:

"Fine. Let me try the next one."

This is NOT a conventional game. Do not build a game engine, separate routes, level-selection screens, a game lobby, or multiple pages.

Build ONE continuous webpage featuring five connected, interactive challenges that change inside the same page.

The creative frustration must be intentional. The website must remain technically reliable, responsive, accessible, and easy to exit or reset.

**Do not merely describe the solution. Inspect the existing project, implement the complete website, run it, test it, and fix problems.**

---

# 1. THE CREATIVE VISION

## Brand

**Name:** skillissue.club®

**Category:** Satirical internet proficiency test.

**Tagline:** "Your confidence is not evidence."

**Hero headline:**
"You're good at the internet, right?"

**Hero punchline:**
"Prove it. We'll wait."

**Supporting copy:**
"Five ridiculously simple interactions. Zero difficult questions. An entirely unnecessary amount of confidence required."

**Primary CTA:** `PROVE IT →`

**Secondary CTA:** `I'M ALREADY AMAZING`

**Small satirical trust badge:** `FAIRNESS: 100%*`

**Footnote:** `*Fairness not independently verified. By anyone. Ever.`

## The core experience

The player sees a gorgeous, professional interface with apparently simple interactions.

They click something. It behaves unexpectedly.

They receive a funny, context-specific message:

"AWWW, YOU DIDN'T PASS THIS ONE. 💀"

They see an irresistible button:

`TRY THE NEXT ONE →`

They move forward, determined not to let a website defeat them.

Every interaction should feel like a small, carefully designed comedic setup and punchline.

The experience should be mischievous rather than malicious. All puzzles must have discoverable solutions. Never make a task genuinely impossible merely to increase frustration.

---

# 2. PREMIUM VISUAL DESIGN — THE MOST IMPORTANT PART

The result must look like a carefully art-directed digital product, not a generic website template or a collection of default components.

## Visual direction

Create a modern editorial website with playful internet-culture aesthetics, confident typography, beautiful spacing, expressive micro-interactions, and carefully controlled color.

The design should combine:
- Premium editorial layouts.
- Contemporary playful branding.
- Bold typography.
- Minimalist interactive components.
- Subtle imperfections and cheeky annotations.
- Warm, approachable surfaces contrasted with sharp coral-red accents.
- Crisp motion and satisfying transitions.

The site should be visually clean, surprisingly beautiful, and immediately recognizable.

## Color palette

Use these colors consistently:

- Warm cream background: `#FFF7ED`
- Primary text: `#171717`
- Secondary text: `#746C63`
- Coral-red accent: `#F14F3E`
- Cobalt-blue accent: `#405CE8`
- Acid-lime highlight: `#C5EF69`
- White surface: `#FFFFFF`
- Soft beige border: `#E5D9C9`

Use coral-red for primary actions and failure accents. Use cobalt-blue for secondary actions. Use lime for occasional unexpected highlights.

Do not use every accent color simultaneously.

## Typography

Use an expressive display typeface for headlines, paired with a readable contemporary sans-serif for body text.

Create a visual hierarchy with:
- Oversized, tightly composed headings.
- Short, witty supporting copy.
- Small uppercase editorial labels.
- Large, readable challenge prompts.
- Beautifully typeset failure messages.
- Crisp counters and progress labels.

Prefer existing project fonts or robust system fallbacks. Do not introduce unnecessary dependencies.

## Layout

Design the page with:
- A compact header.
- A bold, asymmetrically composed hero section.
- One prominent active challenge panel.
- A small progress indicator.
- Minimal supporting status information.
- A dramatic inline failure or success feedback state.
- An elegant closing section.

Use generous whitespace, deliberate alignment, readable text, attractive buttons, and a strong focal point.

Avoid generic dashboards, excessive cards, random floating objects, giant glowing gradients, excessive neon, unnecessary charts, and cluttered interfaces.

## Signature details

Add a few distinctive visual signatures:
- A tiny `TOTALLY FAIR™` stamp.
- A suspiciously confident system-status indicator.
- Small editorial annotations near interactive elements.
- An expressive arrow that occasionally points at the wrong thing.
- A large, beautifully styled failure message.
- A small visual mascot, cursor character, or expressive icon only if it genuinely improves the design.

These details must feel intentional, not randomly generated.

The initial impression must be excellent before the user clicks anything.

---

# 3. ONE PAGE, ONE ACTIVE CHALLENGE

Build one continuous webpage with these regions:

1. Header and wordmark.
2. Hero introduction.
3. Active challenge area.
4. Compact progress and attempt information.
5. Dynamic feedback and next-challenge action.
6. Final result and replay section.
7. Footer with reset controls.

Only one challenge needs to be active at a time.

When the user advances, replace the content of the active challenge panel smoothly using application state. Do not navigate to a new route or reload the page.

The header, progress indicator, page background, typography, and design identity should stay consistent throughout the experience.

The progression should be:

**Challenge → Attempt → Unexpected outcome → Funny feedback → Try again or continue.**

Display a clear challenge indicator such as `CHALLENGE 02 / 05`, but do not make the page look like a traditional level-based game.

The user should be free to retry, move on, or reset.

---

# 4. CHALLENGE ONE — THE BUTTON HAS PERSONAL BOUNDARIES

### Interface

Display a large, beautifully designed coral-red button:

`CLICK ME`

Supporting text:

"This is definitely the easiest one."

### Behavior

When the pointer approaches or hovers over the button, it dodges a short distance with a smooth, amusing animation.

Each dodge should feel deliberate and readable.

After successive attempts, display cheeky messages:
- "Whoa. Personal space."
- "You almost had it."
- "That was embarrassing for both of us."
- "The button is getting nervous."

After a small, predetermined number of dodges, reveal a discoverable solution that lets the user activate the button.

The button must remain within its container and the interaction must remain solvable.

Provide an equivalent touch interaction on mobile and a direct keyboard-accessible way to proceed.

### Failure feedback

Headline:

**"AWWW, YOU DIDN'T PASS THIS ONE. 💀"**

Supporting copy:

"It was literally one button. We're not sure where to go from here."

Actions:

- `TRY THE NEXT ONE →`
- `LET ME TRY AGAIN`

The challenge must remain functional. The button must not dodge indefinitely.

---

# 5. CHALLENGE TWO — CONFIDENCE WITHOUT EVIDENCE

### Interface

Headline:

"Choose the correct button."

Supporting copy:

"This is a scientifically validated test. By us."

Show three attractive buttons with misleading but humorous labels:

- `OBVIOUSLY THIS ONE`
- `DEFINITELY NOT THIS`
- `I KNOW WHAT I'M DOING`

Make them visually appealing and equally plausible.

### Behavior

Define one deterministic correct answer. The answer must be discoverable through an intentional clue, label, or interface pattern.

Incorrect choices produce distinct comedic responses, for example:

- "You clicked that with SO much confidence."
- "That was not the answer. It was, however, a very confident answer."
- "Your decision has been forwarded to absolutely nobody."
- "The button would like to thank you for your contribution."

Allow the user to retry or continue.

Do not select winners randomly. Do not require guessing forever.

When the correct answer is chosen:

"CORRECT. DON'T LET THIS GO TO YOUR HEAD."

Follow with a clear next-challenge action.

---

# 6. CHALLENGE THREE — THE 99% CLUB

### Interface

Headline:

`PREPARING YOUR REWARD`

A polished progress bar advances smoothly toward 99%.

Then it stops.

Supporting status messages rotate through a small, controlled collection:

- "Finishing the finishing touches..."
- "Asking the button for permission..."
- "Almost ready. Allegedly."
- "Your patience has been received and ignored."
- "99%. We are aware."

### Behavior

This is a fictional progress indicator inside the page. The real website must remain responsive.

Include a small contextual clue that suggests the percentage, label, or progress bar can be interacted with.

When the visitor discovers the correct interaction, complete the progress bar with a satisfying animation.

Display:

**"CONGRATULATIONS."**

**"YOU WAITED FOR NOTHING."**

The solution must be deterministic, accessible, and easy to reset. Do not require prolonged waiting or endless clicking.

---

# 7. CHALLENGE FOUR — PEACE OF MIND IS UNAVAILABLE

### Interface

Headline:

`OPTIMIZE YOUR EXPERIENCE`

Display a polished settings-style toggle:

`ENABLE PEACEFUL MODE`

Add a small status badge beside it.

### Behavior

The toggle uses real application state and has a clear, functional interaction.

When activated, show a contradictory but obviously satirical status:

**"PEACE DISABLED SUCCESSFULLY."**

Other messages may include:

- "Your request has been reviewed."
- "The committee is divided."
- "Peace is currently in another meeting."
- "Everything is exactly as intended."

The surrounding interface copy creates the joke; the actual toggle remains functional and accessible.

Include a discoverable clue that explains the intended behavior.

When the user solves the interaction, display:

"LOOK AT YOU. OPERATING A SWITCH."

Then offer the next challenge.

No infinite flickering, broken toggle states, or contradictory accessibility labels.

---

# 8. CHALLENGE FIVE — THE FINAL DECISION

### Interface

Create a dramatic but minimal final challenge.

Headline:

**"One final question."**

Supporting copy:

"Are you finally done?"

Two large buttons:

- `YES. I'M DONE.`
- `ONE MORE THING.`

### Behavior

The first choice triggers an absurdly dramatic success sequence.

The second reveals one final, short, solvable interaction before the result.

Both paths must eventually allow the visitor to complete the experience.

The final result should display:

**"YOU SURVIVED SKILLISSUE.CLUB."**

Supporting copy:

"We're honestly surprised. Proud of you. Sort of."

Generate a humorous rating based on real session behavior, such as:
- "Mildly competent."
- "Suspiciously persistent."
- "Certified button investigator."
- "A menace to user experience."

Display the actual number of attempts, challenges visited, and successful interactions.

Add one prominent final action:

`PLAY AGAIN →`

Restart the experience correctly without reloading or leaving the page.

---

# 9. THE FAILURE MESSAGES ARE THE COMEDY ENGINE

Create a reusable, varied, context-sensitive collection of feedback messages.

Use lines such as:

- "AWWW, YOU DIDN'T PASS THIS ONE. TRY THE NEXT ONE."
- "YOU HAD ONE JOB."
- "THAT WAS A CHOICE."
- "YOU WERE SO CLOSE. NOT REALLY."
- "CONFIDENCE: 100. ACCURACY: A PRIVATE MATTER."
- "THE WEBSITE SAW THAT."
- "WE BELIEVED IN YOU. BRIEFLY."
- "A SMALL SETBACK FOR YOU. A HUGE WIN FOR THE BUTTON."
- "YOUR PERFORMANCE HAS BEEN RECEIVED."
- "NO FURTHER COMMENT."
- "THE COMMITTEE HAS DECLINED TO COMMENT."
- "YOU CAN STILL PRETEND THAT WAS INTENTIONAL."
- "WE HAVE DECIDED TO GIVE YOU ANOTHER CHANCE. AGAINST OUR BETTER JUDGMENT."
- "THIS IS WHY WE CAN'T HAVE NICE THINGS."
- "INTERESTING STRATEGY. DIDN'T WORK."
- "YOU MAY NOW QUESTION YOUR DECISIONS."
- "WE'RE GOING TO GIVE THAT ANOTHER CHANCE. FOR LEGAL REASONS."

Match the feedback to the action that just occurred.

Use varied copy layouts, timing, and subtle animation to turn failure into a visual punchline.

Do not repeat the same failure message on every interaction.

Roast the decision or situation, not the user's identity, appearance, or personal vulnerabilities.

Success messages should also be funny:

- "CORRECT. INTERESTING DEVELOPMENT."
- "YOU DID A THING."
- "WE DID NOT EXPECT THAT."
- "TRY NOT TO BECOME INSUFFERABLE."
- "A RARE VICTORY FOR HUMANITY."

---

# 10. MAKE THE PAGE FEEL COHERENT

Build a lightweight state model for:
- Current challenge.
- Attempt count.
- Challenges visited.
- Successful interactions.
- Current response or feedback state.
- Slider and toggle values.
- Final completion state.
- Reduced-motion preference.

Optionally include a small fictional `RAGE INDEX` from 0 to 100, calculated deterministically from in-page interactions.

If included, keep it visually secondary. It is a satirical display, not an actual psychological measurement.

A compact activity log may include funny entries such as:
- "Button evaded contact."
- "Confidence exceeded available evidence."
- "Peace request declined."
- "User remains suspiciously persistent."

Do not let counters and decorative animations overwhelm the central interaction.

Avoid unnecessary persistent storage, backend infrastructure, accounts, external APIs, or user tracking.

---

# 11. MOTION AND MICRO-INTERACTIONS

Prioritize a small number of polished interactions:

- Smooth evasive-button movement.
- Attractive hover and pressed states.
- A short shake after an incorrect choice.
- Elegant progress-bar animation.
- A satisfying transition between challenges.
- Small status-label transformations.
- A dramatic final success moment.

Every animation should have a purpose.

Avoid constant blinking, excessive jitter, long delays, flashing patterns, or motion that interferes with reading.

Respect reduced-motion preferences.

The webpage must remain fast, readable, and usable throughout.

---

# 12. TECHNICAL IMPLEMENTATION

Inspect the actual repository before changing files.

Determine the existing framework, project entry point, dependencies, scripts, and working development environment.

Rules:
- Preserve the current stack wherever practical.
- Reuse existing components and dependencies.
- Avoid unnecessary packages.
- Keep the experience on one page.
- Use real application state for every interaction.
- Make every visible button functional.
- Prevent duplicate progress transitions.
- Clean up timers and event handlers.
- Make reset and replay work correctly.
- Ensure the interface behaves consistently on refresh.
- No backend or authentication is needed.
- Keep challenge logic modular without creating an unnecessary game engine.

Never fake a functional feature with a static visual.

---

# 13. RESPONSIVENESS AND ACCESSIBILITY

The website must work on desktop and mobile.

Requirements:
- Semantic buttons and form controls.
- Keyboard navigation.
- Visible focus indicators.
- Accessible names and labels.
- Appropriate contrast.
- No horizontal overflow.
- Functional touch interactions.
- Reduced-motion support.
- Clear exit, retry, reset, and replay controls.

Keep all satirical behavior inside the website.

Do not interfere with browser navigation, copy user clipboard contents without explicit action, imitate real operating-system alerts, trigger deceptive permissions, block real application loading, or collect personal information.

The website should deliberately frustrate expectations without genuinely trapping the user.

---

# 14. BUILD, RUN, AND VERIFY

After implementing the website:

1. Run the application using the project's supported development command.
2. Inspect the actual rendered UI.
3. Test all five challenges.
4. Test correct and incorrect actions.
5. Verify every failure message and next-challenge action.
6. Verify that retry resets the appropriate state.
7. Verify progress and session counters.
8. Test the final completion and replay path.
9. Check keyboard interaction and responsive layout.
10. Check for runtime errors.
11. Run the available lint, test, and build commands.
12. Fix blocking defects and retest.

Do not claim that a test passed unless it was actually executed successfully.

Do not stop after creating only the hero section. Complete the full single-page experience.

---

# FINAL ACCEPTANCE CRITERIA

Deliver one visually exceptional, fully functional webpage with:

- A memorable hero section.
- Five distinct, creative interactive challenges.
- Beautiful visual design and consistent branding.
- Hilarious, context-sensitive failure feedback.
- A compelling retry-and-continue flow.
- Working state management.
- A satisfying ending and replay action.
- Responsive, accessible, reliable behavior.

The result should be impressive at first glance and entertaining after every interaction.

**One page. Five challenges. Gorgeous UI. Delightfully annoying behavior. Zero boring filler.**

Inspect the existing project, implement the complete experience, run it, test it, and summarize the actual results. Do not stop at a plan.
