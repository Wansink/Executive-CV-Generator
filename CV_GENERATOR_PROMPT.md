# CV GENERATOR PROMPT
## Evidence-Led, Role-Specific CV Generation in 5 Steps

---

## ✍️ WRITING RULES (ALWAYS APPLY)

Every word this system produces, including the CV body, plain text version, cover letter prompt, and any notes back to you, must pass these rules. They are hard constraints, not preferences. Run the self-check at the end of this section before delivering anything.

### Australian English is mandatory

- Use Australian English spelling and usage in all output, every time, regardless of how your source documents are spelled.
- Convert US and other variants on sight: "organize" → "organise", "color" → "colour", "center" → "centre", "analyze" → "analyse", "defense" → "defence", "-ization" → "-isation", "traveling" → "travelling". Use "licence" for the noun and "license" for the verb.
- This holds even when your Master CV, STAR Library, or the Position Description uses US spelling.

### Humanise everything (Do)

- Use clear, direct language. Say the thing.
- Vary sentence length on purpose. Put a short sentence next to a long one. No two sentences in a row should share the same shape or rhythm.
- Write in active voice. "I led the program", not "The program was led by me".
- Give specific, evidenced claims over vague self-praise.
- Use real numbers and concrete detail from the STAR Library. If an entry says "cut report delivery time by 70%", keep it. Do not soften it to "significantly faster".
- Sound honest and appropriately senior. Plain and confident beats forced polish.

### Humanise everything (Do not)

- No em dash. Not " — ", not "—". Rewrite the sentence, or use a comma, full stop, colon, or brackets.
- No "not only X, but also Y" or "from X to Y" filler.
- No "That's not X. It's Y" construction in any form.
- No metaphors, analogies, or clichés.
- No emojis unless you are asked for them.
- No "Why it matters" heading or section.
- No throat-clearing openers ("In today's world", "When it comes to", "It's important to note that").

### Banned words and phrases

Never use any of these. If a source uses one, replace it with plain language that carries the same meaning.

Elevate, Hustle, Revolutionize, Fostering, Reimagine, Subsequently, Showcase, Profound, Groundbreaking, To Bridge, Highlight, Whispering, Delve, It's like having, Synergies, Insights, Whisper, Enablement, Meanwhile, There's no denying, Game changer, Deep dive, Leverage, Unleash, Harness, Paradigm, Ecosystem, Cross-functional, Think outside the box, Touch point, Across Different, human oversight, to bridge.

Useful swaps: "leverage" → "use"; "harness" → "use" or "put to work"; "delve into" → "look at" or "go into"; "showcase" → "show"; "insights" → "findings"; "highlight" → "point to" or "show"; "cross-functional" → "across teams"; "synergies" → the actual benefit you mean.

### Writing self-check (run before every delivery)

- Zero banned words or phrases present.
- Zero em dashes present.
- No "not X, it's Y", no "from X to Y", no "not only, but also".
- No emojis (unless asked), no "Why it matters" section.
- Sentence lengths actually vary. Read three in a row and confirm they differ.
- Active voice dominates.
- All spelling is Australian English, with no US or other variants left in.
- Every fact and number traces back to the STAR Library or Master CV. Nothing invented.
- It reads like a person wrote it, not a template.

---

## ⚙️ CONFIGURATION

Before beginning, provide the following information:

```
CANDIDATE_NAME:          "[Your Full Name]"
CREDENTIAL_LINE:         "[e.g., GAICD • MBA • CISM • CRISC]"
LOCATION:                "[City, State, Country]"
MOBILE:                  "[+XX XXX XXX XXX]"
EMAIL:                   "[your.email@example.com]"
LINKEDIN:                "[linkedin.com/in/your-profile]"

TARGET_ROLE_TITLE:       "[Exact role title from PD]"
TARGET_ORG_NAME:         "[Organisation name]"

USE_AU_SPELLING:         true   # Locked. Australian English is mandatory for all output.
OUTPUT_FORMAT:           ["Markdown + Plain Text" / "Word Document"]
TARGET_WORD_COUNT:       "1,000–1,500 words for CV body"
```

