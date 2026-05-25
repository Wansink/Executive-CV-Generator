const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, AlignmentType, 
        WidthType, BorderStyle, ShadingType, HeadingLevel, PageBreak, UnderlineType } = require('docx');
const fs = require('fs');

// US Letter page size in DXA (1440 DXA = 1 inch)
const PAGE_WIDTH = 12240;   // 8.5 inches
const PAGE_HEIGHT = 15840;  // 11 inches
const CONTENT_WIDTH = 9360; // Content width with 1" margins

const border = { style: BorderStyle.SINGLE, size: 6, color: "E0E0E0" };
const borders = { top: border, bottom: border, left: border, right: border };

// Helper function to create section headers
const createSectionHeader = (text) => {
  return new Paragraph({
    text: text,
    style: "Heading1",
    spacing: { before: 240, after: 120 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "2E75B6", space: 1 } }
  });
};

// Helper function for body text
const createBodyText = (text) => {
  return new Paragraph({
    children: [new TextRun({ text: text, size: 22 })],
    spacing: { after: 120 }
  });
};

// Create the CV document
const doc = new Document({
  styles: {
    default: {
      document: {
        run: { font: "Arial", size: 22 } // 11pt
      }
    },
    paragraphStyles: [
      {
        id: "Heading1",
        name: "Heading 1",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 28, bold: true, font: "Arial", color: "1F4E78" }, // 14pt, dark blue
        paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 0 }
      },
      {
        id: "Heading2",
        name: "Heading 2",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 24, bold: true, font: "Arial" }, // 12pt
        paragraph: { spacing: { before: 180, after: 100 }, outlineLevel: 1 }
      }
    ]
  },
  sections: [{
    properties: {
      page: {
        size: { width: PAGE_WIDTH, height: PAGE_HEIGHT },
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } // 1 inch margins
      }
    },
    children: [
      // Header with name and credentials
      new Paragraph({
        children: [
          new TextRun({
            text: "[INSERT FULL NAME]",
            size: 32, // 16pt
            bold: true
          })
        ],
        spacing: { after: 0 }
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "[INSERT CREDENTIAL LINE • e.g., GAICD • MBA • CISM]",
            size: 24, // 12pt
            color: "2E75B6"
          })
        ],
        spacing: { after: 120 }
      }),

      // Contact info
      new Paragraph({
        children: [
          new TextRun({
            text: "[City, State] | [+XX XXX XXX XXX] | [email@example.com] | [linkedin.com/in/profile]",
            size: 22
          })
        ],
        spacing: { after: 240 }
      }),

      // PROFILE SECTION
      createSectionHeader("PROFILE"),
      new Paragraph({
        children: [
          new TextRun({
            text: "[INSERT 3-4 sentence executive profile. Include: Years of experience, key domain areas, notable achievements, board-level exposure, geographic/sector scope. Example: \"15+ years leading ICT strategy and digital transformation in complex, regulated environments including healthcare, justice, and government. Recognised for translating business complexity into practical technology solutions; experienced reporting at board and executive levels; track record delivering transformation while maintaining operational excellence across concurrent regulatory compliance obligations.\"]",
            size: 22,
            italic: true
          })
        ],
        spacing: { after: 240 }
      }),

      // CORE CAPABILITIES
      createSectionHeader("CORE CAPABILITIES"),
      
      // Create a 2-column capabilities table
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
                    children: [new TextRun({ text: "Strategic & Leadership", bold: true, size: 22 })],
                    spacing: { after: 80 }
                  }),
                  new Paragraph({ children: [new TextRun("◆ IT Strategy & Digital Transformation")], spacing: { after: 60 } }),
                  new Paragraph({ children: [new TextRun("◆ Enterprise Architecture & Systems Thinking")], spacing: { after: 60 } }),
                  new Paragraph({ children: [new TextRun("◆ Executive Leadership & Stakeholder Management")], spacing: { after: 60 } }),
                  new Paragraph({ children: [new TextRun("◆ Change Management & Organisational Development")], spacing: { after: 60 } }),
                  new Paragraph({ children: [new TextRun("◆ Board-Level Reporting & Governance")], spacing: { after: 60 } }),
                  new Paragraph({ children: [new TextRun("◆ Business Case Development & Investment Planning")] }),
                ]
              }),
              new TableCell({
                borders,
                width: { size: 4680, type: WidthType.DXA },
                shading: { fill: "D9E1F2", type: ShadingType.CLEAR },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [
                  new Paragraph({
                    children: [new TextRun({ text: "Technical & Operational", bold: true, size: 22 })],
                    spacing: { after: 80 }
                  }),
                  new Paragraph({ children: [new TextRun("◆ Cyber Security & Risk Management")], spacing: { after: 60 } }),
                  new Paragraph({ children: [new TextRun("◆ Cloud Architecture & Infrastructure")], spacing: { after: 60 } }),
                  new Paragraph({ children: [new TextRun("◆ Information Security Management (ISO27001)")], spacing: { after: 60 } }),
                  new Paragraph({ children: [new TextRun("◆ Regulatory Compliance & Policy")], spacing: { after: 60 } }),
                  new Paragraph({ children: [new TextRun("◆ Program & Portfolio Delivery")], spacing: { after: 60 } }),
                  new Paragraph({ children: [new TextRun("◆ Vendor & Contract Management")] }),
                ]
              })
            ]
          })
        ]
      }),

      new Paragraph({ children: [new TextRun("")], spacing: { after: 240 } }),

      // PROFESSIONAL EXPERIENCE
      createSectionHeader("PROFESSIONAL EXPERIENCE"),

      // Role 1
      new Paragraph({
        children: [
          new TextRun({
            text: "Chief Information Officer",
            bold: true,
            size: 24
          }),
          new TextRun({ text: " | ", size: 22 }),
          new TextRun({
            text: "[ORGANISATION NAME]",
            bold: true,
            size: 24
          })
        ],
        spacing: { after: 0 }
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "[Dates] | [City, State] | Reporting to: [Executive Title]",
            italic: true,
            size: 22,
            color: "595959"
          })
        ],
        spacing: { after: 120 }
      }),

      // Achievement 1
      new Paragraph({
        children: [
          new TextRun({
            text: "[ACHIEVEMENT 1 TITLE]",
            bold: true,
            size: 22
          })
        ],
        spacing: { after: 60 }
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "[Describe the situation, your action, and quantified result. Example: \"Designed and implemented an IT strategy aligned to corporate objectives, delivering digital transformation across [X areas]. Established governance frameworks and stakeholder forums that improved decision velocity by [X%] and reduced IT-business misalignment incidents by [X%]. Board confirmed improved visibility and confidence in IT capability.\"]",
            italic: true,
            size: 22
          })
        ],
        spacing: { after: 120 }
      }),

      // Achievement 2
      new Paragraph({
        children: [
          new TextRun({
            text: "[ACHIEVEMENT 2 TITLE]",
            bold: true,
            size: 22
          })
        ],
        spacing: { after: 60 }
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "[Describe the situation, your action, and quantified result.]",
            italic: true,
            size: 22
          })
        ],
        spacing: { after: 120 }
      }),

      // Achievement 3
      new Paragraph({
        children: [
          new TextRun({
            text: "[ACHIEVEMENT 3 TITLE]",
            bold: true,
            size: 22
          })
        ],
        spacing: { after: 60 }
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "[Describe the situation, your action, and quantified result.]",
            italic: true,
            size: 22
          })
        ],
        spacing: { after: 240 }
      }),

      // Role 2 (earlier role)
      new Paragraph({
        children: [
          new TextRun({
            text: "Senior ICT Manager / Deputy CIO",
            bold: true,
            size: 24
          }),
          new TextRun({ text: " | ", size: 22 }),
          new TextRun({
            text: "[EARLIER ORGANISATION]",
            bold: true,
            size: 24
          })
        ],
        spacing: { after: 0 }
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "[Dates] | [City, State]",
            italic: true,
            size: 22,
            color: "595959"
          })
        ],
        spacing: { after: 120 }
      }),

      new Paragraph({
        children: [
          new TextRun({
            text: "[Key responsibilities and achievements during this role. Include program delivery, team leadership, technical initiatives.]",
            italic: true,
            size: 22
          })
        ],
        spacing: { after: 240 }
      }),

      // EDUCATION & CERTIFICATIONS
      createSectionHeader("EDUCATION & CERTIFICATIONS"),

      new Paragraph({
        children: [
          new TextRun({
            text: "[Insert relevant tertiary qualifications e.g., MBA, BSc Information Technology, Graduate Diploma ICT]",
            size: 22
          })
        ],
        spacing: { after: 60 }
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "[Insert professional certifications: GAICD, CISM, CRISC, ChPP, CPPD, CISSP, AWS Solutions Architect, Azure Administrator, etc.]",
            size: 22
          })
        ],
        spacing: { after: 240 }
      }),

      // BOARD & ADVISORY
      createSectionHeader("BOARD & ADVISORY ROLES"),

      new Paragraph({
        children: [
          new TextRun({
            text: "[Insert any board appointments, advisory roles, or committee memberships relevant to your experience level.]",
            italic: true,
            size: 22
          })
        ],
        spacing: { after: 240 }
      }),

      // TECHNICAL STACK
      createSectionHeader("TECHNICAL STACK & PLATFORMS"),

      new Paragraph({
        children: [
          new TextRun({
            text: "[List the technologies, platforms, and frameworks you have hands-on or leadership experience with. Examples: Cloud: AWS, Azure, GCP | Container: Docker, Kubernetes | Infrastructure: Terraform, Ansible | Security: Identity management (Okta, Azure AD), SIEM solutions, vulnerability scanning | DevOps: CI/CD pipelines, Jenkins, GitHub Actions | Data: SQL Server, PostgreSQL, Snowflake | ERP: SAP, Oracle, Microsoft Dynamics | Project Management: Jira, Azure DevOps, MS Project]",
            italic: true,
            size: 22
          })
        ],
        spacing: { after: 0 }
      })
    ]
  }]
});

// Write the document to file
Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("/mnt/user-data/outputs/Sample_CV_Template.docx", buffer);
  console.log("✅ CV Template created: Sample_CV_Template.docx");
});
