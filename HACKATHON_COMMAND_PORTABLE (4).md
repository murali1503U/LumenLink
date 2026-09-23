# Hackathon Command Center — Portable Edition v2

> **What this is:** every phase, reference table, and code pattern needed to plan, build, and pitch
> a hackathon project — merged into one self-contained document. No external lookups.
>
> **How to use with two models (recommended setup):** paste this whole file as the system
> prompt / custom instructions for **Qwen**. Qwen is the architect — it reads this doc, plans,
> and writes exact instruction packets (Phase 11) for **Antigravity/Gemini**, which only executes.
> Never do it the other way around: Antigravity does not plan, does not choose libraries, does not
> resolve ambiguity — it builds exactly what Qwen specifies and reports back.
> Single-model use works too — just run every phase in order yourself.
>
> **Core defaults baked into this doc (don't relitigate unless told to):**
> 1. Code is **Python only**. Performance comes from libraries that are internally Rust/C/C++ but
>    installed via plain `pip`/`uv` — never hand-written native code, unless Phase 9 is invoked.
> 2. Every line written obeys the **Engineering Ladder** (Phase 4.5) — less code, more logic,
>    reuse before write, native before dependency, dependency before hand-rolled.
> 3. Team workflow assumes **mixed Linux + Windows** by default (Phase 6).
> 4. Git defaults to **no GitHub / no cloud account required** (Phase 7), public link only as an
>    optional final export step.
> 5. Qwen architects, Antigravity executes (Phase 11) — this is the default division of labor
>    whenever both are available.

---

## Step 0 — Intake

| Input | Options |
|---|---|
| **Duration** | 2hr / 7hr / 12hr / 24hr / 48hr (or custom) |
| **Team size** | 1 / 2 / 3 / 4 / 5 / 6 |
| **Problem statement** | Organizer-provided OR open-ended (→ Phase 3.0 if open-ended) |
| **Judging rubric / marking scheme** | Published with weights, published unweighted, or none given (→ Phase 3.4) |
| **Pitch time limit** | e.g. "5 min + 2 min Q&A" — drives Phase 4.3's timeboxing, ask if unknown, don't assume a default |
| **Track/domain** | HealthTech, FinTech, EdTech, Social Impact, AI/ML, Sustainability, etc. |
| **OS mix on the team** | e.g. "2 Linux, 1 Windows" — drives Phase 6 |
| **Submission host requirement** | GitHub specifically, or just "a link / a zip"? — drives Phase 7.7 |
| **Build timing** | Building live at the event, OR pre-building a generic chassis beforehand (→ Phase 3.5) |
| **Model stack** | Qwen+Antigravity (Phase 11), single model, or other — drives how instructions are issued |
| **Field size / elimination format** | Single round, OR multi-round with a cut (e.g. 1000 → shortlist of 10) — drives Step 0.5 |
| **Problem statement clarity** | Fully specified, OR a few lines with no real explanation (→ Phase 2.0) |

---

## Step 0.5 — Elimination-Round Strategy (large fields, cuts to a shortlist)

Skip this if it's a single-round event. When there's a cut — hundreds/thousands of submissions
narrowed to a shortlist, then a live final — the winning strategy is genuinely different on each
side of the cut, and treating them the same wastes effort in the wrong place.

**Before the cut (surviving Round 1 — judges skim, they don't watch):**
- With hundreds of submissions, each one gets seconds of attention before a skim/no-skim decision.
  Put your single strongest §3.4 proof point in the *first line* of the README or submission form
  — not in section 4. Assume nobody scrolls unless the first line earns it.
- If a video/GIF is required, the first 3 seconds must show the working thing, not a logo intro or
  a team-name card — assume a reviewer decides whether to keep watching inside 10 seconds.
- Round 1 rewards the clarity and completeness of the *written* case over demo polish. Impact and
  Innovation (§3.4) can be judged from text alone; a rough demo with a razor-sharp problem/impact
  case beats a polished demo with a vague one. Save the animation/motion polish from §4.5 for
  Round 2 — it doesn't move the needle on a skimmed written submission.
- Fill every optional field the submission form offers. A blank field reads as an unfinished
  project to someone skimming 1000 of these, whether or not it actually is one.
- Don't rehearse the live pitch yet if Round 1 doesn't require it — that's Round 2 time spent early.

**After the cut (finals — a field of ~10, judges compare, they don't skim):**
- Everyone left cleared the "does it work" bar. The delta that decides ranking now is depth, not
  existence — expect judges to go two levels deeper on the Judge Q&A Prep questions (§Templates)
  than a skimmed submission ever got asked.
- Run Phase 12's on-site recon aggressively — with only ~10 teams, you can realistically see what
  all of them built, and the differentiation delta matters more per team than it did at 1000.
- The §3.4.5 scope-cut log becomes a live planning tool here, not just a Q&A answer: finalist
  rounds often give a short additional build window before presenting — use the log, in reverse, to
  decide what to add back first, in differentiation order, not by whatever's easiest to bolt on.
- §4.3.1's rehearsal discipline matters more, not less, here — timing, handoffs, and composure
  under follow-up questions are now real, visible differentiators between otherwise-strong teams.

---

## Phase 1 — Time Budget & Roles

### Role matrix (1–6 people)

| Role | 1p | 2p | 3p | 4p | 5p | 6p |
|---|---|---|---|---|---|---|
| Researcher / Strategist | You | A | A | A | A | A |
| Designer / Presenter | You | B | B | B | E | E |
| Builder / Tech Lead | You | A | C | C | B | B |
| Pitch / Docs Writer | You | B | B | D | E | F |
| Frontend Lead | You | B | C | D | C | C |
| AI/ML Lead | You | A | B | C | D | D |
| QA / Integration (late-shift) | You | A | A | A | A | F |

Read by column for your team size — one person can (and should) hold several roles below 4.

**Feature Zero.** Regardless of duration, the first build checkpoint after the skeleton should be
one thin end-to-end slice — mock data is fine — deployed and demo-able before any individual
feature is built. Its only job is to guarantee there's always something to show no matter when
time runs out; it is not the MVP, it's proof the pipe from UI to backend to (mocked) AI actually
connects. Every duration's block below has room for it right after "Skeleton."

### Time blocks by duration

**2hr:** Intake+idea 0:00–0:15 → Skeleton 0:15–0:30 → Core build 0:30–1:30 → Pitch 1:30–1:45 → Rehearse/submit 1:45–2:00.

**7hr:** Research 0:00–0:45 → Ideation/scoring 0:45–1:15 → Skeleton 1:15–1:45 → Core build 1:45–4:30 → Polish 4:30–5:30 → Deck 5:30–6:15 → Rehearse/submit 6:15–7:00. *(Feature freeze 5:30)*

**12hr:** Research 0:00–1:00 → Ideation 1:00–1:45 → Design planning 1:45–2:30 → Skeleton 2:30–3:00 → MVP core 3:00–7:00 → Secondary features 7:00–9:00 → Polish/QA 9:00–10:30 → Deck+rehearsal 10:30–12:00. *(Feature freeze 9:00)*

**24hr:** Deep research 0:00–2:00 → Ideation/validation 2:00–3:00 → Architecture 3:00–4:00 → Skeleton 4:00–4:30 → Build sprint 1 4:30–12:00 → Rest 12:00–15:00 (recommended) → Build sprint 2 15:00–19:00 → Polish 19:00–21:00 → Deck 21:00–22:30 → Rehearse/submit 22:30–24:00. *(Feature freeze 19:00. Sleep is a competitive advantage.)*

**48hr:** Research 0:00–3:00 → Ideation/prototyping 3:00–6:00 → Architecture+skeleton 6:00–8:00 → Build sprint 1 8:00–20:00 → Rest 20:00–24:00 → Build sprint 2 24:00–36:00 → Rest 36:00–38:00 → Polish 38:00–42:00 → Pitch/demo prep 42:00–46:00 → Rehearse/submit 46:00–48:00. *(Feature freeze 38:00.)*

### Parallelization by team size
- **2p:** A = research+build, B = design+pitch (prep while A builds).
- **3p:** A = research+architecture, B = core build, C = UI/UX+pitch (starts after wireframe discussion).
- **4p:** A = research/strategy (shifts to QA later), B = backend/APIs, C = frontend/UI, D = design+pitch (hands off slides early).
- **5p:** A = research/strategy→QA, B = backend/APIs, C = frontend/UI, D = AI/ML layer, E = design+pitch (full-time from minute 0 — the extra head goes to craft, not to a second builder).
- **6p:** A = research/strategist, B = backend lead, C = frontend lead, D = AI/ML lead, E = design/UX (owns the token system, Phase 4.5), F = pitch/docs, folding into QA after feature freeze. At 6, run Phase 8's dependency map strictly — more people without a locked contract is slower, not faster.

Output: a time-blocked schedule + explicit cutoffs (feature freeze, pitch prep deadline, rehearsal window).

---

## Phase 2 — Problem Research Engine

Run these lenses on the problem statement (skip entirely if you're in Phase 3.0 free-will mode — score first, research only your top 1–2 ideas):

### 2.0 — When the problem statement is a few lines with no real explanation

Don't start building off a guess. Run this before 2.1 whenever the prompt is thin, and only then
flow into the lenses below — now grounded in actual answers instead of assumptions.

1. **Scratchpad the gap, explicitly, as a team** — three short lists, kept visible (pin them, or
   put them straight into the Problem Brief below):
   - `WHAT WE KNOW` — the problem statement's actual words, quoted, nothing added.
   - `WHAT WE NEED` — the specific missing information that would change the build: real audience,
     must-have vs nice-to-have, what judging actually weights, explicit out-of-scope.
   - `WHAT WE'RE ASSUMING` — everything you're about to build on that the statement didn't
     actually say, written as assumptions, not facts. Revise this list the moment new information
     arrives (an organizer answer, an FAQ update) — a written, revisable assumption beats a silent
     one that quietly becomes "the requirement" three hours in.
2. **Restate the prompt in one sentence, out loud, and get the whole team to agree on it** — "a
   service where [users] can [core action] to get [outcome]." This alone surfaces disagreements
   about what's actually being asked before any code exists, cheaper now than after Feature Zero.
3. **Ask the organizers the 3–5 highest-leverage questions**, if there's any channel (Discord,
   Slack, a mentor in the room): who's the real user, what's must-have vs nice-to-have, what does
   judging actually weight (feeds §3.4), what's explicitly out of scope. If organizers are
   unreachable or slow, state the assumption from step 1 out loud and move — a stalled team loses
   more than a team that built on a stated, later-correctable assumption.
4. **Do real research on the gap, not just a guess** — one disciplined scout pass beats both
   skipping research and over-researching for hours:
   - A handful of quick searches covering: (a) how this problem is solved today in the real world,
     not just by other hackathon projects, (b) the most current/frontier approach to it, (c) one
     search specifically trying to find a reason your first-instinct approach is wrong, already
     tried, or already abandoned. That third query is a counter-evidence check — it catches "why
     hasn't someone done this" (§Templates, Judge Q&A #7) before a judge does.
   - Note the source and date next to any number or claim headed for a slide. "Where did that
     number come from" is a real judge question (§Templates #3) — being able to answer instantly
     is the entire difference between a defensible claim and an invented one.
   - This is ~10–15 minutes, not a literature review — a hackathon isn't a thesis. One scout pass,
     a handful of credible sources, and the assumption list from step 1 is enough to move from
     guessing to informed.
5. **Separate true novelty from engineering cleanup** when scoring in §3.4 — "cleaner API" or
   "nicer code" is not a novelty claim a judge will credit; a genuinely new mechanism, dataset, or
   angle is. Be honest with the team about which one you actually have before it's on a slide.

**2.1 Pain Decomposition:** root cause · who suffers most · current workarounds · key friction points.

**2.2 Landscape Scan (3×3 grid):** existing app 1 / existing app 2 / manual-offline method — each row: what they do, what they DON'T do (your gap).

**2.3 Stakeholder Map:** end users, indirect beneficiaries, system admins, policymakers, businesses — note conflicting interests (judges reward this depth).

**2.4 Data & Feasibility Check:** what data is needed? what APIs/datasets are free? what can be mocked vs. must be real?

Output → **Problem Brief** (§Templates).

---

## Phase 3 — Ideation & Scoring

### 3.0 — Free-will mode (no problem statement given)

Run this **before** Phase 3.1 whenever there's no organizer-set problem. Skip Phase 2's research pass until an idea survives scoring.

1. **Domain × mechanism sweep.** Cross a domain against a mechanism, fast, no filtering yet — generate 8–10 raw ideas in under 10 minutes:
   - Domains: health, climate/sustainability, accessibility, local civic/government, dev tooling, education, elder/child care, financial inclusion, disaster response, mental wellbeing, food waste/supply chain, creator economy.
   - Mechanisms: on-device AI, multi-agent orchestration, voice/conversational, AR/spatial, real-time collaboration, computer vision, predictive/forecasting, automation of a manual paper process.
2. **Instant gut-cut.** Drop anything that's a named clone or needs data you can't get in the time budget — don't score those.
3. Feed survivors into **3.2 Scoring rubric** below. Free-will mode still ends with a scored, differentiated pick — it's a wider net, not a lower bar.
4. If the team is pre-building (Phase 3.5), design the chassis generic enough to fit at least 3 of the surviving domains — don't lock the architecture to one idea yet.

### 3.1 — Techniques (pick 2, with a problem statement in hand)
- **SCAMPER:** Substitute / Combine / Adapt / Modify-Magnify / Put to other use / Eliminate / Reverse.
- **How Might We:** 5 HMW questions from Phase 2's pain points.
- **Worst Possible Idea, then invert:** list 3 worst ideas, invert each.

### 3.1b — Divergent frame sweep (when the obvious three keep resurfacing)

SCAMPER/HMW are good defaults; reach for this when they keep producing the same three answers a
senior engineer would give in 30 seconds — correct, forgettable, and identical to what half the
room will also produce. Costs ~5× a normal ideation pass — run it once, at ideation, not for every
later decision.

1. **Pick 4–5 frames** from the table below — bias toward `code`/`design` tags for a code-shaped
   problem, always include one `wild` frame for range.
2. **Generate each frame's ideas in full isolation before looking at any other frame's output** —
   finish frame A's ideas completely, set it aside, only then start frame B. Seeing one frame while
   generating another collapses this into one wider version of the same thought; the isolation is
   what produces genuinely different angles, not the frame labels themselves.
3. Per frame: 4–6 short, distinct ideas, one phrase/sentence each, no evaluation yet — the first
   three obvious answers everyone would give are explicitly banned from this pass.

| Frame | Vantage prompt | Tags |
|---|---|---|
| Regulator | Audits for compliance/failure modes — what must be provable or refusable here? | design |
| 10-year-old | Naive, unencumbered, never seen software — what's the dumb-simple version nobody considers because it seems too obvious? | wild |
| Hostile competitor | Generate ways to exploit, break, or sabotage the obvious solution — then invert each into an idea. | code, design |
| Logistics | Steal mechanisms from queues, batching, just-in-time, last-mile — apply them literally here. | code |
| Game designer | Loops, rewards, friction, save-states — treat the user as a player. | design |
| Inversion | Ask the opposite question — if the goal is X, how would you guarantee NOT X? Negate each answer back. | code, design |
| $0 budget, 1 hour | No money, no team, one hour — what's the crudest version that still does the load-bearing thing? | general |
| Remove the load-bearing assumption | Name the thing everyone treats as fixed (a framework, a database, request-response) — imagine it's gone. | wild |

4. **Score and cluster**, same axes as §3.2/§3.4 — novelty, viability, fit. Flag traps explicitly
   (attractive but hides a real cost, a false economy, or won't scale) with a one-line reason —
   don't just quietly drop them.
5. **Converge with an actual opinion.** Thirty raw ideas handed over with no recommendation is a
   cop-out — pick the 2–4 that survive scoring, mark the non-obvious-but-viable one, say why.

### 3.2 — Scoring rubric (score 1–5 each)

| Criterion | Weight |
|---|---|
| Impact — solves root cause? | 30% |
| Feasibility — buildable in the time? | 25% |
| Novelty — clear differentiator? | 25% |
| Demo-ability — showable live in 3–5 min? | 20% |

`score = I×0.30 + F×0.25 + N×0.25 + D×0.20`. Pick top 1–2 ideas.

### 3.3 — Novelty validation
Not a named clone · has one unique angle (tech/segment/delivery/business model) · "aha moment" stated in one sentence.

### 3.4 — Rubric-first angle scoring (when the organizer's judging criteria are published)

Judges score against *their* rubric, not against "cool tech" or the generic weights in §3.2.
Whenever a real marking scheme exists, run this instead of (or layered on top of) §3.2 — it's the
same shape but scored against the actual criteria that decide your ranking, before anyone touches
an editor:

1. **Extract every judged criterion verbatim, with its weight.** If no weights are published, ask
   the team to gut-rank them 1st/2nd/3rd — never silently assume equal weight.
2. **Reverse-engineer what wins.** For each criterion, write the concrete, demo-able proof point a
   judge could point at in 30 seconds — "technical difficulty" → "live on-device inference, not a
   canned API call," not a vague intention.
3. **Draft 2–3 candidate angles**, each gut-scored 1–5 per criterion (not decimals — this is a
   check, not a model), weighted total. Pick one **with** the team, don't pick for them. Keep the
   losing angles listed with their scores — if the team pivots at 3am or on-site recon (§12)
   changes the picture, that table already says what plan B scored.
4. **Craft the urgency hook.** One sentence naming the concrete stakes of *not* solving this now —
   a cost, a number, a specific person or scenario it happens to. Judges fund urgency, not
   features. "This is a growing problem" is generic and forgettable; "the 1 in 4 students who
   skipped a meal this week, per the campus audit" survives follow-up questions.
5. **Pre-agree a scope-cut list, now, while calm.** Rank the features you'd cut first if behind at
   a checkpoint, in writing, before building starts. When a checkpoint (§8.4) shows you're behind,
   cut from the top of this list — don't improvise triage at 4am. Log what you actually cut; "what
   did you cut and why" is one of the most common judge questions (§ Judge Q&A Prep, below), and a
   deliberate cut reads as senior while "we ran out of time" reads as junior.

### 3.5 — Pre-build chassis strategy (build before the event)

If building ahead of time, split the codebase into two layers from day one so you can retarget at
a real problem statement the moment it's announced, **without a rewrite**:

- **Chassis (build this before the event):** auth-free local data layer, LLM call wrapper with
  retry/timeout/fallback (§5.1), FastAPI/Streamlit shell, file upload + storage, a generic
  dashboard shell, the design token system's mechanics (not its values — see 4.5). None of this
  is domain logic; all of it is reusable regardless of what the problem statement turns out to be.
- **Domain adapter (`app/core/domain_adapter.py`):** ONE file that defines the problem-specific
  shape — the Pydantic models, the prompt templates, the scoring/business logic, the 3–5 UX
  screens' content. Swapping the target problem means rewriting this one file (and the token
  system's *values*, not its *mechanics*) — never touching the chassis. This is what makes "adapt
  on-site without breaking the whole thing" (Phase 12) actually safe: the blast radius of a pivot
  is one file, not the repo.
- Test the swap before the event: write two throwaway adapters for two unrelated domains against
  the same chassis, confirm both run clean. If a domain doesn't fit the adapter interface without
  editing the chassis, the interface is too narrow — widen it now, not mid-event.

---

## Phase 4 — Design Strategy & Pitch Architecture

**4.1 Double Diamond:** DISCOVER (research) → DEFINE (problem statement) → DEVELOP (prototype) → DELIVER (test/demo). Timebox each half against the total duration from Phase 1.

**4.2 Core UX screens (pick 3–5):** Landing/onboarding · Core action · Result/output · Admin/config (if needed) · Impact dashboard (great for judges).

**4.3 Pitch arc:** Hook 20s (relatable story) → Problem 30s (gap/pain/scale) → Solution 60s (idea + live demo highlight) → How it works 45s (stack/data/architecture) → Impact 30s (who benefits, how much) → Ask/Close 15s. Treat this as the default shape for a ~3 min slot; for any pitch time limit, rebuild the split with 4.3.1 below instead of stretching these fixed seconds.

#### 4.3.1 — Pitch timeboxing & rehearsal (do this once the time limit and roster are known)

1. **Compute the word budget.** ~130–150 spoken words per minute, minus a ~10% buffer for pauses,
   demo dead air, and applause. A 5-minute slot is roughly 550–650 usable words, not 750 — script
   to the lower number.
2. **Split sections by rubric weight** (§3.4), defaulting to this shape if weights are flat or unknown:
   Hook + urgency 15% · Solution + live demo 45% (protect this — judges fund what they see work) ·
   Impact/why now 20% · Team + close/ask 10% · Buffer for stumbles/questions 10%.
3. **Assign speakers to contiguous blocks**, one person per block minimum — never split a single
   sentence across two speakers. Route the demo block to whoever is most fluent *driving* the live
   app, not just whoever coded it. Every speaker's last line explicitly cues the next person by
   name or topic — no dead air at handoffs.
4. **Write the timed script as a table:** `start–end | speaker | section | word budget |
   verbatim-or-bullet script | handoff line`. Mark the live-demo block with an explicit fallback: a
   screen-recorded backup, triggered by a named person the moment the live demo stalls for more
   than ~10 seconds — no apologizing on stage, straight to "let me show you the recording."
5. **Draft Q&A prep**, one likely question per rubric criterion — pull from the **Judge Q&A Prep**
   reference (§Templates), prioritizing whichever criterion scored weakest in §3.4's angle table;
   that's where judges actually dig.
6. **Rehearse with a stopwatch, at least twice.** If any run goes over by more than 10%, cut
   content — don't talk faster. Confirm every handoff lands within ~2 seconds, confirm the demo
   fallback actually plays on the presenting machine (sound off too), confirm whoever owns each
   Q&A answer knows it cold, out loud, once — not just on paper.

### 4.4 — Studio-grade creative direction

Mindset: you are the senior designer at a small studio, not filling a template.

*Brainstorm before touching any file:*
- Ground the visual identity in the subject's own world (a logistics app lives in routes/manifests/dispatch boards; a mental-health app lives in breath/weight/quiet), not a generic SaaS look.
- Reject the three default AI-slop looks unless deliberately chosen: (1) cream bg + serif + terracotta accent, (2) near-black bg + one acid accent, (3) broadsheet hairline-rule newspaper layout.
- Build a real token system: 4–6 named hex colors with rationale (one dominates 60–70%), a deliberate type pairing, a one-sentence layout concept sketched as ASCII wireframe, and ONE signature element specific to this idea.
- Self-critique: does any part read as the generic answer for any hackathon project? Revise and note what changed.

*Apply the same token system across the deck (.pptx), the doc (.docx/.pdf), and the live web demo* — consistency across surfaces is a strong, cheap signal of professionalism.

*No-Slop Checklist (run before submission):* no title underlines/accent bars, no decorative sidebar stripes, no 01/02/03 markers unless truly sequential, no repeated identical layout section-after-section, no centered body paragraphs, no default cream/beige unless deliberate, one color must visibly dominate, no generic icon-grid-of-three as "signature," no generic SaaS copy ("Empowering the future of X"), no identical sentence rhythm slide-to-slide, one orchestrated motion moment instead of animation-on-everything (web only).

*Real depth when the idea benefits from it:* Three.js/CSS 3D transforms/layered shadow systems for the web demo; layered-shadow illustrations and consistent light direction for static deck/doc pages. Skip entirely for ideas that don't need it.

### 4.5 — Engineering & Design Taste (the law both Qwen and Antigravity build against)

This is what gives Antigravity's output real designer/engineer taste instead of default-slop —
it applies to every line of code and every pixel from here on, not just Phase 4.

**The Engineering Ladder — stop at the first rung that holds, before writing any code:**
1. Does this need to exist at all? Speculative need = skip it, say so in one line. (YAGNI)
2. Already in this codebase? Reuse it — re-implementing what's a few files over is the most common slop.
3. Stdlib does it? Use it.
4. Native platform feature covers it? (`<input type="date">` over a picker lib, CSS over JS, a DB constraint over app code.)
5. Already-installed dependency solves it? Use it — never add a new one for what a few lines can do.
6. Can it be one line? One line.
7. Only then: the minimum code that works.

Read the task and the code it touches first, trace the real flow end to end, *then* climb — the
ladder shortens the solution, never the reading. Never simplify away input validation at trust
boundaries, error handling that prevents data loss, security, or accessibility. Deletion over
addition; boring over clever (clever is what someone decodes at 3am with judges watching). A
deliberate corner cut for time (global lock, O(n²) scan, naive heuristic) gets one comment naming
the ceiling and the upgrade path — never a silent shortcut.

**Output shape:** code first, then at most three short lines: what was skipped, when to add it.
`[code] → skipped: [X], add when [Y].` No essays defending a simplification — every paragraph
defending a shortcut is complexity smuggled back in as prose.

**Should this even animate?** Before adding motion, check frequency: something seen 100+
times/day (keyboard shortcuts, palette toggles) gets **no animation, ever** — it just feels slow.
Tens of times/day (hover, list nav) → remove or drastically reduce. Occasional (modals, drawers,
toasts) → standard animation. Rare/first-time (onboarding, celebrations) → delight is fine. Every
animation needs a real purpose — spatial consistency, state indication, feedback, preventing a
jarring appear/disappear — "it looks cool" is not a purpose for something seen often.

**Easing, when it does animate:** entering/exiting → ease-out. Moving/morphing on-screen →
ease-in-out. Hover/color change → ease. Constant motion (marquee, progress bar) → linear. Use real
cubic-bézier curves, not the weak CSS defaults: `--ease-out: cubic-bezier(0.23,1,0.32,1)`,
`--ease-in-out: cubic-bezier(0.77,0,0.175,1)`.

**Apple's fluid-interface physics (for anything gesture-driven — drag, swipe, sheets, drawers):**
- Feedback on pointer-**down**, not release; update 1:1 with the pointer through the whole gesture.
- Springs, not fixed-duration transitions, for anything a user can touch — they're interruptible and carry velocity. Default `damping 1.0` (critically damped, no bounce); use `damping ~0.8` only when the gesture itself carried momentum (a flick/throw).
- On interrupt, animate from the element's *current on-screen value*, never the target — a snap-then-restart reads as broken.
- Enter and exit along the same path; anchor menus/popovers/sheets to the element that triggered them (`transform-origin` on the trigger, not the center).
- Soft boundaries: rubber-band resistance at edges instead of a hard stop.
- Translucent chrome (`backdrop-filter: blur()`) for nav/toolbars with content scrolling underneath — never stack two light translucent layers, legibility collapses.
- Respect `prefers-reduced-motion` — swap slides/springs for a short opacity cross-fade, never just delete the feedback.

**Typography:** tracking (letter-spacing) is size-specific — negative on large display text, near
zero on body, never one fixed value for both. Leading (line-height) runs inverse to size: tight on
big headings, looser on body copy. Default to the system font before a custom face.

**Curated library table — the taste-driven pick, don't substitute without reason:**

| Need | Library |
|---|---|
| Unstyled accessible primitives (dialog, popover, menu, select) | base-ui |
| Command palette (⌘K) | cmdk |
| Toasts | Sonner |
| OTP / verification code input | input-otp |
| General animation (springs, layout, enter/exit, gestures) | motion (Framer Motion) |
| Animated numbers/counters | NumberFlow |
| Charts, static/interactive dashboards | recharts |
| Real-time/streaming charts | Liveline |
| Drag and drop | dnd kit |
| Virtualized long lists/tables | Virtuoso |
| State management | zustand |
| Conditional `className` strings | clsx |
| Variant-driven Tailwind styling | cva |
| Dark mode / theme switching, no flash | next-themes |

Reach for `motion` only when you need springs/layout/gesture values — a plain hover or fade is a
CSS transition, not a library. This table exists so Antigravity never hand-rolls a toast system,
a dropdown with manual focus handling, or a number counter that re-renders text — build-vs-buy is
already decided; use the answer.

**Asset sourcing (for Antigravity, or whichever model executes):** before hand-drawing an icon set
or writing a placeholder illustration, search first — Lucide/Heroicons for icons, unDraw or Blush
for illustrations that can be recolored to the token system, Google Fonts (paired deliberately, per
4.4) over a system default when the identity calls for it. Download real assets and restyle them to
the token system rather than generating something crude from scratch; a borrowed-and-retinted asset
in the palette reads more crafted than an original one that doesn't match. Never ship a placeholder
gray box or a "TODO: icon" comment into a demo — swap it for a real asset before the polish pass ends.

**Design foundations, in one line each (Apple's eight, for the judge-facing decisions):**
Purpose (decide what *not* to build) · Agency (offer choices, easy undo, sparing confirmations) ·
Responsibility (privacy asked for at the right moment, anticipate AI misuse) · Familiarity (use
metaphors people already know, stay consistent) · Flexibility (adapt to device/context/ability) ·
Simplicity, not minimalism (every element earns its place, common path first) · Craft (nothing is
random — every spacing/timing value is defensible) · Delight (the result of the other seven, not
confetti tacked on top).

---

## Phase 5 — System Design + Python-Only Scaffold

### 5.0 System design pass (before any boilerplate)

1. **Request flow** — sketch user action → client → server → external API → response for the core demo path, on paper, as a team, before anyone opens an editor.
2. **Work placement** — UI/light validation → client. Business logic/persistence/heavy computation/secrets/LLM calls → server. Never trust the judge's laptop to be fast; never ship API keys client-side.
3. **Data model** — SQLite by default, one source of truth per field, no premature caching layer (an `lru_cache` dict is enough for repeated LLM calls at this scale).
4. **Reliability pass** — timeout every external call, graceful fallback text if an AI/API call fails live, a `/health` endpoint, a one-command demo-data reset script.
5. **Rendering decision** (only if real GPU-bound work) — WebGPU-first with automatic WebGL fallback (Three.js r171+'s `WebGPURenderer` does this internally). Never ship a WebGPU-only path. Skip for a plain CRUD dashboard.
6. **Domain adapter check** (if using the Phase 3.5 chassis) — confirm the request flow above routes all problem-specific logic through `domain_adapter.py`. If a route or model reaches past the adapter into chassis internals, that's the seam that will break during an on-site pivot (Phase 12) — fix it now.

### 5.1 Default architecture: Python-only, native-backed

**You write Python only. No hand-written Rust/C/C++, ever, unless Phase 9 is explicitly invoked.**
Performance comes from libraries that are internally Rust/C/C++ but ship as ordinary `pip` wheels —
exactly how Polars, NumPy, Pydantic v2, Tokenizers, and Ruff work. `pip install` + `import`, no
`Cargo.toml`, no compiler toolchain needed at the hackathon.

```
┌─────────────────────────────────────────┐
│         YOUR CODE (100% Python)          │
│   business logic · API · orchestration   │
└───────────────────┬───────────────────────┘
                     │  import / pip install
┌────────────────────▼────────────────────┐
│   NATIVE-BACKED LIBRARIES (pre-built)     │
│  Polars(Rust) NumPy(C) Pydantic-core(Rust)│
│  Tokenizers(Rust) OpenCV(C++) ONNX(C++)   │
└────────────────────────────────────────────┘
```

**Directory tree (default scaffold):**
```
project-root/
├── app/
│   ├── main.py                 # Entry point (FastAPI / Streamlit / CLI — pick one)
│   ├── api/{routes.py, schemas.py}
│   ├── core/{engine.py, pipeline.py, ai.py, domain_adapter.py}   # adapter = §3.5
│   ├── db/{models.py, crud.py}
│   └── utils/{config.py, logger.py}
├── tests/test_engine.py
├── data/{sample/, output/}
├── scripts/{setup.py, run.py, seed_demo_data.py}   # cross-platform, see Phase 6
├── requirements.txt   (or pyproject.toml if using uv)
├── .env.example
├── .gitattributes      # see Phase 6 — line-ending normalization
├── .gitignore
└── README.md
```

**`app/core/engine.py`** (orchestration, Rust-backed data layer):
```python
import polars as pl
from app.core.ai import call_llm
from app.db.crud import save_result

class Engine:
    def __init__(self, config):
        self.config = config

    def run(self, input_data: dict) -> dict:
        payload = self._validate(input_data)
        df = pl.DataFrame(payload["records"])
        processed = (
            df.lazy()
            .filter(pl.col("value") > 0)
            .group_by("category")
            .agg(pl.col("value").sum().alias("total"))
            .collect()
        )
        ai_result = call_llm(processed.to_pandas().to_json(), self.config.ai_prompt)
        record = save_result({"input": payload, "output": ai_result})
        return {"id": record.id, "result": ai_result, "status": "ok"}

    def _validate(self, data: dict) -> dict:
        assert "records" in data, "Missing 'records' key"
        return data
```

**`app/core/ai.py`:**
```python
import os
from openai import OpenAI
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
SYSTEM_PROMPT = "You are an expert assistant for [domain]. Return concise, structured output."

def call_llm(context: str, task_prompt: str) -> str:
    response = client.chat.completions.create(
        model=os.getenv("MODEL_NAME", "gpt-4o-mini"),
        messages=[{"role": "system", "content": SYSTEM_PROMPT},
                  {"role": "user", "content": f"{task_prompt}\n\nContext:\n{context}"}],
        max_tokens=1024, temperature=0.3,
    )
    return response.choices[0].message.content
```

**`app/api/schemas.py`** (Pydantic v2 — Rust core, free validation):
```python
from pydantic import BaseModel, Field
class RequestPayload(BaseModel):
    records: list[dict]
    mode: str = Field(default="quick")
class ResponsePayload(BaseModel):
    id: int
    result: str
    status: str
```

**`app/utils/config.py`:**
```python
from pydantic_settings import BaseSettings
class Config(BaseSettings):
    app_name: str = "HackProject"
    debug: bool = False
    openai_api_key: str = ""
    model_name: str = "gpt-4o-mini"
    database_url: str = "sqlite:///./data/app.db"
    class Config:
        env_file = ".env"
config = Config()
```

**`app/main.py`** — pick ONE mode, delete the rest:
```python
from app.utils.config import config
# MODE 1: FastAPI
from fastapi import FastAPI
from app.api.routes import router
app = FastAPI(title=config.app_name)
app.include_router(router, prefix="/api")
@app.get("/health")
def health(): return {"status": "ok", "app": config.app_name}
# MODE 2: Streamlit — run with `streamlit run app/main.py`
# MODE 3: CLI — use click/typer
```

**`requirements.txt`:**
```
fastapi>=0.111.0
uvicorn[standard]>=0.30.0
pydantic>=2.7.0
pydantic-settings>=2.3.0
streamlit>=1.35.0
openai>=1.30.0
anthropic>=0.28.0
polars>=0.20.0
numpy>=1.26.0
pandas>=2.2.0
tokenizers>=0.19.0
opencv-python>=4.10.0
onnxruntime>=1.18.0
sqlalchemy>=2.0.0
httpx>=0.27.0
python-dotenv>=1.0.0
rich>=13.7.0
click>=8.1.0
loguru>=0.7.0
```

**`.env.example`:**
```
APP_NAME=HackProject
DEBUG=false
OPENAI_API_KEY=sk-...
MODEL_NAME=gpt-4o-mini
DATABASE_URL=sqlite:///./data/app.db
```

**`.gitignore`:**
```
__pycache__/
*.py[cod]
.env
.venv/
venv/
dist/
build/
*.egg-info/
data/output/
.DS_Store
Thumbs.db
```

### Native-backed library catalog (pick by bottleneck)

| Need | Library | Native engine |
|---|---|---|
| Dataframes / heavy data ops | Polars | Rust |
| Numerical arrays | NumPy | C |
| Data validation | Pydantic v2 | Rust (pydantic-core) |
| Fast tokenization | Tokenizers | Rust |
| Computer vision | OpenCV | C++ |
| ML inference | ONNX Runtime | C++ |
| Deep learning | PyTorch | C++/CUDA |
| Gradient boosting | XGBoost / LightGBM | C++ |
| Fast JSON | orjson | Rust |
| Fast regex | `regex` | C |
| Cryptography | `cryptography` | C (OpenSSL) |
| Compression | zstandard | C |
| Async event loop | uvloop | C (libuv) |
| Geospatial | Shapely | C/C++ (GEOS) |
| PDF parsing | PyMuPDF | C++ |
| Fast string search | rapidfuzz | C++ |
| Vector search | faiss-cpu | C++ |
| Embedded DB | DuckDB | C++ |
| Linting (dev tool) | Ruff | Rust |

**Rule of thumb:** a Python `for` loop over 10k+ items, or numeric/string work at scale → check Polars/NumPy/orjson first. Almost always they already do it.

### Fast setup with `uv` (Rust-written package manager, 10–100× faster than pip)
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh   # macOS/Linux
# Windows: powershell -c "irm https://astral.sh/uv/install.ps1 | iex"
uv init my-hack-project && cd my-hack-project
uv add fastapi polars pydantic openai
uv run python app/main.py     # no manual venv activation needed, works identically on every OS
```

### Python quality patterns (short-code idioms judges notice, and the Ladder from 4.5 in practice)
- Comprehensions over loops; `set`/`dict` for membership (never `list`); `"".join()` not `+=` in a loop; `pathlib.Path`, never string path concatenation; f-strings; type hints on public signatures; Pydantic/dataclasses over raw dicts.
- Guard clauses over nested if/else; one responsibility per function; pure functions where possible; name things by what they ARE (`user_records`, not `data`).
- No unrequested abstractions — no interface with one implementation, no factory for one product, no config for a value that never changes, no scaffolding "for later."
- Profile before optimizing (`cProfile`, 2 minutes, once); `functools.lru_cache` for repeated expensive calls (LLM calls, DB lookups); batch I/O (`executemany`, never loop-and-commit); `asyncio.gather` for concurrent I/O (3+ external calls); `multiprocessing.Pool` only for CPU-bound work; generators for anything that might be large.
- Error handling: catch specific exceptions, log them, don't swallow silently; wrap the ONE call that can realistically fail live (external API) in try/except with a graceful fallback string.
- Non-trivial logic (a branch, a loop, a parser, a money/security path) leaves ONE runnable check behind — an `assert`-based `demo()`/`__main__` self-check or one small `test_*.py`. No frameworks, no fixtures. Trivial one-liners need no test.
- Pre-demo pass: `uv run ruff format .` then `uv run ruff check . --fix` (both Rust-backed, run in milliseconds) — no excuse to skip before final commit.

### Reliability patterns
```python
async def call_with_timeout(coro, seconds: float = 10.0):
    try:
        return await asyncio.wait_for(coro, timeout=seconds)
    except asyncio.TimeoutError:
        return {"error": "Request timed out", "fallback": True}
```
Always: timeouts on every external call · a `scripts/seed_demo_data.py` that resets to known-good state in one command · a `/health` endpoint.

### Alternative stacks (only if Python-only genuinely doesn't fit)

| Project type | Stack |
|---|---|
| Web app, full-stack JS | Next.js + Tailwind + Supabase |
| Web app, frontend only | Vite + React + Tailwind |
| Mobile | Expo (React Native) |
| Chrome extension | Manifest V3 + vanilla JS |
| IoT/hardware | Arduino + MQTT + Node dashboard |

For AI demo / CLI / API-only, stay in the Python scaffold above (Streamlit / Click / FastAPI modes).

---

## Phase 6 — Cross-Platform Team Workflow (Linux + Windows, No Conflicts)

> Goal: a mixed-OS team builds and tests without losing time to line-ending diffs, path-separator
> bugs, shell-only scripts that skip Windows, or case-sensitivity mismatches.

**6.1 Line endings** — commit `.gitattributes` at the repo root on day one:
```
* text=auto eol=lf
*.bat text eol=crlf
*.ps1 text eol=crlf
```
Also: `git config --global core.autocrlf input` (Linux/Mac) / `true` (Windows).

**6.2 Paths** — always `pathlib`, never string concatenation:
```python
from pathlib import Path
output = Path("data") / "output" / f"{name}.json"
```

**6.3 Setup/run commands** — use `uv run <cmd>`, identical on every OS, no activate-script split.
If a task needs a runner script, write it in Python (`scripts/setup.py`) — never `.sh`-only or `.bat`-only.

**6.4 Case sensitivity** — Linux is case-sensitive, Windows/macOS usually aren't. Lowercase,
consistent module/file names everywhere, enforced at PR/checkpoint time.

**6.5 Newline-safe writes:**
```python
with open(path, "w", newline="\n", encoding="utf-8") as f:
    f.write(content)
```

**6.6 Devcontainer (12hr+ events with real setup-drift pain):** minimal `Dockerfile` +
`.devcontainer/devcontainer.json` so Linux and Windows (via WSL2/Docker Desktop) build identically.
Skip under ~7hr — setup cost isn't worth it.
```dockerfile
FROM python:3.12-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

**6.7 Judging-parity machine** — most judging platforms run Linux. Designate one Linux machine (or
WSL2) as the final "does this actually run clean" checkpoint before submission.

### 6.8 — Safe native builds when Python mixes with Rust/C/C++ (mixed-OS teams)

> Applies whenever Phase 9 (PyO3/WASM) is invoked, or any dependency needs compiling from source.
> The risk isn't Rust or C/C++ themselves — it's one teammate's `git pull` silently breaking
> because a compiled artifact from another OS doesn't run on theirs. The rules below exist to make
> sure that never blocks the team, regardless of who's on Linux and who's on Windows.

**Rule 1 — one person owns the compiler toolchain, nobody else needs to install one.**
Pick a single "native owner" (usually whoever proposed the Phase 9 track). Only their machine needs
`rustc`/`cargo` or a C/C++ toolchain installed. Everyone else consumes what that person produces —
a built wheel or a fallback — never a `cargo build` they have to run themselves mid-event.

**Rule 2 — the pure-Python fallback from §9 is not optional, it's the default path.**
Every native module gets wrapped in the try/except pattern from Phase 9 the moment it's created,
before it's optimized, not after:
```python
try:
    import native_core
    fast_transform = native_core.fast_transform
except ImportError:
    def fast_transform(values: list[float]) -> list[float]:
        return [v * 2.0 for v in values]   # slower, but the app never breaks without the .so/.pyd
```
This means a teammate who can't build the native module (wrong OS, no toolchain, a broken build)
still runs the full app correctly — just without the speed boost. Nobody is ever blocked waiting
for a compile.

**Rule 3 — never commit compiled artifacts; distribute wheels once per platform, deliberately.**
A `.so` built on Linux will not import on Windows, and a `.pyd` built on Windows will not import on
Linux — don't `git add` either into the shared repo, and don't assume a teammate's pull "just
works" because it worked for you. Instead:
```bash
# Native owner, after `maturin develop --release` works locally:
maturin build --release                    # produces a wheel in target/wheels/
```
Share the wheel through the same channel as the rest of Phase 7 (bundle/LAN/USB) — a teammate on
the **same OS** installs it (`uv pip install target/wheels/native_core-*.whl`); a teammate on the
**other OS** just relies on Rule 2's fallback instead of trying to install a wheel that can't
possibly work for their platform. Check `platform.system()` before even attempting the install if
scripting this.

**Rule 4 — test the fallback boundary explicitly, not just the happy path.**
Add one script that any teammate can run in 5 seconds to know exactly which path they're on:
```python
# scripts/test_native.py
import platform
try:
    import native_core
    print(f"[{platform.system()}] native module: ACTIVE")
except ImportError:
    print(f"[{platform.system()}] native module: FALLBACK (pure Python)")
# then run the actual happy-path check once, regardless of which path is active
from app.core.engine import Engine
Engine(config=None).run({"records": [{"category": "x", "value": 1}]})
print("happy path: OK")
```
Run this at every integration checkpoint (§8.4) on at least one Linux machine and one Windows
machine — the native owner's "it works on my machine" is exactly the failure mode this guards
against. If it fails on one OS, that teammate keeps building against the fallback; the native path
gets fixed in parallel without stalling anyone.

**Rule 5 — prefer prebuilt wheels over compiling from source wherever possible.**
Most of the native-backed catalog in §5.1 (Polars, NumPy, OpenCV, ONNX Runtime, orjson, etc.)
already ships prebuilt wheels for Linux, macOS, and Windows on PyPI — `uv add`/`pip install` never
compiles anything for these. Compiling from source (Rule 1–4 above) should only happen for the
custom PyO3/WASM module you're hand-writing in Phase 9, never for a dependency that already has a
wheel. If `pip install` starts compiling something you didn't expect to, that's a sign the package
doesn't have a wheel for someone's platform — swap it for an alternative from §5.1's catalog before
the event, not during.

**Rule 6 — merge discipline for native changes.** A change to the native module only merges to
`main` at an integration checkpoint (§8.4), after Rule 4's test has been run on both OSes present
on the team — same merge-captain rule as §7.6, just with an extra gate. Never merge a native change
directly between checkpoints; that's exactly the kind of change that looks fine on the author's OS
and silently breaks a teammate's.

---

## Phase 7 — Git Workflow Without GitHub (Local / LAN, No Cloud Account Required)

> Full version control and collaboration — branches, merges, history, rollback — without GitHub,
> internet, or any account. Useful for unreliable venue Wi-Fi or keeping the idea private until submission.

**7.1 Local bare repo as shared "origin":**
```bash
git init --bare ~/shared/project.git      # or a USB/NAS/SMB share
git clone /path/to/shared/project.git     # everyone else clones from that path
# Windows: git clone "\\LAPTOP-NAME\shared\project.git"
```

**7.2 LAN git daemon (fastest, zero accounts):**
```bash
git daemon --base-path=/path/to/repos --export-all --reuseaddr --verbose
git clone git://<host-laptop-ip>:9418/project     # everyone else
```
No auth — fine for a closed team network, don't leave it running on open Wi-Fi unattended.

**7.3 SSH remote between laptops** (when the daemon is firewalled):
```bash
git remote add origin ssh://username@teammate-ip/home/username/project.git
git push origin main
```

**7.4 Offline sync via `git bundle`** (USB stick, AirDrop, chat file transfer — zero network):
```bash
git bundle create update.bundle main   # Person A
# transfer any way you like
git pull update.bundle main            # Person B
```

**7.5 Lightweight patch sharing** (single small change):
```bash
git format-patch -1 HEAD          # producer
git am 0001-your-change.patch     # receiver
```

**7.6 Branch/merge discipline** (same regardless of remote style):
```
main                     ← always working, demo-able
  ├── feature/engine     ├── feature/api
  ├── feature/ai         └── feature/frontend
```
Never commit directly to `main` after hour 1 — branch, then merge only at Phase 8's integration
checkpoints. One rotating **merge captain** per checkpoint. Commit small, every 20–30 min, describe
WHAT changed. Tag right before each checkpoint (`git tag checkpoint-1`) as a rollback point.

**7.7 If the submission platform requires a public link:** check the actual rule — most platforms
accept "a link to your code," not GitHub by name. Options: self-hosted Gitea/Forgejo (few-MB single
binary) given a public URL only at submission time; or export at the very end —
`git remote add public https://github.com/you/project.git && git push public main` as the literal
last step. If GitHub by name is truly required, that wins; this phase's value is keeping the build
private/offline-resilient until then.

---

## Phase 8 — Parallel Build Strategy (whole team codes at once)

**8.1 Dependency map** (before anyone opens an editor):
```
[Data/Schema] ──→ [Core Engine] ──→ [API Layer] ──→ [Frontend/UI]
                        │
                        └──→ [AI/ML Layer] ──→ feeds API Layer
```
Anything with no dependency starts at hour 0, in parallel.

**8.2 Contract-first kickoff** (15–30 min, whole team, before real code): lock in writing — the
**data contract** (core Pydantic model), the **API contract** (`POST /api/process {input, mode} →
{id, result, status}`), and the **ownership map** (one file/module per person). Freeze after
kickoff — changing a contract mid-build forces a redo downstream.

**8.3 Track assignment by team size:**
- **Solo:** schema+engine skeleton with fake data first → real logic function-by-function → thin API/UI wrapper → polish only what's in the demo path.
- **2p:** A = schema→engine→AI layer. B = API stubs (mocked engine) → frontend → wire to real API once A lands.
- **3p:** A = schema→engine. B = API layer (mocked→real)→integration. C = AI/ML layer + frontend (natural waiting-time overlap).
- **4p:** A = schema→engine. B = API/FastAPI routes (mocked engine). C = AI/ML layer. D = frontend (built against the mocked contract from minute 1).
- **5p:** A = schema→engine→QA. B = API layer. C = AI/ML layer. D = frontend (mocked API from minute 1). E = design system + pitch, full-time — hands finished tokens to D as soon as the wireframe is locked.
- **6p:** A = schema→engine→QA. B = API layer. C = AI/ML layer. D = frontend. E = design system, feeding D continuously. F = pitch/docs from hour 0, folding into integration testing after feature freeze. At this size, run checkpoints on time, not "when it feels ready" — six people drifting async is the main risk.

**8.4 Integration checkpoints** (don't wait for the end):

| Duration | Checkpoint 1 | Checkpoint 2 | Final integration |
|---|---|---|---|
| 7hr | 2:30 | 4:30 | 6:00 |
| 12hr | 4:00 | 7:00 | 9:30 |
| 24hr | 8:00 | 15:00 | 19:00 |
| 48hr | 14:00 | 30:00 | 38:00 |

At each: stop new feature work for 10–15 min, pull latest from every track, run the full app together, fix contract mismatches immediately, resume.

**8.5 Mocking** (the actual unlock for parallelism):
```python
# mock_server.py — frontend builds against this before backend is ready
from fastapi import FastAPI
app = FastAPI()
@app.post("/api/process")
def mock_process(payload: dict):
    return {"id": "mock-123", "result": "Sample AI output here", "status": "done"}
```
```python
# app/core/ai.py — swap for the real call_llm() once ready
def call_llm(context: str, task_prompt: str) -> str:
    return f"[MOCK RESPONSE] Analysis of: {context[:50]}..."
```
Keep `data/sample/mock_data.json` with realistic fake records from minute 1.

**8.6 Build order priority** (inside each person's track): **Feature Zero** first (§1 — one thin
end-to-end slice, mock data fine, deployed and demo-able) → happy path (ugly, working, end-to-end,
now with real logic replacing the mocks) → error handling for that happy path's edge cases →
polish → nice-to-haves only if time remains, taken from the bottom of the §3.4 scope-cut list
upward, never invented on the spot. At the 80% time mark, if the happy path isn't solid, stop
adding features and fix it — judges almost never see anything else.

---

## Phase 9 — Optional Advanced Track: Hand-Written Rust (opt-in only)

> **Not the default.** Only enter this if you profiled a real bottleneck and no native-backed
> Python library solves it, OR the demo needs to run in-browser with zero backend. Otherwise stay
> in Phase 5's pure-Python scaffold — hand-written Rust costs setup time most teams can't spare.

**Decision gate:** profiled a real CPU bottleneck? → does Polars/NumPy/ONNX already solve it? If
yes, stop, use that. Needs zero-backend browser demo? → WASM track. Bottleneck is in a Python
service you control? → PyO3 track. Less than 1/3 of total time left? → don't start this, ship what you have.

**PyO3 track (Rust called from Python):**
```bash
uv add maturin
maturin new --bindings pyo3 native_core
cd native_core && maturin develop --release   # builds + installs into your venv, one step
```
```rust
// src/lib.rs — one clear function, nothing more
use pyo3::prelude::*;
#[pyfunction]
fn fast_transform(values: Vec<f64>) -> PyResult<Vec<f64>> {
    Ok(values.iter().map(|v| v * 2.0).collect())
}
#[pymodule]
fn native_core(m: &Bound<'_, PyModule>) -> PyResult<()> {
    m.add_function(wrap_pyfunction!(fast_transform, m)?)?;
    Ok(())
}
```
```python
# Always provide a pure-Python fallback — a build failure on a teammate's machine
# must never block the demo:
try:
    import native_core
    fast_transform = native_core.fast_transform
except ImportError:
    def fast_transform(values: list[float]) -> list[float]:
        return [v * 2.0 for v in values]
```

**WASM track (browser-only demo, zero backend):**
```bash
cargo install wasm-pack
cargo new --lib wasm-demo
wasm-pack build --target web --release   # outputs ./pkg/, a JS-loadable module
```
```rust
// Cargo.toml release profile: opt-level = "z", lto = true, panic = "abort"
use wasm_bindgen::prelude::*;
#[wasm_bindgen]
pub fn process(input: &str) -> String { format!("Processed: {}", input) }
```
Load with `import init, { process } from './pkg/wasm_demo.js'; await init();`.

Both tracks: `cargo fmt` + `cargo clippy` before final commit, keep `unsafe` out unless documented
and necessary, keep the Rust↔host boundary to a handful of functions.

**Mixed-OS team building this?** Go read §6.8 before you start — it covers who needs the compiler
toolchain, how the fallback and wheel distribution keep a build on one OS from ever blocking a
teammate on the other, and the test script to run at every checkpoint.

---

## Phase 10 — DSA & Math Optimization (Python / Rust / JS-TS, low-end-device focus)

The habit that matters most: before writing a loop, ask what the time complexity is and whether a data structure changes it.

| Need | Python | Rust | JS/TS |
|---|---|---|---|
| Membership test | `set()` | `HashSet<T>` | `Set<T>` |
| Key→value | `dict` | `HashMap<K,V>` | `Map<K,V>` |
| Queue (FIFO) | `collections.deque` | `VecDeque<T>` | array + index pointer, **never** `.shift()` |
| Priority queue | `heapq` | `BinaryHeap<T>` | `heap-js` or manual |

Common wins: hash-map dedup turns O(n²) pair-comparison into O(n) · prefix-sum arrays turn O(n)
per range query into O(1) after an O(n) build · `functools.lru_cache`/memoization kills exponential
recompute · vectorize numeric loops (`numpy`, Rust iterator chains, typed arrays) instead of
interpreted/boxed loops · stream large files line-by-line instead of loading fully into memory ·
pre-allocate collections when the final size is known.

Frontend-specific (judge's laptop, not yours): debounce/throttle expensive handlers, virtualize
long lists (never render 10k+ DOM nodes — see Virtuoso, §4.5), `requestAnimationFrame` not
`setInterval` for visuals, Web Workers for heavy JS off the main thread.

---

## Phase 11 — Qwen ⇄ Antigravity Command Protocol

> Goal: Qwen (stronger reasoning) plans and specifies; Antigravity/Gemini (weaker, cheaper, or just
> the tool that's actually wired into the IDE) executes exactly what it's told. This isn't a
> courtesy split — an under-specified prompt to a weaker model is where scope creep, wrong
> libraries, and silent slop enter the build. Qwen's job is to remove every decision Antigravity
> would otherwise have to make on its own.

**11.1 — Division of labor**
- **Qwen decides:** architecture, which phase/rung of this document applies, library choice (from
  §4.5's table or the native-backed catalog in §5.1), file boundaries, acceptance criteria, and
  whether a diff is accepted.
- **Antigravity executes:** writes the file(s) specified, to the exact signature and constraints
  given, and reports back — output, errors, and any ambiguity it hit. Antigravity never invents an
  architecture, never picks a library outside the given list, and never expands scope past the
  instruction packet. If it hits a genuine ambiguity, it stops and reports rather than guessing.

**11.2 — Instruction packet (Qwen writes one of these per unit of work, not one giant prompt)**
```
TASK: <one sentence — what this unit of work produces>
FILE(S): <exact path(s) to create/edit>
CONTEXT: <the 1–3 other files Antigravity needs to read first, and why>
SIGNATURE / SHAPE: <exact function signature, API contract, or component shape — from §8.2's
  frozen contract, never re-derived>
CONSTRAINTS:
  - Engineering Ladder applies (§4.5) — reuse before write, stdlib before dependency
  - Library choice: <the ONE library from §4.5/§5.1, not "pick something">
  - Forbidden: <anything explicitly off-limits for this task — new dependencies, new
    abstractions, touching files outside FILE(S)>
ACCEPTANCE CHECK: <the one runnable check that proves this works — a demo()/assert block, a
  curl command, a specific output>
IF AMBIGUOUS: stop and report back, do not guess.
```

**11.3 — Review loop (Qwen runs this on every diff Antigravity returns, before accepting)**
1. **Ladder check** — does the diff stop at the lowest rung that actually holds? Flag any
   unrequested abstraction, unused config, or dependency that wasn't in the packet.
2. **Contract check** — does it match the frozen §8.2 contract exactly? A drifted field name or
   response shape breaks integration later, catch it now.
3. **Taste check** (UI diffs only) — run it against §4.5: right easing, right library from the
   table, no default-slop pattern from §4.4's checklist.
4. **Accept, or send back one specific instruction packet for the fix** — never a vague "this is
   wrong," always a corrected packet with the exact change.

**11.4 — Escalation ladder**
If Antigravity produces a wrong or bloated result on the *same* task twice in a row, Qwen stops
re-prompting and either (a) writes the file itself and hands Antigravity a smaller, more mechanical
follow-up task, or (b) narrows the instruction packet further — usually the signature or the
constraints were too loose the first time, not that the task was too hard.

**11.5 — What this buys you**
A weaker model with a precise spec reliably beats a stronger model with a vague one. Keeping Qwen
as the sole architect also means the whole team gets one consistent set of decisions instead of
each teammate's Antigravity session inventing its own — which is what actually produces a coherent
codebase at the end of a hackathon rather than four incompatible half-projects.

---

## Phase 12 — On-Site Competitive Recon & Adaptive Rebuild

> Only relevant if you pre-built a chassis (§3.5) or arrived with a strong prior idea and want to
> react to what's actually in the room — safely, without a rewrite.

**12.1 — Recon window.** During check-in/opening hours, one person (ideally the researcher/
strategist role) scans other teams' pitches, booths, or the submissions channel if visible. Note,
per competing idea: what domain, what mechanism, how far along it looks, and what it visibly
doesn't do.

**12.2 — Differentiation re-score.** Feed what you saw back into Qwen and re-run the §3.2 rubric
with one added column: **Differentiation delta** — how far your idea sits from the closest thing
you saw in the room, 1–5. An idea that scored well in isolation but now overlaps heavily with three
other teams needs a pivot on its unique angle, not a full replacement.

**12.3 — Safe pivot procedure (why the chassis/adapter split from §3.5 matters here):**
1. Never fork the whole repo to explore a pivot — edit `domain_adapter.py` on a branch (§7.6).
2. Identify which of your 3–5 UX screens (§4.2) is the "boring commodity" one that overlaps with
   what you saw, and which is your actual differentiator. Strengthen the differentiator first;
   only replace the boring one if there's time left after that.
3. Removing a feature safely: if it's isolated behind the adapter interface, delete its screen/route
   and its adapter entry, run the §5.0.6 adapter check, run the happy path end-to-end once. If
   removing it requires touching the chassis, it wasn't actually adapter-isolated — don't remove it
   under time pressure; disable it behind a feature flag instead and revisit after the next
   integration checkpoint (§8.4).
4. Log the decision in one line for the pitch's "what's next" slide — judges respond well to "we
   saw X in the room and doubled down on Y instead" as evidence of real-time thinking, don't hide it.

**12.4 — When not to pivot.** If you're past the feature-freeze cutoff from Phase 1's time blocks,
recon informs the pitch narrative only — "here's how we're different from what you'll see today" —
not the codebase. A pivot after freeze risks the one thing that actually loses hackathons: a demo
that doesn't run.

---

## Templates

**Rubric Angle Table** (§3.4 output): one row per criterion — `Criterion | Weight | Our proof
point (what a judge can see working in 30 seconds)`; then one row per candidate angle scored 1–5
per criterion with a weighted total, chosen angle marked, losers kept for a possible pivot.

**Scope-cut log** (§3.4.5): a ranked list, written before building starts — "when behind at a
checkpoint, cut from the top of this list first, decided now, while calm, not at 4am." Update it
live as items are actually cut; it becomes the answer to "what did you cut and why" in Q&A.

**Problem Brief:** project name / team / root cause / primary user segment + scale / current
workarounds (3) / friction points (3) / stakeholders (end users, beneficiaries, gatekeepers,
potential opponents) / data needs (needed, free/mockable, hard dependency) / competitor grid
(3 rows: what they do, what they miss) / our unique angle (one sentence).

**Idea Scorecard:** Impact ×0.30, Feasibility ×0.25, Novelty ×0.25, Demo-ability ×0.20 →
total /5.0. (+ Differentiation delta if using §12.2, on-site.) Novelty checklist: not a clone of
___ / unique angle ___ / aha moment in one sentence.

**Pitch deck (9 slides):** Hook (no product name yet) → Problem (root cause, broken-flow
diagram) → Solution (fixed-flow diagram, one sentence) → Live demo (3-screen minimum, narrate,
pause after the wow moment) → How it works (architecture, stack logos) → Impact/market (concrete
outcome, not "$500B market") → Team (name/role/one credential each) → What's next (1/3/6 month
roadmap, incl. any on-site pivot note from §12.3.4) → Close (name, tagline, link/QR, contact).

**Pitch Timing Table** (§4.3.1 output): `start–end | speaker | section | word budget | script |
handoff line`, plus a demo-fallback line (backup recording path, who triggers it, at what stall
threshold) and a rehearsal checklist (two timed runs, handoff timing, fallback plays with sound
off, each Q&A owner answers cold).

**Judge Q&A Prep** — fifteen questions that come up at nearly every hackathon, grouped by the
rubric dimension they actually probe. Prioritize the group matching your **weakest** §3.4 criterion
— that's where judges dig. Each prep line is what a strong answer *contains*, not a script to read.

| # | Question | What a strong answer contains |
|---|---|---|
| **Impact** | | |
| 1 | Who exactly is this for, and how many of them are here? | A named user group + a defensible local number. "Students" is weak; "1 in 4 students who skipped a meal this week, per the campus audit" survives follow-ups. |
| 2 | What changes for them the day this exists? | One before/after sentence. If it needs two, the product isn't focused enough — fix the pitch, not the answer. |
| 3 | Where did that number come from? | Name the source out loud (audit, dataset, interview count). One invented number caught makes a judge distrust every slide. |
| **Technical execution** | | |
| 4 | Is that live or mocked? | Answer precisely: "the push is real, the second dining hall is seeded data." Judges forgive mocks; they don't forgive discovering one. |
| 5 | What did you build vs. call an API for? | One sentence claiming the part you're proud of, one crediting the APIs. Taking credit for the API is the classic own-goal. |
| 6 | What breaks first at 10× users? | Name the real bottleneck (a specific query, a free-tier queue). "It scales" is the wrong answer at every hackathon, ever. |
| **Innovation** | | |
| 7 | What's the closest existing tool, and why isn't it enough? | Name a real competitor yourself — naming it first turns a gotcha into a comparison you control. |
| 8 | What's the one thing here nobody could clone in a weekend? | Usually not code — it's the mechanism, dataset, or relationship behind it. |
| **Viability** | | |
| 9 | What's the business model? | One plausible payer + what they already pay for the problem today. Point at an existing budget line, don't project revenue. |
| 10 | What does this cost to run per user? | A rough unit cost from your actual stack. Precision signals you deployed it for real. |
| **Execution under constraint** | | |
| 11 | What did you cut, and why? | A gift question — answer with the §3.4 scope-cut log. Deliberate cuts read as senior; "ran out of time" reads as junior. |
| 12 | What would you do with 30 more days? | One concrete next step already in motion beats "add more features." |
| 13 | Who built what? | Every member answers for their own layer in one sentence. One person answering everything reads as one person's project. |
| **Demo-moment traps** | | |
| 14 | Can you show that again with different input? | Have a second path rehearsed. A demo that only works one way looks like a recording. |
| 15 | What happens with bad input? | Show the guard, don't describe it — type the garbage yourself before the judge asks to. |

**Instruction packet:** see §11.2 — Qwen fills this per unit of work handed to Antigravity.

**Pre-submission checklist (run 1hr before deadline):**
- Code: fresh install runs clean · no hardcoded secrets · README has setup steps · `.env.example`
  committed, `.env` is not · happy path doesn't crash · `ruff format`/`ruff check` clean (§5).
- Pitch: <10 slides · demo recorded as backup · under the time limit · everyone knows their part.
- Submission: repo/zip link works (see §7.7 for the non-GitHub-by-default version) · submission
  form 100% filled · every teammate added · track/category correct · demo link plays.

---

## Output Checklist (what a full run produces)

- [ ] Time block schedule with cutoffs, incl. a Feature Zero checkpoint (§1, sized to your team of 1–6)
- [ ] Elimination-round strategy set (§0.5), if the event has a cut
- [ ] WHAT WE KNOW / NEED / ASSUMING scratchpad + one-sentence restatement, if the prompt was thin (§2.0)
- [ ] Problem Brief (§2) or Free-will domain sweep + scorecard (§3.0)
- [ ] Idea Scorecard (top 1–2 ideas) + Novelty statement — Rubric Angle Table (§3.4) if an official rubric was published
- [ ] Scope-cut log, written before building starts (§3.4.5)
- [ ] UX screen list (3–5)
- [ ] Pitch arc + timed Pitch Timing Table + Judge Q&A Prep sheet (§4.3.1)
- [ ] Creative token system + Engineering Ladder applied consistently across code/deck/doc/web (§4.5)
- [ ] System design pass (flow, work placement, data model, reliability, rendering decision, adapter check)
- [ ] Python-only boilerplate (directory tree, stubs, setup commands, `.env.example`, README)
- [ ] `.gitattributes` + cross-platform setup scripts (§6), incl. native-build safety (§6.8) if Rust/C/C++ is involved
- [ ] Local/LAN git remote, branch plan, checkpoint schedule (§7 + §8)
- [ ] Dependency map + locked contracts (§8.2)
- [ ] Qwen↔Antigravity instruction packets for each build unit, if running the two-model setup (§11)
- [ ] On-site recon + re-score, if applicable (§12)
- [ ] (If applicable) PyO3 module or WASM build — only if explicitly justified (§9)

## Quick Mode (≤2hr)
10 min intake+idea (skip full research, skip §2.0's scratchpad unless the statement is genuinely
unreadable — then just the one-sentence restatement, nothing else, pick best instinct, skip §3.0's
full sweep, §3.1b's frame sweep, and §3.4's full angle table — just gut-check against the rubric's
top criterion if one exists, take the first idea
that scores ≥3.5) → 15 min skeleton, folding Feature Zero into it (fastest Python scaffold, wired
end-to-end with mock data counts as both) → 60 min build the one core screen that proves the idea →
15 min pitch (3 slides: Problem/Solution/Demo, skip the full §4.3.1 timing table — just agree who
talks when and rehearse once) → remaining: one rehearsal, polish. Skip formal integration
checkpoints and the written scope-cut log; still spend 5 minutes locking a one-line data/API
contract verbally if more than one person codes. Skip Phase 6/7's heavier options (devcontainer,
daemon setup) — a single local bare repo (§7.1) or a shared folder with disciplined manual merges
is enough at this length. Skip Phase 11's full packet format — one clear sentence per task to
Antigravity is enough; skip Phase 12 entirely, there's no time to safely pivot.
