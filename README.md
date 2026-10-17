# skillissue.club — The UX Tribunal

> **Beautiful UI. Questionable decisions. Absolutely unnecessary psychological warfare.**
>
> A satirical, interactive rage-bait website that turns innocent clicks into questionable decisions, builds a fictional case against the visitor, and delivers a hilariously unfair-looking verdict—with a classic Rickroll waiting at the end.

**Project type:** Single-page interactive web experience  
**Hackathon:** Attack on Token — Round 2: Token Treachery  
**Core idea:** Make a polished interface that playfully frustrates expectations, reacts to the visitor's real in-page choices, and builds toward one memorable punchline.

---

## 1. The idea

Most frustrating websites feel broken. **skillissue.club is designed to look excellent while behaving mischievously on purpose.** It opens with an interactive greeting, introduces deceptively simple interactions, responds to mistakes with context-sensitive satire, records the visitor's actions in a fictional “evidence receipt,” and promises a personalized verdict. At the moment the visitor expects a serious result, the site reveals the classic Rickroll.

The experience is one continuous webpage—not a separate game, a multi-route application, or a collection of unrelated mini-games.

### The intended emotional arc

1. **Curiosity:** “Hello, human. We've already formed an opinion.”
2. **Confidence:** the visitor chooses a self-description and begins interacting.
3. **Surprise:** a control or clue behaves differently than expected.
4. **Escalation:** the page remembers the visitor's actions and adds evidence to its fictional case file.
5. **Anticipation:** the site announces that the personalized verdict is ready.
6. **Payoff:** the final reveal Rickrolls the visitor, then offers a usable close/reset/replay action.

The frustration is part of the satire, but it must remain playful. Every puzzle needs a discoverable solution, and visitors must always retain genuine control of their browser and the page.

## 2. Why this concept fits Token Treachery

The participant brief describes Round 2 as agentic prompt engineering and constraint-based problem-solving. It names four evaluation areas: **prompt architecture and constraint design, functional execution, effective use of the AI agent, and the overall quality and coherence of the result.**

This project is intentionally scoped around those areas:

| Round 2 evaluation area | How the project addresses it | What should be demonstrated |
|---|---|---|
| Prompt architecture and constraint design | A detailed build prompt defines the single-page scope, interaction rules, state behavior, accessibility boundaries, and completion criteria. | The prompt and the implemented behavior agree; constraints are explicit and testable. |
| Functional execution | Each interaction uses real application state rather than being a static mockup. | Demonstrate each control, correct/incorrect paths, retry, reset, final reveal, and replay. |
| Effective use of the AI agent | The implementation process is structured as inspect → plan → implement → run → test → refine. | Preserve prompt iterations and show which agent changes fixed actual observed problems. |
| Quality and coherence | A single “UX Tribunal” narrative connects the greeting, interactions, evidence receipt, and final reveal. | The visitor experiences one escalating story with consistent visual design and a deliberate payoff. |

**Important:** This table describes the design intent and the proof the team should collect. It is not a claim that every feature or test has already passed. Confirm the running implementation before submitting.

## 3. Product and visual direction

### Brand

- **Name:** `skillissue.club`
- **Concept:** a fictional internet competency tribunal
- **Tone:** witty, self-confident, bureaucratic, increasingly petty
- **Hero direction:** “HELLO, HUMAN. We've already formed an opinion.”
- **Final punchline:** “YOUR RESULTS HAVE BEEN POSTPONED. YOU HAVE BEEN RICKROLLED.”

### Visual principles

The interface should look deliberately designed, not like a default dashboard. The intended visual language is editorial, minimal, expressive, and easy to understand at a glance.

Suggested palette:

- Warm cream: `#FFF7ED`
- Near-black: `#171717`
- Secondary text: `#746C63`
- Coral red: `#F14F3E`
- Cobalt blue: `#405CE8`
- Acid-lime highlight: `#C5EF69`
- White surface: `#FFFFFF`
- Soft beige border: `#E5D9C9`

Design priorities:

- Strong typography hierarchy and deliberate whitespace.
- One prominent interaction area at a time.
- Contextual failure feedback presented as the punchline, not a generic red error.
- Subtle, purposeful animation rather than constant flashing or visual noise.
- Consistent branding across the greeting, challenge panel, evidence receipt, and final verdict.
- Responsive layout, keyboard support, visible focus states, and reduced-motion support.

## 4. The single-page experience

### A. Interactive greeting

Instead of showing an inert landing page with a generic Start button, immediately ask the visitor to choose a self-description, such as:

- “I'm exceptionally good at the internet.”
- “I simply make fewer mistakes.”
- “Why am I being interviewed?”

Each choice produces different satirical copy and adds a corresponding entry to the local evidence receipt. The joke begins before the first challenge.

### B. The evasive button

A visually attractive button moves a bounded distance before a pointer click. Its commentary becomes increasingly petty. After a limited number of evasions, a discoverable solution is provided. Keyboard and touch users receive a workable alternative; the control must never become impossible to activate.

