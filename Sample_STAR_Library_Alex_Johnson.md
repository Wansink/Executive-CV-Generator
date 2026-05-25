# STAR LIBRARY — Alex Johnson
## Chief Information Officer | ICT Leadership Portfolio
### Situation · Task · Action · Result Framework

---

## TECHGOV SOLUTIONS PTY LTD — Regulated Government & Private Sector Technology Services

### 1. ISO27001 ISMS Implementation & First-Time Accreditation

**Role:** Chief Information Officer  
**Dates:** 2018–2020 (18-month programme)  
**Team Size:** 3 direct reports (information security manager, compliance officer, security architect); 8 cross-functional team members from business units  
**Budget:** $450,000 (consulting, audit fees, remediation)  
**Client Impact:** 12+ government agencies relying on TechGov's services

#### SITUATION

TechGov Solutions had grown through three acquisitions over five years. Each acquired business unit operated with its own security controls, incident response procedures, and compliance frameworks — resulting in:
- Fragmented security posture across three business units
- No unified Information Security Management System (ISMS)
- Inconsistent evidence for compliance audits
- Government agency clients increasingly demanding ISO27001 and SOC 2 Type II certification as contractual requirements
- Risk of losing contract renewals if compliance posture wasn't demonstrated

The CEO had committed to government clients that certification would be achieved within 18 months — or risk $3.2m in contract revenue.

#### TASK

As newly appointed CIO, I was accountable for:
- Designing a unified ISMS that would satisfy all three business units' operational models
- Achieving ISO27001 accreditation within 18 months
- Maintaining full operational delivery during transformation (zero tolerance for service disruption)
- Ensuring the ISMS was credible and sustainable — not a pre-audit sprint that would collapse after certification

#### ACTION

**Established governance and stakeholder alignment.** I created an ISMS Steering Committee with representatives from each business unit (CTO, compliance lead, operations manager) and external advisors (audit firm, ISO27001 consultant). Rather than imposing a top-down framework, I conducted individual sessions with each business unit to understand their operational constraints, legacy systems, and compliance obligations. I explicitly surfaced tensions (e.g., Unit A operated on 4-hour change windows; Unit B needed 48-hour change windows). We designed the ISMS to accommodate both — with escalation paths rather than one-size-fits-all controls.

**Designed the ISMS from first principles.** I chose not to adopt an off-the-shelf framework directly. Instead, I had the audit firm conduct a baseline security assessment across all three units. We mapped all existing controls to ISO27001 Annex A, identified gaps, and prioritised remediation based on two factors: (a) risk exposure, and (b) effort to implement. This meant we tackled high-risk/high-effort items first, ensuring critical gaps didn't become pre-audit pressure.

**Built documentation and evidence in parallel with implementation.** Many organisations write policies *after* implementation, then retrofit evidence. I reversed this: as we implemented each control, the responsible team documented it in real-time. By month 12, we had 95% of documentation complete, leaving 6 months for polish and testing — not panic.

**Managed resistance and built buy-in.** Unit A's operations team initially resisted change management controls ("they'll slow us down"). Rather than forcing compliance, I ran a tabletop exercise showing what happens when changes go wrong (using a real-world example from our incident history). Operations saw the value. They then became advocates — suggesting additional controls that would prevent *their* specific pain points.

**Prepared rigorously for audit.** Two months before the external audit, I conducted a full mock audit with the same audit firm. Found three gaps (minor control documentation, one remediation needed). Fixed them before the real audit. The audit firm noted that most organisations find 15–20 findings; we had zero.

#### RESULT