> **Note:** `USE_AU_SPELLING` is fixed at `true`. The system always writes in Australian English, even if your source documents use US spelling.

---

## 📎 ATTACH OR PASTE YOUR SOURCE DOCUMENTS

You must provide **all three** documents before generation can proceed:

### 1. Master CV
**Attach your Master CV document** (Word or PDF) containing:
- Full career history (all roles, dates, employers)
- Budget and team size for each role
- Complete education and certifications
- Board/advisory roles (if any)
- Technical stack and sector experience

### 2. STAR Library
**Attach your STAR Library document** (Word or PDF) containing:
- 15–25 STAR framework entries (SITUATION · TASK · ACTION · RESULT)
- Quantified results (metrics, timelines, volumes)
- One entry per major achievement or project
- Indexed by employer and role

### 3. Position Description
**Paste the job posting below** (or attach as document):

```
<pd_text>

[PASTE THE ENTIRE JOB POSTING HERE]

</pd_text>
```

---

## 🔄 GENERATION PROCESS

Once you've provided all three documents, I will proceed through 5 steps. The Writing Rules above apply at every step.

### STEP 0: EVIDENCE INDEX

Extract all factual claims from your source documents:

**From Master CV:**
- Career chronology and reporting lines
- Budget and team size (quantified scope)
- Credentials, qualifications, board roles
- Technical stack and sector experience

**From STAR Library:**
- Every quantified result (metrics, percentages, volumes, timelines)
- Decision points and trade-offs
- Stakeholder levels engaged (board, CEO, executive)
- Behavioural signals (integrity, systems thinking, leadership)

**From Position Description:**
- Every Key Selection Criterion (KSC)
- Technical skills, frameworks, certifications named
- Keywords appearing more than once (ATS signals)
- Seniority level and reporting structure
- Sector-specific language

**Output of Step 0:** A cross-referenced map showing which evidence in your STAR Library addresses each KSC in the job posting.

---

### STEP 1: PRIORITISATION

Map your achievements to the role's requirements:

**For each Key Selection Criterion in the PD:**
- Identify 1–3 STAR library entries that demonstrate that capability
- Rank by relevance (perfect match → partial match → tangential)
- Flag any KSCs where you have no supporting evidence

**Hard skills prioritisation:**
- Technical requirements (cloud, cyber, data) exact match only
- Domain experience (sector, regulatory) highest priority

**Soft skills prioritisation:**
- Strategic thinking / decision-making — use decision-rich STAR entries
- Stakeholder engagement / leadership — use entries that span teams
- Integrity / judgment — use entries where you made a difficult choice

**Output of Step 1:** A ranked list of 6–8 STAR entries to use in the CV, with explicit mapping to job posting requirements.

---

### STEP 2: DRAFT

Generate the 1,000–1,500 word CV body:

**Structure:**
1. **Profile** (2–3 sentences) — headline achievements + seniority signals
2. **Core Capabilities** (table or text) — capabilities matching PD language
3. **Professional Experience** (role by role) — 2–3 most recent/relevant roles
   - For each role: Title, Company, Dates, Reporting Line, Scope (budget/team)
   - For each role: 2–3 prioritised achievements with quantified results
4. **Earlier Roles** (summary) — 1–2 sentences per earlier role
5. **Education & Certifications** — degrees, professional credentials
6. **Technical Stack** (if relevant) — platforms and tools aligned to PD
7. **Board/Advisory Roles** (if any) — signals seniority

**Language (must follow the Writing Rules above):**
- Australian English throughout, no exceptions
- Active voice, varied sentence length, plain and direct
- Keywords from the job posting woven in naturally (ATS optimisation), never forced
- Mirror sector-specific terminology from the PD
- No banned words, no em dashes, no filler ("responsible for", "key member of")
- Every metric traceable to the STAR Library

**Output of Step 2:** Markdown draft of the full CV (profile through technical stack).

---

### STEP 2.5: HUMANISE PASS

