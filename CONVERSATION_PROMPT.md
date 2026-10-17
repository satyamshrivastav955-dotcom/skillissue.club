# skillissue.club — The UX Tribunal

> **A beautiful website. Questionable decisions. A case file full of receipts. One very suspicious final verdict.**
>
> `skillissue.club` is a single-page, interactive rage-bait satire created for **Attack on Token — Round 2: Token Treachery**. Its interface playfully misleads expectations, reacts to the visitor's actual choices, accumulates a fictional evidence record, and builds toward a classic Rickroll reveal.

> **Project status note:** This README documents the concept, the conversation that shaped it, the prompts and constraints given to the coding agent, and how to verify the implementation. It does not claim that a feature has shipped or a test has passed unless that has been checked in the running project.

---

## Contents

- [1. The challenge](#1-the-challenge)
- [2. The idea we started with](#2-the-idea-we-started-with)
- [3. How the conversation changed the concept](#3-how-the-conversation-changed-the-concept)
- [4. The final V2 concept](#4-the-final-v2-concept)
- [5. The intended visitor journey](#5-the-intended-visitor-journey)
- [6. Visual and interaction direction](#6-visual-and-interaction-direction)
- [7. Final implementation brief for Antigravity](#7-final-implementation-brief-for-antigravity)
- [8. What Antigravity was asked to do vs. what must be verified](#8-what-antigravity-was-asked-to-do-vs-what-must-be-verified)
- [9. Prompt-engineering iteration log](#9-prompt-engineering-iteration-log)
- [10. Mapping the project to Round 2 judging criteria](#10-mapping-the-project-to-round-2-judging-criteria)
- [11. Testing and evidence checklist](#11-testing-and-evidence-checklist)
- [12. Demo plan](#12-demo-plan)
- [13. Limitations and honest status](#13-limitations-and-honest-status)

---

## 1. The challenge

The participant brief for **Attack on Token — Round 2: Token Treachery** describes an agentic prompt-engineering and constraint-based problem-solving challenge. Teams receive a task brief and use the designated AI development environment to guide an AI agent toward a working result. The stated evaluation areas are:

1. Prompt architecture and constraint design.
2. Functional execution.
3. Effective use of the AI agent.
4. Overall quality and coherence of the result.

The exact live challenge is supplied by the organizers during the event. The team therefore chose a concept that could demonstrate detailed instructions, controlled state, intentional interaction design, a coherent narrative, and verifiable implementation.

**Our design goal:** create a web experience whose behavior is intentionally mischievous while its implementation remains reliable. The interface can surprise the visitor; it must not genuinely break the browser, trap the visitor, or pretend that untested behavior works.

---

## 2. The idea we started with

The first creative direction was **`RAGE.EXE — The Interface From Hell`**: a dark, glitchy, deliberately frustrating experience with an evasive button, a progress bar stuck at 99%, misleading controls, annoying dialogs, and a final challenge.

The initial idea treated the experience more like a game with multiple levels. That produced a useful inventory of possible mechanics, but it created two problems:

- It risked becoming a conventional game with a collection of unrelated mini-challenges.
- The player could fail, read a generic message, click “Next,” and feel no real reason to stay invested.

The concept needed a stronger identity than “a website with annoying buttons.” It also had to respect the strict scope: **one continuous webpage, with at most the permitted two-page project scope—not a separate multi-route game.**

### Early interaction ideas

- A button that dodges the cursor.
- A fictional progress bar that stalls at 99% until the visitor notices a clue.
- A toggle with contradictory, satirical status copy.
- A choice puzzle that exposes overconfidence.
- A modal that argues in a humorous, predictable way.
- A final reveal that turns the expected reward into a joke.

These became building blocks, not the final concept by themselves.

---

## 3. How the conversation changed the concept

This section records the decisions and corrections made during the design conversation, in order. It is a development journal, not a verbatim transcript.

### Step 1 — “Make a rage-bait page”

**User direction:** build something creative that makes visitors frustrated through interactive features, ideally with game-like progression.

**Assistant proposal:** an elaborate `RAGE.EXE` concept featuring multiple escalating interactions, a dark cyberpunk visual style, and a full set of challenge mechanics.

**What we kept:** the idea that familiar, simple interface actions can become the source of humor.

**What we later changed:** the scope and presentation. A separate game structure was more complex than needed and did not solve the problem of generic failure messages.

### Step 2 — “We don't have to make the game actually”

**User clarification:** the deliverable is one webpage with features that feel game-like. It does not need to be a complete conventional game.

**Assistant revision:** one active interaction area on a single page, with a small number of challenges, stateful responses, and a simple progression path.

**Resulting constraint:** no game lobby, no level-selection screen, no separate routes, no unnecessary game engine, and no static buttons that only look functional.

### Step 3 — “The UI should be clean and fun”

**User feedback:** the page should be catchy and creative, but a visitor should not simply fail, press Next, and move on without being meaningfully engaged.

**Assistant revision:** move from generic failure messages toward a connected experience. The page should react to choices, vary the commentary, and create consequences from the visitor's actual actions.

**Design principle:** the joke should come from the interaction and the site's personality—not from a random failure screen.

### Step 4 — Research existing examples before V2

To avoid reinventing familiar UX tricks, we looked at these real examples:

- **[User Inyerface](https://userinyerface.com/)** — a deliberately frustrating form/UI experiment. The useful lesson is that a familiar task can become the challenge itself.
- **[UnnecessaryUI](https://unnecessaryui.com/)** — a collection of absurd UI interactions. The useful lesson is to make individual controls deliver a clear comedic idea.
- **[frustrated.io](https://frustrated.io/)** — a catalogue of deliberately frustrating interface patterns. The useful lesson is that recognizable UX annoyances are immediately legible.
- **[The Useless Web](https://theuselessweb.com/)** — a very simple interaction leading to an unexpected payoff. The useful lesson is that a minimal action can create curiosity.

We did **not** want to copy these projects. We wanted to use their broader lessons to create a different narrative and recognizable identity.

### Step 5 — Introduce the UX Tribunal

**Assistant proposal:** treat the site like a fictional internet competency tribunal. The visitor's actions become “evidence,” and the interface gradually becomes more formal, suspicious, and absurd.

This introduced the core signature feature: **the evidence receipt**.

Rather than showing the same insult to everyone, the page can log what the visitor actually did and respond to the interaction. For example:

- “Exhibit A: trusted a button based on confidence alone.”
- “Exhibit B: ignored the useful clue.”
- “Exhibit C: repeated the same action.”
- “Final exhibit: voluntarily continued the investigation.”

The evidence is fictional comedic commentary based only on in-page actions; it is not a real psychological profile.

### Step 6 — Add the classic Rickroll

**User request:** use Rickrolling as an additional rage-bait payoff.

**Assistant proposal:** make it the finale instead of placing a random video in the middle of the page. The visitor is told that their personalized verdict is ready, opens a report reveal, and discovers the embedded Rick Astley video instead.

The intended final copy is:

> **YOUR RESULTS HAVE BEEN POSTPONED.**  
> **YOU HAVE BEEN RICKROLLED.**

Final evidence entry:

> “FINAL EXHIBIT: TRUSTED A WEBSITE CALLED SKILLISSUE.CLUB.”

Use the official YouTube embed and keep it on the same page. The visitor must still have working playback controls, close, reset, and replay actions; autoplay can be blocked by the browser.

Official video: <https://www.youtube.com/watch?v=dQw4w9WgXcQ>

### Step 7 — Respect the scope and make the idea memorable

**User emphasis:** the one-page/two-page constraint matters; we need the best execution rather than an oversized feature list.

**Final direction:** one continuous page, a reactive greeting, a signature interaction, evidence that accumulates based on actual actions, a clear escalation in tone, and one memorable final reveal.

The central creative shift is from **“five things that annoy the user”** to **“one website that builds a ridiculous case against the user.”**

---

## 4. The final V2 concept

### `skillissue.club — The UX Tribunal`

**Tagline:** Beautiful UI. Questionable decisions. Absolutely unnecessary psychological warfare.

**Hero copy:**

> HELLO, HUMAN.  
> We've already formed an opinion.

Supporting copy:

> You haven't done anything yet. Which is, honestly, suspicious.

The page behaves like a fictional institution investigating the visitor's internet competency. The visitor's answers and interactions determine the page's evolving commentary, the evidence receipt, and the final verdict.

### The intended escalation

1. **Greeting:** the site begins teasing the visitor before they press a conventional Start button.
2. **Confidence:** the visitor selects a self-description or takes an apparently easy action.
3. **Surprise:** an interface element behaves unexpectedly in a bounded, discoverable way.
4. **Evidence:** the site records the actual interaction and comments on it.
5. **Escalation:** repeated behavior receives new, contextual commentary and a more bureaucratic presentation.
6. **Anticipation:** the website promises a personalized verdict.
7. **Payoff:** the report reveal becomes a Rickroll.
8. **Exit/replay:** the visitor can close the video, reset the page, or try again.

### Signature mechanic: the evidence receipt

The receipt is the feature that connects the whole page. It must update from real in-page events, not from a hard-coded list shown identically to every user.

Possible evidence entries:

- “Exhibit A: chose confidence before reading the clue.”
- “Exhibit B: attempted to click a button that explicitly had other plans.”
- “Exhibit C: repeated an action and expected a different outcome.”
- “Exhibit D: detected a pattern. The tribunal acknowledges this development.”
- “Exhibit E: voluntarily requested a final verdict.”

The exact copy should depend on what happened. A visitor who solves a puzzle should receive different evidence from someone who repeatedly misses it.

### Interaction inventory

The final V2 can retain a compact set of interactions:

1. **Interactive greeting:** different self-descriptions generate different responses immediately.
2. **Evasive button:** the button moves a bounded distance and eventually reveals a clear solution.
3. **Confidence trap:** a deterministic puzzle with misleading visual emphasis and an inferable clue.
4. **99% club:** a fictional loader stalls until the visitor notices a clue; it must never block the actual application.
5. **Settings committee:** a real toggle surrounded by absurd status commentary.
6. **Verdict/Rickroll:** a deliberate reveal action embeds the official video in place.

These are components of one webpage, not separate pages or a large game engine. If time is limited, prioritize the greeting, evidence receipt, one strong interaction, and the Rickroll finale over adding more puzzles.

---

## 5. Visual and interaction direction

The first screen should look polished and credible. The absurdity emerges through behavior and copy, not through visual clutter.

### Suggested visual system

| Token | Color | Role |
|---|---|---|
| Warm cream | `#FFF7ED` | Editorial backgrounds and light surfaces |
| Near-black | `#171717` | Primary text or dark tribunal surfaces |
| Secondary text | `#746C63` | Supporting copy |
| Coral red | `#F14F3E` | Main actions and failure emphasis |
| Cobalt blue | `#405CE8` | Secondary actions |
| Acid lime | `#C5EF69` | Occasional surprising highlight |
| White | `#FFFFFF` | Interactive surfaces |
| Soft beige | `#E5D9C9` | Borders and separators |

The palette is a proposed design direction; retain the current project's existing system where it already achieves the intended result.

### Design priorities

- Strong headline composition and deliberate whitespace.
- A clear central interaction instead of a dashboard full of widgets.
- A compact evidence receipt that becomes more prominent when new evidence arrives.
- Feedback designed as a visual punchline, not a generic red error message.
- Short, purposeful animations with good timing.
- Consistent type, border, button, and spacing rules.
- Mobile and keyboard support.
- Reduced-motion behavior.

### What to avoid

- Adding feature count just to make the project look bigger.
- Repeating a generic failure card after every click.
- Adding unrelated counters and charts that do not contribute to the joke.
- Excessive flashing or chaotic motion.
- Making the task impossible rather than playfully difficult.
- Breaking navigation or trapping the visitor.

---

## 6. Final product behavior and acceptance intent

The page should feel connected because its components share state and a consistent narrative.

### State the implementation may need

- Selected greeting response.
- Current challenge/interaction state.
- Attempts and retry counts.
- Successful actions.
- Hints used, if hints are implemented.
- Evidence entries generated from real interactions.
- Current feedback message.
- Final verdict state.
- Rickroll player visibility and playback state.

### Functional expectations

- Every visible control works.
- The evidence receipt grows from actual page actions.
- Feedback reflects the action that triggered it.
- Puzzle solutions are deterministic and discoverable.
- Reset, retry, close, and replay work.
- The final video is embedded on the same page; playback may require a user click.
- The experience does not require a login, backend, or external tracking.
- The page remains responsive and does not break actual browser navigation.

---

## 7. Final implementation brief for Antigravity

The following is the final V2 refinement prompt derived from the conversation. It is intended to be given to Antigravity (or the designated coding agent) **against the existing repository**, so it can inspect the current output and make targeted improvements.

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
> **Signature feature — evidence against you:** maintain a local session record of actual challenges attempted, options chosen, repeated interactions, failed attempts, solved puzzles, and hints used. Add context-specific evidence entries in real time. Do not use identical static evidence for every visitor or pretend to know unprovided personal information.
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

---

## 8. What Antigravity was asked to do vs. what must be verified

This section is deliberately split into **requested behavior** and **confirmed implementation**. The conversation contains the prompt and intended design decisions, but it does not include Antigravity's full response, repository diff, or test report. Those details must be taken from the actual agent session and running project rather than invented in this README.

| Area | Requested from Antigravity | What to verify in the actual build |
|---|---|---|
| Single-page scope | Keep the experience on one continuous page and one route. | No separate routes or page reloads during the experience. |
| Interactive greeting | Three choices, distinct feedback, immediate evidence entries. | Each choice changes the response and produces the correct record. |
| Evasive interaction | Bounded button movement and discoverable solution. | It works with pointer, keyboard, and touch and cannot become impossible. |
| Contextual evidence | Maintain an event-driven, local receipt. | Entries match actual events and are not identical static content. |
| Challenge logic | Deterministic puzzles with retry and progression. | Both successful and failed paths work; no softlocks. |
| Visual escalation | The page becomes increasingly formal and absurd while remaining coherent. | Real UI changes across interaction states; it is not just more copy. |
| Rickroll finale | User-triggered, same-page YouTube embed and final punchline. | Embed opens only on deliberate action; player controls, close, reset and replay work. |
| Quality checks | Run the app and available build/lint/test commands. | Record exact commands and real outcomes below. |

### Antigravity's actual plan and implementation notes

**Add from the real Antigravity conversation before presenting this README as a full agent log:**

- **Agent's suggested plan:** `[Paste or summarize Antigravity's actual plan here.]`
- **Files/components it changed:** `[List the actual files from the diff or agent report.]`
- **Features it implemented:** `[List only features verified in the running build.]`
- **Problems it found and fixed:** `[Record actual debugging/refinement steps.]`
- **Testing it performed:** `[Commands and observed outcomes.]`
- **Remaining issues:** `[Record known issues honestly.]`

This placeholder is intentional: Antigravity's response and code diff were not included in the conversation available when this README was prepared. Do not replace this section with imagined implementation details.

---

## 9. Prompt-engineering iteration log

The project evolved through increasingly specific prompts, reflecting the kind of iterative constraint design that Round 2 is meant to evaluate.

| Iteration | Prompt direction | Reason for the change | Intended result |
|---|---|---|---|
| 1 | Build `RAGE.EXE`, an interface that frustrates users with several escalating mechanics. | Generate a distinctive starting concept quickly. | A list of potential interaction mechanics and a bold visual direction. |
| 2 | Do not build a full game; build one page with game-like behavior. | Reduce scope and avoid a game engine or separate screens. | One continuous web experience. |
| 3 | Make the UI cleaner, more creative, and more interactive from the greeting. | The basic failure → Next loop felt too predictable. | Start the joke immediately and use interaction as the punchline. |
| 4 | Research existing intentionally frustrating websites. | Avoid relying only on familiar runaway-button/loading-bar tricks. | Learn from existing UX experiments without copying them. |
| 5 | Introduce the UX Tribunal and evidence receipt. | Connect otherwise separate interactions into a narrative. | A session-aware satirical website that remembers actual actions. |
| 6 | Use a Rickroll as the final reward reveal. | Create a memorable payoff rather than a random feature. | A user-triggered, same-page reveal at the moment the visitor expects results. |
| 7 | Enforce the single-page/two-page scope and prioritize execution. | Avoid scope creep and keep time focused on the signature features. | A coherent, testable deliverable rather than an overlarge feature list. |

### What the prompts were designed to constrain

- **Scope:** one page, one route, no full game engine.
- **Behavior:** every visible control has real state and a defined result.
- **Narrative:** each interaction contributes to the same tribunal story.
- **Personalization:** the site references actions actually performed in the session.
- **Safety and control:** the frustration remains fictional; the user can exit, reset, close, and replay.
- **Verification:** features and tests are only reported as complete when actually checked.

---

## 10. Mapping the project to Round 2 judging criteria

The participant brief identifies four evaluation areas. The table below describes how the design is intended to address each one and what evidence the team should prepare.

| Judging area | Design / engineering response | Recommended evidence |
|---|---|---|
| Prompt architecture and constraint design | Detailed build prompt specifies page scope, state behavior, deterministic puzzle rules, interaction boundaries, accessibility, and acceptance criteria. | Final prompt, refinement prompt, and brief explanation of why the prompt was revised. |
| Functional execution | Interactions have explicit success/failure behavior, retry/reset paths, and actual session state. | Live demo of each interaction and test results from the running application. |
| Effective use of the AI agent | The workflow is inspect → implement → run → observe → refine → retest, with prompts tied to observed weaknesses. | Antigravity's actual plan, file diff, refinement history, and commands/results. |
| Overall quality and coherence | One visual system and one escalating story connect the greeting, evidence receipt, and Rickroll ending. | Live page demonstration and a short explanation of the narrative decisions. |

Do not present the intended outcome as proof. Demonstrate the working website and show the actual prompt/code/test evidence where requested.

---

## 11. Testing and evidence checklist

Mark these items complete only after testing the running implementation.

### Interaction

- [ ] The greeting is interactive and produces distinct responses for its choices.
- [ ] The primary interaction works and has a discoverable solution.
- [ ] Every puzzle has deterministic behavior.
- [ ] Incorrect attempts generate context-sensitive feedback.
- [ ] The evidence receipt grows from real interactions.
- [ ] Repeated behavior can trigger different, context-aware commentary.
- [ ] The user can retry or progress without becoming trapped.

### Rickroll and final state

- [ ] The final verdict follows from the actual session state.
- [ ] The visitor clicks to trigger the YouTube embed.
- [ ] Playback behavior works, or normal controls are available if autoplay is blocked.
- [ ] The video remains within the same webpage.
- [ ] Close, reset, and replay actions work.

### Quality

- [ ] The initial screen is visually strong before interaction.
- [ ] The feedback is varied and relevant rather than generic repetition.
- [ ] Responsive layout has been checked.
- [ ] Keyboard and visible-focus behavior have been checked.
- [ ] Reduced-motion behavior has been checked.
- [ ] No blocking console errors remain.
- [ ] Available lint/build/test commands have been run.

### Test record

| Command or check | Actual result | Date / notes |
|---|---|---|
| Development server | `[Record outcome]` | `[Fill in]` |
| Build | `[Record outcome]` | `[Fill in]` |
| Lint/type checks | `[Record outcome]` | `[Fill in]` |
| Interaction tests | `[Record outcome]` | `[Fill in]` |
| Rickroll reveal | `[Record outcome]` | `[Fill in]` |

---

## 12. Demo plan

Keep the demonstration short enough that the judges see the concept rather than a long walkthrough.

1. **Start with the greeting.** Choose one response and show the site immediately reacting to it.
2. **Trigger a real interaction.** Demonstrate the evasive action or another distinctive control.
3. **Show the evidence receipt.** Explain that it records actual actions instead of displaying the same static joke.
4. **Cause a second outcome.** Show how the site changes tone or commentary based on the interaction.
5. **Reveal the verdict.** Trigger the final report and Rickroll inside the page.
6. **Prove control and reliability.** Close/reset/replay the experience to show that the prank does not break the website.

### Short pitch

> “skillissue.club is a satirical internet competency tribunal. It starts judging you before you begin, records your actual interactions as fictional evidence, and escalates its commentary as you use the page. The challenge was to make the interface feel mischievous without making the implementation genuinely broken. The experience culminates in a personalized verdict—and, naturally, a Rickroll. We used an iterative agent workflow to refine the prompt, reduce scope, and make the website a single coherent experience.”

Use this as the pitch only if it matches what the running implementation actually demonstrates.

---

## 13. Limitations and honest status

This README is a record of the design conversation and implementation brief. It does not independently verify the current repository, the exact suggestions produced by Antigravity, the files changed by the agent, or the outcome of its tests.

Before final submission:

1. Replace the Antigravity placeholders with its actual plan and implementation report.
2. Verify every listed feature in the running website.
3. Fill in the test record with commands that were actually run and their real outputs.
4. Remove or amend any statement that does not match the build.
5. Keep screenshots or a short demo recording of the working interactions if the event's rules permit them.

**The strongest proof is the complete prompt-to-implementation story:** the original user need, the constraints that changed the design, the reasoning behind the V2 concept, the actual agent work, and a verified final demonstration.

---

*Project: `skillissue.club` · Hackathon: Attack on Token · Round: Token Treachery*