- **ISO27001 Accreditation achieved in month 18 — first audit, zero major findings.** Auditor noted the quality of documentation and evidence was "above average for this organisation size."
- **SOC 2 Type II audit passed with flying colours.** No qualifications, no management letters, no follow-up actions required.
- **Government agency contract retention improved by 35%.** Three clients renewed contracts citing "demonstrated commitment to information security" as a key factor.
- **Security incident response time reduced from 8 hours to 2 hours.** Incident handling procedures embedded in the ISMS meant faster decision-making and escalation.
- **Employee security training completion rate reached 98%** (from 62%). Mandatory training was now integrated into ISMS governance.
- **Vendor risk assessments became standard practice.** We used the ISMS control framework to assess every new vendor's security posture before contract signature.
- **Most critically:** The ISMS remained stable for 2+ years post-certification without major overhauls. This proved it wasn't a pre-audit sprint but a sustainable operating model.

---

### 2. Cross-Agency Data Sharing & Interoperability Platform — Multi-Agency Case Management

**Role:** Chief Information Officer  
**Dates:** 2019–2021 (24-month programme)  
**Team Size:** 4 direct reports (platform architect, security lead, data governance officer); 12 extended team (developers, business analysts); 15+ stakeholders from three agencies  
**Budget:** $1.8m (design, development, infrastructure)  
**Partner Agencies:** Two government investigation agencies + one prosecutorial agency (12,000+ users across three agencies)

#### SITUATION

Three government agencies each operated separate case management systems. When cases involved multiple agencies (common for serious crime), investigators had to:
- Manually share information across systems (copy-paste, email, phone calls)
- Reconcile duplicate data entries
- Manually check for conflicts or inconsistencies
- Chase each other for updates on shared cases

This created:
- Investigation delays (estimated 40% of time spent on data coordination, not investigation)
- Data quality issues (duplicate records, conflicting information)
- No audit trail of who accessed what information, when, and why
- No formal data governance framework for shared information
- Risk of privacy/security breach through unsecured data transfer methods

The agencies' leadership wanted to "break down silos" and enable real-time data sharing — but no one knew how to do it without requiring each agency to replace their legacy systems (infeasible due to cost and change management risk).

#### TASK

As a trusted advisor to all three agencies, I was asked to:
- Design a data sharing and interoperability solution that respected each agency's data ownership and system independence
- Enable secure, audit-logged information exchange without requiring system replacement
- Establish formal data governance framework for shared information
- Achieve consensus across three sovereign agencies (different budgets, different compliance obligations, different change governance)

This was fundamentally a stakeholder management and governance design problem, not a technology problem.

#### ACTION

**Built a cross-agency working group.** I convened monthly sessions with CIOs, business process leads, legal officers, privacy commissioners, and operational staff from all three agencies. Rather than presenting a pre-designed solution, I asked: "What would make your job easier? What's your constraint? What do you need from the other agencies?" This took 3 months but surfaced the real priorities (not what I assumed they were).

**Designed a federated governance model.** Instead of a centralised "data hub" (which would require one agency to "own" the shared data — politically infeasible), I designed a federated model where each agency maintained ownership of its data, but exposed it through a standardised API. Each agency's data remained in their system, under their control, but other agencies could query it with proper authorisation and audit trail.

**Chose API-based interoperability over system replacement.** Rather than "rip and replace" their legacy systems, I designed API connectors that would sit *in front* of each agency's system, translating data into a common schema. This meant: no system replacement, no operational disruption, lower cost, and each agency could proceed at their own pace.

**Established data governance framework.** Before building anything, we defined:
- What data could be shared (sensitive operational data, not personnel records or intelligence source information)
- Who could access what (role-based access control)
- Audit trail requirements (every access logged, with query details)
- Incident response protocols (if data was inappropriately accessed, how would agencies notify each other?)
- Data retention policies (how long does shared data live in the federated system?)

This took 6 months of legal and privacy negotiation but was essential for trust.

**Negotiated data sharing agreements.** I facilitated the development of formal inter-agency data sharing agreements, signed by all three agencies' executives. These agreements clarified liability, indemnification, and escalation paths if problems occurred. Without formal agreements, agencies were reluctant to share data.

**Managed change across operations.** The federated model required changes to how investigators worked — they could now query data from other agencies in real-time rather than submitting manual requests. Some investigators saw this as "loss of control" (they could no longer decide what data to share informally). I worked with operational leads to demonstrate that the new model *increased* their control — everything was logged, and they had visibility of who was accessing their cases.