### C. The confidence trap

Present a small set of plausible buttons and a clue that lets the visitor infer the correct choice. Incorrect choices trigger different context-sensitive roasts; the solution is deterministic rather than random.

### D. The 99% club

A fictional progress bar stops at 99%. A small, discoverable clue indicates that a particular element is interactive. The visitor can complete it without waiting indefinitely; the real website remains responsive.

### E. The settings committee

A functional toggle is surrounded by absurd, contradictory fictional status copy, such as “PEACE DISABLED SUCCESSFULLY.” The toggle itself remains operable and accessible; the joke belongs in the surrounding interface commentary.

### F. The evidence receipt

This is the signature feature. It logs real in-page events and turns them into a narrative:

- “Exhibit A: trusted a button based on confidence alone.”
- “Exhibit B: ignored the useful clue.”
- “Exhibit C: repeated the same action and expected a different outcome.”
- “Final exhibit: voluntarily continued the investigation.”

The record should be based only on actual session interactions. If a visitor repeats a mistake, the page can make a new observation. It must not pretend to know personal information it was never given.

### G. The final verdict and Rickroll

The site announces that the visitor's personalized verdict is ready. A report envelope, seal, and `REVEAL MY RESULTS →` button build anticipation. After a deliberate user click, the page embeds the official YouTube video for Rick Astley's **“Never Gonna Give You Up”** in place, without navigating away.

Official video: <https://www.youtube.com/watch?v=dQw4w9WgXcQ>

The reveal copy:

> **YOUR RESULTS HAVE BEEN POSTPONED.**  
> **YOU HAVE BEEN RICKROLLED.**

The evidence receipt gets a final entry. Keep the YouTube player controls and provide usable close, reset, and replay actions. Autoplay may be blocked by the browser, so the experience must still work if the visitor needs to press Play.

## 5. Prompt-engineering and iteration record

This section records the design brief and the prompt strategy developed during the conversation. The intent is to show how the task was refined from a broad idea into a bounded, testable product.

### Iteration 1 — Initial concept

**User's intent:** a creative rage-bait page whose interactions make visitors frustrated, preferably structured around simple game-like challenges and progression.

**Initial direction:** `RAGE.EXE`, an intentionally infuriating interface with evasive buttons, a 99% loading puzzle, confusing controls, absurd dialogs, and a final challenge.

**What we learned:** a full game with many levels would create unnecessary scope. A list of disconnected challenges also makes it too easy for a visitor to fail, click Next, and forget the experience.

### Iteration 2 — Scope correction

**User clarified:** this is not a game that needs a real game loop; it should be one webpage with game-like interactions whose purpose is to rage-bait the visitor creatively.

**Prompting change:** remove the game engine, multiple routes, level selection, and disconnected pages. Keep a single page, one active interaction area, and clearly functional state.

### Iteration 3 — Design quality and interactivity

**User clarified:** the UI must be clean, fun, attractive, and interactive from the greeting—not just a series of “you failed, try next” messages.

**Prompting change:** make the greeting interactive; react to users' actual choices; use a contextual feedback system; keep the layout art-directed; and connect the interactions through shared state.

### Iteration 4 — Signature narrative

**User requested:** use the classic Rickroll as a rage-bait payoff and emphasized the strict one-page / two-page constraint.

**Prompting change:** make the final verdict a delayed reveal that embeds the official video inside the same page. No redirect, no separate route, and no requirement to leave the website.

### Iteration 5 — Final V2 direction

**Decision:** frame the website as **The UX Tribunal**. The site becomes increasingly bureaucratic and judgmental as it accumulates a fictional evidence receipt from actual choices. The Rickroll is the climax, not a random feature.

**Why this is more coherent:** the greeting, small interactions, evidence log, and final reveal now belong to one narrative instead of five unrelated tricks.

## 6. Final refinement prompt for the coding agent

The following prompt captures the final V2 direction. Use it against the existing repository; do not blindly replace working files or rebuild the application from scratch.

