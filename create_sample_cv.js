const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, AlignmentType, 
        WidthType, BorderStyle, ShadingType, HeadingLevel, UnderlineType } = require('docx');
const fs = require('fs');

const PAGE_WIDTH = 12240;
const PAGE_HEIGHT = 15840;
const CONTENT_WIDTH = 9360;

const border = { style: BorderStyle.SINGLE, size: 6, color: "E0E0E0" };
const borders = { top: border, bottom: border, left: border, right: border };

const createSectionHeader = (text) => {
  return new Paragraph({
    text: text,
    style: "Heading1",
    spacing: { before: 240, after: 120 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "2E75B6", space: 1 } }
  });
};

const doc = new Document({
  styles: {
    default: {
      document: {
        run: { font: "Arial", size: 22 }
      }
    },
    paragraphStyles: [
      {
        id: "Heading1",
        name: "Heading 1",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 28, bold: true, font: "Arial", color: "1F4E78" },
        paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 0 }
      }
    ]
  },
  sections: [{
    properties: {
      page: {
        size: { width: PAGE_WIDTH, height: PAGE_HEIGHT },
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
      }
    },
    children: [
      // Header
      new Paragraph({
        children: [new TextRun({ text: "Alex Johnson", size: 32, bold: true })],
        spacing: { after: 0 }
      }),
      new Paragraph({
        children: [new TextRun({ text: "GAICD • MPA (Public Administration) • CISM • PMP • PRINCE2", size: 24, color: "2E75B6" })],
        spacing: { after: 120 }
      }),
      new Paragraph({
        children: [new TextRun({ text: "Brisbane, QLD | +61 407 123 456 | alex.johnson@email.com | linkedin.com/in/alexjohnson-cio", size: 22 })],
        spacing: { after: 240 }
      }),

      // PROFILE
      createSectionHeader("PROFILE"),
      new Paragraph({
        children: [new TextRun({
          text: "Fifteen years leading ICT strategy and digital transformation across government and regulated private sector environments. Specialist in implementing ISO27001-compliant Information Security Management Systems and building cross-agency collaboration frameworks. Experienced at board level reporting on technology, risk, and compliance; demonstrated track record delivering transformations while maintaining operational excellence and regulatory compliance.",
          size: 22
        })],
        spacing: { after: 240 }
      }),

      // CORE CAPABILITIES
      createSectionHeader("CORE CAPABILITIES"),
      new Table({
        width: { size: CONTENT_WIDTH, type: WidthType.DXA },
        columnWidths: [4680, 4680],
        rows: [
          new TableRow({
            children: [
              new TableCell({
                borders,
                width: { size: 4680, type: WidthType.DXA },
                shading: { fill: "D9E1F2", type: ShadingType.CLEAR },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [
                  new Paragraph({
                    children: [new TextRun({ text: "Strategic & Governance", bold: true, size: 22 })],
                    spacing: { after: 80 }
                  }),
                  new Paragraph({ children: [new TextRun("◆ IT Strategy & Digital Transformation")], spacing: { after: 60 } }),
                  new Paragraph({ children: [new TextRun("◆ Executive Leadership & Board Reporting")], spacing: { after: 60 } }),
                  new Paragraph({ children: [new TextRun("◆ Cross-Agency Stakeholder Engagement")], spacing: { after: 60 } }),
                  new Paragraph({ children: [new TextRun("◆ Enterprise Architecture & Systems Design")], spacing: { after: 60 } }),
                  new Paragraph({ children: [new TextRun("◆ Change Management & Transformation")], spacing: { after: 60 } }),
                ]
              }),
              new TableCell({
                borders,
                width: { size: 4680, type: WidthType.DXA },
                shading: { fill: "D9E1F2", type: ShadingType.CLEAR },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [
                  new Paragraph({
                    children: [new TextRun({ text: "Security & Compliance", bold: true, size: 22 })],
                    spacing: { after: 80 }
                  }),
                  new Paragraph({ children: [new TextRun("◆ Information Security Management (ISO27001)")], spacing: { after: 60 } }),
                  new Paragraph({ children: [new TextRun("◆ Cyber Security & Risk Management (CISM)")], spacing: { after: 60 } }),
                  new Paragraph({ children: [new TextRun("◆ Regulatory Compliance & Audit Readiness")], spacing: { after: 60 } }),
                  new Paragraph({ children: [new TextRun("◆ Business Continuity & Operational Resilience")], spacing: { after: 60 } }),
                  new Paragraph({ children: [new TextRun("◆ Vendor & Contract Governance")], spacing: { after: 60 } }),
                ]
              })
            ]
          })
        ]
      }),

      new Paragraph({ children: [new TextRun("")], spacing: { after: 240 } }),

      // PROFESSIONAL EXPERIENCE
      createSectionHeader("PROFESSIONAL EXPERIENCE"),

      // Current role
      new Paragraph({
        children: [
          new TextRun({ text: "Chief Information Officer", bold: true, size: 24 }),
          new TextRun({ text: " | ", size: 22 }),
          new TextRun({ text: "TechGov Solutions Pty Ltd", bold: true, size: 24 })
        ],
        spacing: { after: 0 }
      }),
      new Paragraph({
        children: [new TextRun({ text: "2018–Present | Brisbane, QLD | Reporting to: Chief Executive Officer", italic: true, size: 22, color: "595959" })],
        spacing: { after: 120 }
      }),

      // Achievement 1
      new Paragraph({
        children: [new TextRun({ text: "ISO27001 Information Security Management System — Design, Implementation & First-Time Accreditation", bold: true, size: 22 })],
        spacing: { after: 60 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Designed and implemented a unified Information Security Management System across three business units with fragmented legacy controls. Rather than imposing top-down frameworks, established a cross-functional ISMS Steering Committee to surface operational constraints and design controls that respected each unit's requirements. Conducted baseline security assessments, mapped existing controls to ISO27001 Annex A, and built documentation in parallel with implementation (not post-implementation). Achieved ISO27001 accreditation in month 18 with zero major audit findings. SOC 2 Type II audit passed without qualification. Government agency client retention improved 35% based on demonstrated compliance posture. Vendor risk assessments became standard practice using the ISMS control framework.",
          size: 22
        })],
        spacing: { after: 120 }
      }),

      // Achievement 2
      new Paragraph({
        children: [new TextRun({ text: "Cross-Agency Data Sharing & Interoperability Platform — Federated Governance Model", bold: true, size: 22 })],
        spacing: { after: 60 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Designed and executed a federated data sharing platform enabling three sovereign government agencies to share case management information in real-time without requiring system replacement. Established a cross-agency working group representing CIOs, business units, legal, and privacy offices. Designed a federated governance model where each agency maintained data ownership but exposed it through standardised APIs. Negotiated inter-agency data sharing agreements clarifying liability and escalation protocols. Chose a strangler pattern implementation: built new functionality in modern stack while maintaining legacy system uptime. Investigation coordination time reduced 40%; cross-agency data accuracy improved from 87% to 98%. Platform became the standard operating procedure for joint investigations across three agencies. Recognised as a model for whole-of-government initiatives.",
          size: 22
        })],
        spacing: { after: 120 }
      }),

      // Achievement 3
      new Paragraph({
        children: [new TextRun({ text: "IT Strategy & Digital Transformation Roadmap — Competitive Advantage Through Technology", bold: true, size: 22 })],
        spacing: { after: 60 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Developed and executed a 3-year IT strategy and transformation roadmap moving the organisation from reactive, ad-hoc technology decisions to strategic, business-aligned investment. Conducted discovery across 40+ stakeholders to understand business priorities rather than imposing pre-formed views. Designed strategy around three pillars: Cloud-First Architecture, Data as Competitive Asset, and Customer-Centric Digital Experience. Built the roadmap collaboratively with business unit heads; made hard choices explicitly (e.g., recommending Salesforce instead of custom CRM, demonstrating why 20% unique requirements didn't justify custom build). Secured 3-year board commitment for funding. Built capability in parallel with delivery: teams that completed the programme were more skilled than when they started. Roadmap delivered 85% on time, 100% on budget. Business unit satisfaction with IT increased from 5.2/10 to 7.8/10. Technology cost as percentage of revenue decreased 18% while adding cloud infrastructure.",
          size: 22
        })],
        spacing: { after: 240 }
      }),

      // Earlier role
      new Paragraph({
        children: [
          new TextRun({ text: "Chief Information Officer", bold: true, size: 24 }),
          new TextRun({ text: " | ", size: 22 }),
          new TextRun({ text: "RegCompliance Services Ltd", bold: true, size: 24 })
        ],
        spacing: { after: 0 }
      }),
      new Paragraph({
        children: [new TextRun({ text: "2014–2018 | Sydney, NSW", italic: true, size: 22, color: "595959" })],
        spacing: { after: 100 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Led compliance uplift programme across three regulatory frameworks (ASIC, AML/KYC, PCI-DSS) achieving 100% compliance across three consecutive annual audits. Redesigned Business Continuity and Disaster Recovery strategy based on realistic resource constraints rather than aspirational targets; conducted two DR exercises annually; live incident in 2017 validated 18-minute RTO. Led digital transformation migrating 15,000+ customers to cloud-based SaaS platform on time and under budget.",
          size: 22
        })],
        spacing: { after: 240 }
      }),

      // EDUCATION
      createSectionHeader("EDUCATION & CERTIFICATIONS"),
      new Paragraph({
        children: [new TextRun("Master of Public Administration (MPA) — University of Queensland, 2014")],
        spacing: { after: 60 }
      }),
      new Paragraph({
        children: [new TextRun("Bachelor of Science (Information Technology) — Queensland University of Technology, 2005")],
        spacing: { after: 120 }
      }),
      new Paragraph({
        children: [new TextRun("GAICD (Governance Institute of Australia) • CISM (Certified Information Security Manager) • PMP (Project Management Professional) • PRINCE2 (Projects in Controlled Environments)")],
        spacing: { after: 240 }
      }),

      // TECHNICAL STACK
      createSectionHeader("TECHNOLOGY PLATFORMS & FRAMEWORKS"),
      new Paragraph({
        children: [new TextRun({
          text: "Cloud & Infrastructure: AWS, Azure, Google Cloud, Kubernetes, Docker, Infrastructure-as-Code. Security & Compliance: Azure AD, Okta, Vault, Splunk (SIEM), CrowdStrike, ISO27001, NIST Cybersecurity Framework. Enterprise: ServiceNow, Salesforce, SAP, Microsoft Dynamics 365. DevOps: Jenkins, GitHub Actions, Azure DevOps, Terraform, Ansible. Data: SQL Server, PostgreSQL, Snowflake, Tableau.",
          size: 22
        })],
        spacing: { after: 0 }
      })
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("/mnt/user-data/outputs/Sample_Generated_CV_Alex_Johnson_Audit_Office.docx", buffer);
  console.log("✅ Sample generated CV created: Sample_Generated_CV_Alex_Johnson_Audit_Office.docx");
});