**Built a proof-of-concept first.** Before committing to full implementation, I worked with one sub-team from each agency to pilot the federated model on a small set of cases. This proved the concept, built confidence, and allowed us to refine procedures before full rollout.

#### RESULT

- **Investigation coordination time reduced by 40%.** Investigators could now see related cases from other agencies in real-time, rather than spending hours chasing updates manually.
- **Cross-agency data accuracy improved from 87% to 98%.** Duplicate data entry eliminated. Single source of truth for each agency's data.
- **Data sharing volume increased from ~50 manual requests per week to 5,000+ automated queries per week** — indicating the system was being actively used, not just ceremonially.
- **Three agencies now use the platform as their standard operating procedure.** All new joint investigations automatically use federated data sharing.
- **Recognised as a model for whole-of-government initiatives.** State government CIO asked me to present the approach to other agency heads considering similar challenges.
- **Zero privacy or security incidents** attributed to the shared data platform in 2+ years of operation (despite handling sensitive case information).
- **Cost savings:** Avoided ~$12m in system replacement costs across three agencies. Investment was $1.8m + ongoing infrastructure ($200k/year).
- **Most importantly:** Demonstrated that technology solutions to government silos require governance first, design second, and implementation third. Many organisations reverse this order and fail.

---

### 3. IT Strategy & Digital Transformation Roadmap — Competitive Advantage Through Technology

**Role:** Chief Information Officer  
**Dates:** 2020–2022 (24-month programme)  
**Team Size:** 8 direct reports; 35-person ICT team; 40+ stakeholders across business units  
**Budget:** $3.2m transformation investment (platform modernisation, tooling, team development)

#### SITUATION

TechGov had grown to $50m+ revenue through acquisitions and organic growth. Technology had kept pace operationally (systems worked), but IT strategy was reactive:
- No formal strategy document; decisions made issue-by-issue
- No roadmap; investment requests competed annually without visibility of interdependencies
- Business units didn't trust IT to understand their needs (historical tension from poor project delivery)
- Cloud adoption was ad-hoc (some apps in AWS, some in Azure, some on-premise) — no coherent strategy
- Skills were fragmented (generalists stretched thin; no specialisation)
- CEO wanted IT to be a competitive differentiator, not just a cost centre

#### TASK

I was asked to develop and execute an IT strategy that would:
- Align technology investments to business growth priorities
- Build competitive advantage through technology choices (cloud-native, AI-enabled service delivery, etc.)
- Modernise the technology stack
- Build internal capability so we could reduce consulting dependency
- Maintain 100% operational uptime during transformation

#### ACTION

**Conducted discovery across the entire business.** Rather than writing strategy in isolation, I spent 6 weeks interviewing 40+ stakeholders: business unit heads, product leads, finance, operations, board members. I asked: "What's your 3-year vision? What technology is blocking you?" This gave me the real priorities (not what my assumptions were).

**Mapped current state honestly.** I created a technology landscape diagram showing all 47 applications, their age, vendor, cloud readiness, and business criticality. This was eye-opening: we had 12 database platforms when three would suffice; we had licensing agreements that made no sense; we had technical debt in systems handling 30% of our revenue.

**Designed the strategy around three pillars:**
1. **Cloud-First Architecture** — Migrate workloads to AWS/Azure based on business readiness, not a fixed timeline. Prioritise applications handling high-revenue business processes first.
2. **Data as a Competitive Asset** — Consolidate data platforms; build analytics and reporting capability that business units could self-serve (reducing IT dependency).
3. **Customer-Centric Digital Experience** — Invest in customer-facing platforms that differentiate us from competitors (not just internal tools).

**Built the roadmap collaboratively.** Rather than imposing a roadmap, I worked with business unit heads to sequence projects. For each project, we defined: (a) business outcome, (b) technology approach, (c) timeline and risk, (d) success metrics. This transparency meant business units understood trade-offs.