> **CRITICAL REDESIGN: SKILLISSUE.CLUB — THE UX TRIBUNAL**
>
> You have already implemented the initial version of skillissue.club. The current experience is too predictable: users fail, read a generic joke, press Next, and feel no reason to care.
>
> Improve the existing implementation rather than rebuilding it blindly. Preserve the framework and working functionality. Inspect the current code and rendered interface, identify the three weakest interactions or visual elements, and make targeted improvements.
>
> **Hard constraints:** one continuous webpage; one route; no separate game screens, game lobby, level-selection screen, or unnecessary game engine. The page must remain responsive and accessible. Do not sacrifice working features for a redesign.
>
> **Creative direction:** transform the page into a satirical internet competency tribunal. It begins polite and professional, becomes suspicious after mistakes, then increasingly bureaucratic and absurd. It remembers the user's real choices and assembles a fictional case file. The final reveal promises a personalized verdict and then Rickrolls the visitor inside the same page.
>
> **Signature feature — evidence against you:** maintain a local session record of actual challenges attempted, options chosen, repeated interactions, failed attempts, solved puzzles, and hints used. Add context-specific evidence entries in real time. Examples: “trusted a button based on confidence alone,” “ignored the useful clue,” and “repeated the same action.” Do not use identical static evidence for every visitor or pretend to know unprovided personal information.
>
> **Interactions:** retain a bounded, evasive button with a discoverable solution; a deterministic confidence puzzle; a 99% progress puzzle that does not block real application activity; and a functional settings toggle surrounded by satirical commentary. Keep them in one active challenge area on the same page. Give failures contextual reactions, evidence entries, retry, and continue options.
>
> **Escalation:** early copy is polite; later copy becomes formal and judgmental. Let the evidence panel, status labels, and typography respond to accumulated interactions. Use only a few purposeful transitions; avoid clutter and constant flashing.
>
> **Rickroll finale:** show “YOUR PERSONALIZED VERDICT IS READY,” a report envelope or case seal, and `REVEAL MY RESULTS →`. Only after a deliberate click, load the official YouTube embed for `https://www.youtube.com/watch?v=dQw4w9WgXcQ`. Keep playback on the same page, account for autoplay restrictions, retain normal player controls, and provide close, reset, and replay actions. Reveal “YOUR RESULTS HAVE BEEN POSTPONED. YOU HAVE BEEN RICKROLLED.” Append “FINAL EXHIBIT: TRUSTED A WEBSITE CALLED SKILLISSUE.CLUB.”
>
> **Visual quality:** inspect the current UI for generic cards, weak hierarchy, repetitive buttons, empty space without purpose, and failure messages without visual impact. Build an art-directed editorial interface using near-black or warm cream, off-white typography, restrained coral-red accents, and occasional acid-lime highlights. Use a dominant hero, central challenge area, compact progress details, and a clear evidence receipt. The result should feel premium, not like a generic dashboard.
>
> **Reliability:** keep escape, reset, retry, and replay functional. All tricks must remain inside the fictional experience. Do not interfere with browser navigation, imitate real security alerts, request deceptive permissions, collect personal information, or trap users. Use deterministic state and respect reduced-motion preferences.
>
> **Workflow:** run the current project; identify weak points; implement targeted improvements; test correct and incorrect paths, evidence accumulation, retries, reset, final video reveal, and replay; run available build/lint checks; fix defects; and report what was actually changed and tested. Do not claim unverified success.
>
> **Definition of success:** one beautiful webpage whose greeting immediately baits the visitor, whose evidence receipt reacts to real interactions, whose tone escalates, and whose personalized verdict culminates in a memorable Rickroll. Prioritize a coherent narrative and excellent execution over adding more features.

## 7. Round 2 verification checklist

Use this checklist before submission. Mark an item complete only after testing it in the running website.

- [ ] The greeting itself is interactive and generates different responses for different choices.
- [ ] Every visible control performs its advertised action.
- [ ] The evasive button has a deterministic solution and keyboard/touch alternatives.
- [ ] The confidence puzzle has a discoverable, repeatable answer.
- [ ] The 99% puzzle never blocks the real page and can be solved without indefinite waiting.
- [ ] The settings toggle remains functional and accessible.
- [ ] The evidence receipt records actual session events and varies its commentary based on them.
- [ ] The tone and visual presentation escalate as the session develops.
- [ ] The final reveal is triggered by a deliberate click and stays on the same page.
- [ ] The Rickroll embed has normal playback controls and handles autoplay being blocked.
- [ ] Close, reset, retry, and replay controls work.
- [ ] Responsive layout, keyboard navigation, visible focus, and reduced-motion behavior have been checked.
- [ ] Available build, lint, and test commands have been run; results are accurately documented.
- [ ] No feature or test is described as complete without evidence.

## 8. Demo plan for judges

A short, deliberate demonstration will communicate the idea better than showing code first:

1. Open the page and interact with the greeting. Show that the response changes with the choice.
2. Try the evasive action and show the first contextual roast.
3. Make a mistake in another challenge and point out the new evidence entry.
4. Repeat a behavior to demonstrate that the site remembers and reacts to the session.
5. Finish the interaction and reveal the final verdict/Rickroll.
6. Briefly show that reset and replay work and that the site remains one continuous page.

Keep the presentation focused on the prompt-to-behavior connection: the constraints in the build prompt should be visible in the actual result.

## 9. Honesty and implementation status

This README documents the concept, requirements, prompt evolution, and intended verification process. **It does not by itself prove that the current code implements every feature or passes every test.** Update this section after testing the actual repository.

- Framework and environment: record from the actual project.
- Implemented interactions: verify against the running website.
- Tests/build/lint: list only commands actually run and their real outcomes.
- Known issues: record any remaining defects before submission.

The project should be judged on the running implementation and the team's ability to explain and verify its design—not on unsupported claims in documentation.

---

**Repository tagline:** Beautiful UI. Questionable decisions. Absolutely unnecessary psychological warfare.
