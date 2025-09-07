import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export default function ResumeContent() {
  return (
    <div className="space-y-6">
      {/* Summary */}
      <Card className="border-pink-500 bg-pink-800 bg-opacity-50 portfolio-font">
        <CardHeader>
          <CardTitle className="text-xl text-pink-300 animate-blink">Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="font-medium text-lg mb-2">
            QA Analyst & Frontend Engineer with strengths in accessibility, test automation, and data quality.
          </p>
          <p>Tools: React, TypeScript, GraphQL, Cypress, Jest, SQL, Figma, WCAG/ARIA.</p>
        </CardContent>
      </Card>

      {/* Skills */}
      <Card className="border-pink-500 bg-pink-800 bg-opacity-50 portfolio-font">
        <CardHeader>
          <CardTitle className="text-xl text-pink-300 animate-blink">Technical Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableBody>
              {[
                "Data Analysis & Reporting",
                "Customer Service",
                "Frontend Development",
                "UX/UI & Accessibility",
                "Microsoft Office",
                "Customer Experience & Communication",
              ].map((skill) => (
                <TableRow key={skill}>
                  <TableCell>{skill}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Education */}
      <Card className="border-pink-500 bg-pink-800 bg-opacity-50 portfolio-font">
        <CardHeader>
          <CardTitle className="text-xl text-pink-300 animate-blink">Education</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            {
              institution: "Turing School of Software & Design",
              degree: "Frontend Development",
              date: "Apr 2023 – Mar 2024",
            },
            {
              institution: "Metropolitan State University of Denver",
              degree: "B.S. Technical Communications · Minor in Digital Media",
              date: "Jan 2016 – Dec 2021",
            },
            {
              institution: "Coursera",
              degree: "Google Data Analytics Professional Certificate",
              date: "Feb 2022 – Mar 2022",
            },
          ].map((edu) => (
            <div key={edu.institution} className="space-y-1">
              <div className="font-semibold">{edu.institution}</div>
              <div>{edu.degree}</div>
              <div className="text-sm opacity-80">{edu.date}</div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Experience */}
      <Card className="border-pink-500 bg-pink-800 bg-opacity-50 portfolio-font">
        <CardHeader>
          <CardTitle className="text-xl text-pink-300 animate-blink">Professional Experience</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {[
            {
              title: "Data Annotation Specialist — Meta (via Experis)",
              location: "Remote · [Add exact dates]",
              responsibilities: [
                "Reviewed and validated annotations on high-volume datasets using proprietary platforms.",
                "Ensured compliance with quality rubrics and SOPs; authored and maintained guidelines.",
                "Developed workflow expertise to optimize quality outcomes and throughput.",
                "Monitored data for errors, patterns, and trends; produced actionable stakeholder reports.",
                "Acted as SME to advise on data quality issues and drive corrective actions.",
              ],
            },
            {
              title: "Programming & Playout Development — iHeartMedia (Intern)",
              location: "Remote · May 2024 – Aug 2024",
              responsibilities: [
                "Worked with AWS Lambda, S3, and EC2 on metadata ingestion pipelines and service reliability.",
                "Refactored REST APIs and implemented GraphQL schema/resolvers to improve flexibility.",
                "Built integration & E2E tests with Jest and Playwright for REST and GraphQL endpoints.",
                "Partnered with stakeholders to gather requirements and align feature development.",
                "Authored technical setup guides to streamline onboarding.",
              ],
            },
            {
              title: "Medical Claim Analyst — UnitedHealth Group",
              location: "Remote · Jan 2023 – May 2023",
              responsibilities: [
                "Investigated and resolved complex claims while adhering to regulations.",
                "Produced reports that informed strategic planning and process improvements.",
                "Surpassed productivity targets with high accuracy and quality.",
              ],
            },
          ].map((exp) => (
            <section key={exp.title}>
              <h3 className="font-semibold text-lg">{exp.title}</h3>
              <div className="text-sm opacity-80">{exp.location}</div>
              <Table className="mt-2">
                <TableBody>
                  {exp.responsibilities.map((resp, index) => (
                    <TableRow key={index}>
                      <TableCell>{resp}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </section>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}