**Made hard choices explicitly.** The strategy required saying "no" to some requests. For example, one business unit wanted a bespoke CRM system; I recommended we buy Salesforce instead. Reason: we could deploy faster, maintain cheaper, and pivot faster if business needs changed. The business unit initially resisted (they wanted unique functionality), but I showed data: 80% of their requirements were standard; 20% were unique. Building custom for 20% would slow us down and create technical debt. They accepted this logic.

**Secured funding upfront.** Rather than fighting for project funding annually, I secured a 3-year commitment from the board. This was novel for the organisation — typically IT competed for funds year-to-year. Board commitment reduced uncertainty and allowed IT to plan properly.

**Built capability in parallel with delivery.** Many organisations do transformation *and* capability building sequentially. I did them in parallel: as teams delivered projects, they leveled up in new skills (cloud architecture, agile delivery, modern DevOps). This meant the team that finished the programme was more capable than when we started (not exhausted).

#### RESULT

- **Technology roadmap delivered 85% on time, 100% on budget.** Projects completed: Azure cloud migration (60% of workloads), data platform consolidation, modern customer portal.
- **Business unit satisfaction with IT increased from 5.2/10 to 7.8/10.** Perception of IT shifted from "cost centre" to "partner".
- **Technology cost as a percentage of revenue decreased from 8.2% to 6.9%** (despite adding cloud infrastructure), through consolidation and licensing optimization.
- **Time-to-market for new products reduced by 35%.** Faster cloud provisioning and self-service analytics meant product teams spent less time waiting for IT.
- **Team retention improved dramatically.** Zero departures of senior technical staff during the programme (previously, 2–3 departures per year). Exit interviews indicated staff felt they were "building something" rather than "fighting fires".
- **Board increased IT investment budget for following year** based on demonstrated delivery and business impact.

---

### 4. Board-Level Risk & Compliance Reporting — Transparent Risk Governance

**Role:** Chief Information Officer  
**Dates:** 2020–Present (ongoing quarterly reporting)  
**Team Size:** 1 compliance officer (direct report)  
**Stakeholders:** Board Risk Committee, CEO, CFO, external auditors (Big 4 firm)

#### SITUATION

TechGov had experienced a cyber incident in 2017 (before I arrived) that affected customer data. The incident was managed operationally, but the board's confidence in IT risk management was shaken. Subsequent board reporting on IT risk was defensive:
- IT would present rosy assessments (everything is fine, all risks mitigated)
- Board didn't believe IT's risk assessments
- Auditors would find discrepancies between IT's assertion and reality
- Board began micromanaging IT decisions, which slowed decision-making

#### TASK

I was asked to rebuild board confidence in IT risk management by presenting:
- Honest assessment of current IT risks (not downplayed)
- Clear plan to address material risks
- Transparent trade-offs (reducing risk by 100% is impossible; where are we accepting residual risk?)
- Regular, consistent reporting that the board could rely on

#### ACTION

**Rebuilt the IT risk register from scratch.** Rather than inheriting a register that board didn't believe, I conducted a new risk assessment with the ICT team and external auditors. We identified 18 material risks (not dozens of minor ones). For each risk, I documented:
- Risk statement (what could go wrong)
- Current control effectiveness (honest assessment: strong, adequate, or inadequate)
- Inherent risk (risk if we did nothing)
- Residual risk (risk after current controls)
- Mitigation plan (if residual risk was too high)
- Risk owner (who was accountable)
- Target state and timeline

**Made risk ownership explicit and personal.** I assigned each risk to a specific person (not "the IT team"). For example, "Cloud Security Risk" was owned by the Security Architecture Lead, not "the security team". This forced accountability.

**Designed honest risk reporting.** Each quarter, I presented the risk register to the board with:
- Traffic light status (red = material risk inadequately controlled; yellow = under control but requires ongoing attention; green = under control, not a focus area)
- Trend (improving, stable, or deteriorating)
- One-page narrative for each red/yellow risk explaining the situation, plan, and timeline
- Honest assessment of what could go wrong (no sugarcoating)

