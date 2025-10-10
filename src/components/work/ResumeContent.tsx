import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export default function ResumeContent() {
  return (
    <div className="space-y-6">
      {/* Summary */}
      <Card className="bg-accent shadow-md border border-border">
        <CardHeader>
          <CardTitle className="text-xl text-foreground">Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="font-medium text-lg mb-2">
            QA / Data Quality Engineer & Frontend Developer specializing in LLM training data, test automation,
            and accessible UI. Blend of React/TypeScript, Python/SQL, and AWS—shipping reliable features,
            clean data pipelines, and WCAG-compliant experiences.
          </p>
          <p className="text-foreground">
            Core stack: React, TypeScript, GraphQL, Python, SQL, Jest, Playwright/Cypress, AWS (Lambda, S3, EC2),
            Figma, WCAG/ARIA.
          </p>
        </CardContent>
      </Card>

      {/* Technical Skills */}
      <Card className="bg-accent shadow-md border border-border">
        <CardHeader>
          <CardTitle className="text-xl text-foreground">Technical Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableBody>
              {[
                ["Languages & DBs", "TypeScript, JavaScript, Python, SQL (Postgres)"],
                ["Frontend", "React, Next.js, Tailwind, shadcn/ui, WCAG/ARIA"],
                ["APIs & Data", "GraphQL (schema/resolvers), REST, JSON/SRT pipelines"],
                ["Testing", "Jest, Playwright, Cypress, E2E & integration, QA audits"],
                ["Cloud & DevOps", "AWS (Lambda, S3, EC2), CI/CD, Git/GitHub Actions"],
                ["Data & Reporting", "Pandas/SQL queries, KPI dashboards, QA metrics"],
                ["Docs & Enablement", "SOPs, self-serve guides, vendor training"],
              ].map(([label, value]) => (
                <TableRow key={label}>
                  <TableCell className="text-foreground">
                    <span className="font-semibold">{label}:</span> {value}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Experience */}
      <Card className="bg-accent shadow-md border border-border">
        <CardHeader>
          <CardTitle className="text-xl text-foreground">Professional Experience</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {[
            {
              title: "DataArt QA Engineer · Data Quality Team — Experis @ Meta",
              location: "Remote · Oct 2024 – Present",
              responsibilities: [
                "Audit human- and model-generated datasets for LLM training; enforce quality rubrics and ethical standards.",
                "Use Python + SQL to aggregate and analyze annotation data; deliver stakeholder reports that guide product/model changes.",
                "Lead vendor training for JSON, SRT, and proprietary formats; standardized workflows across global teams.",
                "Author/maintain detailed SOPs and workflow guidelines; reduced one-off support and improved annotation accuracy.",
              ],
            },
            {
              title: "Programming & Playout Development Engineer (Intern) — iHeartMedia",
              location: "Remote · May 2024 – Sep 2024",
              responsibilities: [
                "Migrated REST endpoints to GraphQL schema/resolvers, improving data-fetch performance and flexibility.",
                "Built integration & E2E tests (Jest, Playwright) for REST/GraphQL services; increased release confidence.",
                "Worked across AWS (Lambda, S3, EC2) to support scalable metadata/ingestion services.",
                "Created technical setup guides and troubleshooting checklists to accelerate onboarding.",
              ],
            },
            {
              title: "Medical Claim Analyst — UnitedHealthcare Group",
              location: "Remote · Jan 2023 – May 2023",
              responsibilities: [
                "Processed 500+ claims/day with regulatory compliance; performed root-cause analysis on discrepancies.",
                "Produced KPI and compliance reports to support audits and improve workflows.",
              ],
            },
            {
              title: "Medical Data Entry Clerk — American Medical Response",
              location: "Remote · Jun 2022 – Dec 2022",
              responsibilities: [
                "Executed high-volume data entry (360–1,000 claims/day) at 99.9% accuracy; upheld HIPAA standards.",
                "Introduced checklists/templates that reduced processing errors by ~15%.",
              ],
            },
          ].map((exp) => (
            <section key={exp.title}>
              <h3 className="font-semibold text-lg text-foreground">{exp.title}</h3>
              <div className="text-sm text-muted-foreground">{exp.location}</div>
              <Table className="mt-2">
                <TableBody>
                  {exp.responsibilities.map((resp, index) => (
                    <TableRow key={index}>
                      <TableCell className="text-foreground">{resp}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </section>
          ))}
        </CardContent>
      </Card>

      {/* Education & Certifications */}
      <Card className="bg-accent shadow-md border border-border">
        <CardHeader>
          <CardTitle className="text-xl text-foreground">Education & Certifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            {
              institution: "Turing School of Software & Design",
              degree: "Software Engineering Certificate — Front End Engineering (1,500+ hrs, Project-Based Curriculum)",
              date: "May 2023 – Mar 2024",
            },
            {
              institution: "Metropolitan State University of Denver",
              degree: "B.S. Technical Communication · Minor in Digital Media (3.9 GPA)",
              date: "Jan 2016 – Dec 2021",
            },
            {
              institution: "Coursera",
              degree: "Google Data Analytics Professional Certificate",
              date: "Jan 2022 – Feb 2022",
            },
            {
              institution: "Microsoft",
              degree: "Certified: Azure AI Fundamentals — In Progress",
              date: "2025",
            },
          ].map((edu) => (
            <div key={edu.institution} className="space-y-1">
              <div className="font-semibold text-foreground">{edu.institution}</div>
              <div className="text-foreground">{edu.degree}</div>
              <div className="text-sm text-muted-foreground">{edu.date}</div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