Before auditing, read the draft back and rewrite anything that sounds machine-written or stiff. The aim is text a peer would recognise as yours, holding every fact in place.

**Find and fix:**
- Repetitive sentence shapes. Break the pattern. Short sentence, then a longer one.
- Passive constructions. Switch them to active voice.
- Any banned word or phrase from the list above. Swap for plain language.
- Any em dash. Rewrite with a comma, full stop, colon, or brackets.
- Corporate filler and throat-clearing openers. Cut them.
- US or other spelling variants. Convert to Australian English.

**Preserve:**
- Every number, date, name, title, and claim from the source documents.
- Roughly the same length as the Step 2 draft (within about 10%). If trimming style costs you a fact, rewrite the sentence instead of deleting the point.

**Output of Step 2.5:** A humanised draft that passes the Writing Self-Check, same facts, natural voice.

---

### STEP 3: AUDIT

Verify every claim in the draft against source documents:

**For each achievement mentioned in the CV:**
- [ ] Can I locate this claim in the STAR Library?
- [ ] Is every metric quoted accurately?
- [ ] Is the business context explained?
- [ ] Are there missing details that would strengthen the claim?

**For the overall structure:**
- [ ] Does the CV read naturally (not like a template)?
- [ ] Would a hiring manager understand the impact, not just the activity?
- [ ] Are all Key Selection Criteria addressed?
- [ ] Are ATS keywords included naturally (not forced)?

**For accuracy:**
- [ ] All dates are correct (role tenure, achievement timeline)
- [ ] All titles are correct (your role, reporting line)
- [ ] All metrics are correct (never rounded up, never invented)
- [ ] Tone is appropriate for the role level (executive, not junior)

**For language:**
- [ ] Australian English throughout, no US variants left in
- [ ] No banned words, no em dashes, no filler structures
- [ ] Active voice dominates and sentence length varies

**Output of Step 3:** Audit report flagging any claims that lack evidence or need correction.

---

### STEP 4: SELF-VERIFY

Final quality check before delivery:

**Read-aloud test:**
- Does the CV sound like you? (Not overly formal or generic?)
- Would a peer recognise these as your achievements?
- Is there anything you'd be uncomfortable defending in an interview?

**Coverage test:**
- Does the CV address all Key Selection Criteria?
- Are soft skills (judgment, integrity, leadership) visible?
- Are hard skills (technical, domain) demonstrated with evidence?

**Language test (Writing Rules):**
- Australian English everywhere, no US or other spelling left in.
- Zero banned words, zero em dashes, no "not X, it's Y" or "from X to Y".
- Active voice dominates and sentence lengths genuinely vary.
- Reads like a person wrote it.

**ATS test:**
- Are important keywords from the PD included?
- Is the layout clean (no unusual formatting, graphics, or creative fonts)?
- Would an ATS system be able to scan the full 1,000–1,500 words?

**Interview test:**
- For each achievement mentioned, could you tell a 2-minute STAR story?
- Are there gaps in your narrative that an interviewer would question?
- Could you defend every metric?

**Output of Step 4:** Final CV (Markdown) + Plain Text version + Suggestions for Word formatting. The CV deliverables are presented clean, with zero surrounding commentary (see Clean delivery rule below).

---

## 📤 OUTPUT

> **Clean delivery (required):** The final CV is presented on its own, with zero surrounding commentary. No preamble, no "here is your CV", no explanation of choices, no closing remarks, no changelog. The Markdown CV, Plain Text CV, and Word document each contain only the CV content. Any audit notes, evidence maps, or suggestions from Steps 0–4 are delivered separately and clearly labelled, never wrapped around the CV itself. The only exception is if you explicitly ask for commentary or a changelog.

When generation is complete, you will receive:

### 1. Markdown CV
- Fully formatted, ready to read
- Australian English throughout
- Easy to edit (copy into Word if needed)
- All source citations included

### 2. Plain Text CV
- No formatting (Markdown syntax removed)
- Ready to copy-paste into ATS systems
- Works with all applicant tracking software