**Accepted residual risk explicitly.** When the board asked "Why haven't you eliminated this risk?", I would say: "Because eliminating it completely would cost $X and delay business delivery by 6 months. We've decided to accept Y level of residual risk because it aligns with our business risk appetite. Here's what could go wrong, and here's our plan if it does." The board respected the transparency.

**Reported incidents without defensiveness.** When small incidents occurred (e.g., a misconfigured cloud resource briefly exposed data), I reported it to the board proactively — not waiting for them to find out from auditors. I explained: what happened, why the control didn't catch it, how we fixed it, and what changed to prevent recurrence. No blaming, no excuses. The board appreciated the professionalism.

**Aligned auditor observations with risk register.** External auditors would find items; I would immediately assess if they represented new risks or manifestations of existing risks. I would integrate auditor findings into the risk register, not treat them as separate issues. This showed auditors and board that IT risk management was coherent, not ad-hoc.

#### RESULT

- **Board confidence in IT risk reporting increased significantly.** CFO noted in a board meeting that IT risk reporting was now the "gold standard" for the organisation (other functions were asked to match IT's transparency).
- **Time from incident occurrence to board notification reduced from 3 weeks (defensive, slow) to 24 hours** (transparent, proactive).
- **Auditor findings related to IT risk management reduced by 60% year-over-year.** Auditors confirmed the risk register was credible and remediation plans were realistic.
- **Board stopped micromanaging IT decisions.** Trust was rebuilt. Board approved IT strategic investments without line-by-line scrutiny.
- **Cyber insurance premium reduced by 15%** based on improved risk posture and demonstration of management capability.
- **Retention of risk committee sponsorship remained stable** — the board continued funding IT risk mitigation because they understood the rationale.

---

### 5. Enterprise Architecture & Legacy System Modernisation — Platform Sustainability

**Role:** Chief Information Officer  
**Dates:** 2018–2020 (initial assessment and planning); 2020–Present (ongoing delivery)  
**Team Size:** 2 architects (direct reports); 12 engineers  
**Budget:** Phase 1 (assessment): $150k | Phase 2–5 (modernisation): $2.1m over 3 years

#### SITUATION

TechGov's three acquired business units operated on legacy platforms:
- Unit A: Monolithic application written in 2003 (VB.NET, SQL Server on-premise), handling 40% of company revenue
- Unit B: Java-based system from 2009, hosted in two data centres
- Unit C: Hybrid of older systems and newer cloud applications, causing integration headaches

Legacy systems worked operationally but:
- High cost to change (each new feature took 3–6 months)
- Difficult to recruit engineers (VB.NET is not a competitive skill)
- Difficult to scale (monolithic architecture, poor separation of concerns)
- High operational cost (on-premise infrastructure, manual deployment)

Business wanted faster time-to-market for new features. Engineers wanted to work on modern technology stacks.

#### TASK

I was asked to develop and execute a modernisation roadmap that would:
- Transition legacy monoliths to cloud-native microservices
- Enable faster feature delivery
- Reduce operational cost
- Not disrupt revenue-generating operations (they run 24/7, no maintenance windows)

#### ACTION

**Assessed all systems with a "business readiness" lens, not a "technical purity" lens.** Rather than advocating for full rewrites (technically satisfying but expensive and slow), I assessed each legacy system:
- What's the business value? (revenue impact if this system failed)
- What's the technical debt? (how hard is it to change)
- What's the business change frequency? (do requirements change often?)
- What's the skill availability? (can we recruit engineers for this stack)

Based on this assessment:
- Unit A (VB.NET, 40% revenue, frequent changes, hard to change) → Candidate for full modernisation
- Unit B (Java, stable, mature, can recruit engineers) → Targeted refactoring, not full rewrite
- Unit C (hybrid) → Consolidation and integration focus

**Chose strangler pattern for modernisation.** Rather than "big bang" rewrites, I used the strangler pattern: build new functionality in modern stack (AWS, microservices, modern languages), gradually shift traffic away from legacy system. This meant:
- No disruption to existing operations
- Rollback capability (if new system had issues, shift traffic back to legacy)
- Tangible progress (business sees new features, not just "technical work")
- Risk mitigation (don't bet the company on one big rewrite)

**Built modernisation team with mixed skills.** Rather than hiring all "cloud architects" (who often don't understand legacy systems), I built teams with:
- 1 engineer who knew the legacy system deeply (could explain why things worked the way they did)
- 2 engineers new to the codebase (brought fresh perspective, modern skills)
- 1 DevOps engineer (could build the CI/CD pipeline)

This mix prevented both "legacy thinking" and "ivory tower architecture".

**Managed expectations about speed.** Business expected modernisation to be faster. I explained: "We're running the legacy system 24/7 for customers while simultaneously building a replacement. That's harder than just building something greenfield. We'll go at sustainable pace, not heroics." This proved wise — the first team that tried to go fast burned out after 3 months. The sustainable-pace teams delivered more.

**Made reusable platforms from modernisation work.** As we modernised Unit A, we built common platforms (API gateway, authentication, logging) that could be reused in Unit B and C. This meant each subsequent modernisation was faster.

#### RESULT

- **Unit A (legacy monolith) successfully transitioned to cloud-native microservices over 24 months.** Zero revenue-impacting incidents during transition.
- **Feature delivery velocity increased by 200%.** New features that took 3–6 months on legacy system now take 3–6 weeks on modern platform.
- **Operational cost for Unit A reduced by 35%.** Cloud consumption (pay-as-you-go) cheaper than on-premise infrastructure.
- **Engineer retention improved.** New hires wanted to work on modern tech; existing engineers up-skilled and feeling energised.
- **Platforms built during Unit A modernisation reused in Unit B and C.** Subsequent modernisations faster and cheaper.
- **By 2022, 70% of revenue-generating systems running on modern cloud-native platforms.** Remaining 30% on roadmap for modernisation or stable/low-change legacy (justified to remain).

---

### 6. Vendor Risk Assessment & Contract Governance Framework — De-Risking the Supply Chain

**Role:** Chief Information Officer  
**Dates:** 2018–2019 (framework design and implementation)  
**Team Size:** 1 procurement specialist (new hire); 2 legal/compliance staff  
**Scope:** 47 vendors across software, cloud, managed services, security  
**Budget:** $80k (process design, tools, initial assessments)

#### SITUATION

TechGov's portfolio of 47 vendors had grown organically through acquisitions and ad-hoc procurements:
- No central vendor register or contract repository
- Service levels inconsistent across vendors (some had SLAs, some didn't)
- No formal vendor risk assessments
- No standardised contract terms
- Compliance obligations varied by client (different vendors required different compliance certifications)
- When incidents occurred (e.g., a vendor's data centre went down), response was reactive — no escalation protocol

#### TASK

I was asked to build a vendor risk management framework that would:
- Identify which vendors were material (could threaten business continuity or compliance)
- Assess their risk profile (financial stability, security posture, compliance certifications)
- Standardise contract terms
- Establish escalation protocols
- Provide board-level visibility of vendor risk

#### ACTION

**Designed a vendor risk assessment matrix.** Rather than a generic questionnaire, I designed assessments tailored to vendor type:
- **Critical Infrastructure Vendors** (cloud providers, ISP): Deep security assessment, financial stability check, regulatory compliance review
- **Data Handling Vendors** (CRM, analytics): Security assessment, compliance certification check
- **Non-Critical Vendors** (office supplies, stationery): Light-touch assessment (minimal risk exposure)

This meant we focused effort on what mattered.

**Renegotiated critical vendor contracts.** For 28 critical vendors, I worked with procurement and legal to introduce standardised terms:
- Incident notification requirements (critical incident to be reported within 4 hours)
- Audit rights (we can audit their security controls)
- Business continuity requirements (recovery time objective, backup procedures)
- Data handling requirements (encryption, access controls, data retention)
- Indemnification and liability caps

Some vendors initially resisted (didn't want to accept liability or allow audits). I moved their contracts through a risk escalation: "We can renew on your terms, but we'll classify this as 'high-risk vendor' and reduce our spending with you. Or, we can align on reasonable terms, keep you as 'managed risk', and grow the relationship." Most vendors chose to align.

**Built a vendor risk dashboard.** Rather than a static spreadsheet, I built a dashboard showing:
- Traffic light status (green = managed risk, yellow = monitor closely, red = material risk requiring escalation)
- Key metrics (uptime performance, SLA compliance, audit findings)
- Upcoming contract renewals
- Outstanding issues or incidents

This dashboard was visible to board quarterly; CFO could see where vendor risk was a concern.

**Established vendor incident escalation protocol.** When a vendor incident occurred, we had a clear protocol:
- P1 incident (revenue-impacting, customer data exposed): Notify CEO, board, affected customers within 4 hours
- P2 incident (operational impact, no customer data): Notify CFO, business units within 24 hours
- P3 incident (non-critical): Notify relevant team, track for pattern analysis

This removed ambiguity and reduced time to escalation.

**Integrated vendor assessments into procurement process.** Going forward, every new vendor had to pass the risk assessment before contract signature. This prevented adding risky vendors to the portfolio.

#### RESULT

- **Vendor-related security incidents reduced to zero over 3-year period** (from average 4–6 per year).
- **Contract compliance cost reduced by 18%** through renegotiation and consolidation (reduced number of unique contract terms to manage).
- **Time to resolve vendor incidents reduced from 8 hours (chaotic) to 2 hours (protocol-driven).**
- **Board gained visibility of vendor risk for the first time.** CFO could see concentration risk (which vendors handled critical functions, whether that was appropriate).
- **Vendor relationship quality improved.** Clear expectations and accountability meant fewer disputes.
- **Most importantly:** Vendor risk was no longer a surprise. The framework meant we identified and managed problems proactively, not reactively.

---

## EARLIER ROLES

### Chief Information Officer | RegCompliance Services Ltd
#### STAR Entries: Compliance Uplift, Business Continuity & DR, Digital Transformation
*[Abbreviated; full entries available separately]*

---

### Deputy Chief Information Officer | Queensland Health Authority
#### STAR Entries: Infrastructure Consolidation, EHR Rollout, Enterprise Service Management
*[Abbreviated; full entries available separately]*

---

### Senior ICT Manager | Queensland Police Service
#### STAR Entries: Network Modernisation, Desktop Rationalisation, Operational Leadership
*[Abbreviated; full entries available separately]*

---

## MAINTENANCE NOTES

These six STAR entries cover Alex's strongest achievement areas and directly address the Audit Office NSW CIO role's requirements:

✅ **ISO27001 & Information Security** — Entry #1 directly demonstrates ISMS implementation  
✅ **Cross-Agency Stakeholder Management** — Entry #2 shows federated governance and multi-stakeholder coordination  
✅ **IT Strategy & Digital Transformation** — Entry #3 shows strategic thinking and roadmap delivery  
✅ **Board-Level Reporting** — Entry #4 shows governance and transparent communication  
✅ **Enterprise Architecture** — Entry #5 shows platform modernisation without disruption  
✅ **Risk & Vendor Governance** — Entry #6 shows supply chain risk management  

**Soft Skills Visible:**
- Judgment & Integrity (made hard choices, accepted residual risk honestly)
- Stakeholder Engagement (cross-agency collaboration, change management)
- Systems Thinking (understood interconnections between compliance, delivery, risk)
- Leadership Under Pressure (delivered during cyber incidents, transformations)

**Hard Skills Visible:**
- ISO27001 certification and ISMS implementation
- Cloud architecture and modernisation
- Program delivery and project management
- Security risk assessment and vendor management

*Last Updated: May 2025*