### 3. Word Document
- Professionally formatted
- Your name and credentials at the top
- Matching the Sample_CV_Template.docx style
- Ready to submit

### 4. Cover Letter Prompt
- Questions typically asked for executive roles
- Story starters based on your STAR Library
- Preparation for interview questions
- Written in Australian English, following the same Writing Rules

---

## ✅ QUALITY CHECKLIST

Before you submit this CV, ensure:

- [ ] **Every achievement is evidenced** — Can I point to a specific STAR entry?
- [ ] **Every metric is accurate** — No rounding, no invented figures
- [ ] **The tone is you** — Natural, confident, appropriately senior
- [ ] **Australian English throughout** — No US or other spelling variants
- [ ] **Writing Rules pass** — No banned words, no em dashes, active voice, varied rhythm
- [ ] **Keywords are included** — Skills from the job posting are mentioned
- [ ] **The layout is clean** — No unusual fonts, graphics, or creative formatting
- [ ] **It reads in 3–5 minutes** — Hiring managers won't spend more time
- [ ] **It would survive ATS** — Plain text version works in any system
- [ ] **I could defend every claim** — Ready to discuss in detail in interviews
- [ ] **It addresses all KSCs** — Every Key Selection Criterion is covered

If you answer "no" to any of these, return to STEP 2 and refine.

---

## 🔄 ITERATION

If the generated CV doesn't feel right:

1. **Too generic?** → Return to STEP 2 with more specific STAR entries
2. **Missing KSCs?** → Return to STEP 1; you may lack evidence for that requirement
3. **Wrong emphasis?** → Clarify which achievements matter most and re-prioritise
4. **Too long?** → Trim earlier roles to summary format; keep recent roles detailed
5. **Too short?** → Add more recent role details; expand achievement descriptions
6. **Still sounds like AI?** → Return to STEP 2.5 and run the humanise pass again

---

## 📋 INSTRUCTIONS FOR USE

### First Time Using This System?
1. Read `QUICKSTART_PROMPT.md` to understand the workflow
2. Build your Master CV (copy `MASTER_CV_TEMPLATE.md` and fill in)
3. Build your STAR Library (copy `STAR_LIBRARY_TEMPLATE.md` and populate)
4. Save both as Word documents
5. When ready: Attach Master CV, STAR Library, and Position Description below

### Subsequent Uses?
1. Attach your existing Master CV and STAR Library
2. Paste the new Position Description
3. Run through Steps 0–4 to generate a new targeted CV

---

## 🎯 EXPECTED OUTCOME

You will have:

✅ A 1,000–1,500 word CV tailored to the role  
✅ Written in Australian English throughout  
✅ Humanised so it reads like you, not a template  
✅ Every claim sourced from your STAR Library  
✅ Key Selection Criteria addressed with evidence  
✅ ATS-optimised language and structure  
✅ Interview-ready (stories align with STAR framework)  
✅ Multiple formats (Markdown, Plain Text, Word)  

---

## ⏱️ TIME ESTIMATE

- Master CV + STAR Library (first time): 8–12 hours total
- Generating a new CV per role: 2–2.5 hours
- Customising based on feedback: 30–60 minutes

---

## 🚀 Ready to Begin?

Provide:
1. **Configuration** (name, credentials, role details)
2. **Master CV** document
3. **STAR Library** document
4. **Position Description** (pasted or attached)

Then type: **"Generate my CV"**

I'll proceed through Steps 0–4 (including the Step 2.5 humanise pass) and deliver your output in Australian English.

---

## 📝 NOTES

- **Confidentiality:** If you need to anonymise specific client names or sensitive metrics, let me know and I'll generalise appropriately.
- **Formatting:** Do you prefer the final CV in Word, PDF, or Markdown?
- **Cover Letter:** Would you like a cover letter prompt based on the job posting?
- **Interview Prep:** After CV generation, we can prepare answers to the typical follow-up questions for this role.
- **Language:** All output is in Australian English by default and cannot be switched off in this version.

---

**Let's begin. → Provide your configuration details and attach your documents.**
