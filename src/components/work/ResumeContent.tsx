"use client";
import React from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ResumeContent() {
  const [showAll, setShowAll] = React.useState(false);

  // Reduced-motion friendly
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

  // --- Data ---
  const experiences = [
    {
      title: "DataArt QA Engineer — Experis @ Meta",
      location: "Remote · Oct 2024 – Current",
      responsibilities: [
        "Collaborate with engineers/researchers on LLM training pipelines; audit human- and model-generated data for quality and ethical integrity.",
        "Use Python & SQL to aggregate, analyze, and visualize annotation data; deliver reports that guide product and model improvements.",
        "Lead vendor training on data annotation & QA for JSON, SRT, and proprietary formats; standardize workflows across global teams.",
        "Author and maintain technical documentation and workflow guidelines, improving annotation accuracy and reducing rework.",
      ],
    },
    {
      title: "Programming & Playout Development Engineer Intern — iHeartMedia",
      location: "Remote · May 2024 – Sep 2024",
      responsibilities: [
        "Architected & maintained AWS (Lambda, S3, EC2) for scalable, fault-tolerant playout and metadata services.",
        "Spearheaded migration from REST to GraphQL schema/resolvers, improving data-fetch performance and maintainability.",
        "Built integration/E2E tests with Jest and Playwright; partnered in Agile sprints to ship user-facing features.",
        "Authored API guides and troubleshooting checklists to accelerate onboarding and reduce support requests.",
      ],
    },
    {
      title: "Medical Claim Analyst — UnitedHealthcare Group",
      location: "Remote · Jan 2023 – May 2023",
      responsibilities: [
        "Processed and adjudicated 500+ claims/day in compliance with Medicare/Medicaid policies and regulatory standards.",
        "Performed root-cause analysis on discrepancies; produced KPI and compliance reports to streamline workflows.",
        "Surpassed productivity targets while maintaining high accuracy and data integrity.",
      ],
    },
    {
      title: "Medical Data Entry Clerk — American Medical Response",
      location: "Remote · Jun 2022 – Dec 2022",
      responsibilities: [
        "Executed high-volume data entry (360–1,000 Medicaid claims/day) with 99.9% accuracy.",
        "Adhered to HIPAA and internal data-security standards for confidential member information.",
        "Created checklists/templates that reduced processing errors by 15%.",
      ],
    },
    {
      title: "Social Media Consultant (Contract) — Evergroove Studio",
      location: "Remote · Mar 2022 – Mar 2023",
      responsibilities: [
        "Designed and executed content strategies across Facebook, X, Instagram, and YouTube, driving a 10% lift in qualified leads.",
        "Monitored engagement metrics; delivered data-driven recommendations to refine cadence and content mix.",
        "Managed daily content creation, scheduling, and community engagement aligned to brand goals.",
      ],
    },
    {
      title: "Digital Marketing & Editor (Intern) — Hi Fire Media",
      location: "Remote · Jun 2021 – Mar 2022",
      responsibilities: [
        "Developed SEO strategies via keyword research, Excel pivot tables, and Google Data Analytics to boost organic visibility.",
        "Maintained content calendars and media plans; improved brand awareness and audience engagement.",
        "Collaborated with stakeholders to weave brand “hero stories” into marketing materials and UX copy.",
      ],
    },
  ];

  const visibleExperiences = experiences.slice(0, 3);
  const hiddenExperiences = experiences.slice(3);

  const technicalSkills = [
    "JavaScript / TypeScript / Python / SQL",
    "React / Next.js / GraphQL / REST",
    "Cypress / Jest / Pytest / QA",
    "AWS (Lambda, S3, EC2) / CI/CD / Git / Vercel",
    "Figma / Adobe / WCAG & ARIA",
    "Data Annotation / Pandas / JSON & SRT",
    "Excel / Looker Studio / Dashboards",
    "Tech Writing / API Docs / SOPs",
  ];

  const softSkills = [
    "Analytical problem-solving",
    "Detail-oriented QA",
    "Cross-functional collab",
    "Adaptability & rapid learning",
    "Leadership & training",
    "Clear technical comms",
    "Empathy & user-focus",
    "Time management",
    "Continuous improvement",
  ];

  // --- Motion Variants ---
  const EASE_OUT = [0.16, 1, 0.3, 1] as const;
  const EASE_IN = [0.12, 0, 0.39, 0] as const;

  const containerVariants: Variants = prefersReduced
    ? {}
    : {
        hidden: { opacity: 0, height: 0 },
        visible: {
          opacity: 1,
          height: "auto",
          transition: { duration: 0.28, ease: EASE_OUT },
        },
        exit: { opacity: 0, height: 0, transition: { duration: 0.22, ease: EASE_IN } },
      };

  const itemVariants: Variants = prefersReduced
    ? {}
    : {
        hidden: { opacity: 0, y: -6 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.18, ease: EASE_OUT } },
        exit: { opacity: 0, y: -6, transition: { duration: 0.16, ease: EASE_IN } },
      };

  return (
    <div className="w-full max-w-full min-w-0 space-y-3 sm:space-y-4 overflow-x-hidden font-sans break-words">
      {/* Summary */}
      <Card className="box-border border-[1.5px] sm:border-2 border-[#ff69b4] bg-[#fff0f5] shadow-[inset_-2px_-2px_0_#000,2px_2px_0_#fff] hover:shadow-[inset_-2px_-2px_0_#000,2px_2px_0_#ff69b4] transition-shadow duration-300 overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-[#ff69b4] to-[#ff85c1] text-white p-2 sm:p-3 border-b-[1.5px] sm:border-b-2 border-[#ffc0cb]">
          <CardTitle className="font-bold text-[clamp(14px,3.5vw,18px)] leading-tight">
            Summary
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3 sm:p-4 text-center min-w-0">
          <img
            src="https://dl.glitter-graphics.com/pub/805/805942lqkopzt0j7.gif"
            alt="Glitter banner"
            className="mx-auto mb-3 w-full max-w-[120px] max-h-40 object-contain sm:max-h-none"
          />
          <p className="font-medium text-[#800040] mb-2 leading-relaxed text-[clamp(13px,3.8vw,16px)]">
            QA Engineer and Frontend Developer blending technical precision with creative problem-solving. Skilled in Python, SQL, React, and accessibility-driven design to build scalable, high-quality digital experiences.
          </p>
          <p className="text-[#800040] leading-relaxed text-[clamp(12px,3.3vw,14px)]">
            Tools: JavaScript, React, TypeScript, GraphQL, Cypress, Jest, Python, SQL, AWS (Lambda, S3, EC2), Git, CI/CD, Figma, WCAG/ARIA.
          </p>
        </CardContent>
      </Card>

      {/* Technical Skills */}
      <Card className="box-border border-[1.5px] sm:border-2 border-[#ff69b4] bg-[#fff0f5] shadow-[inset_-2px_-2px_0_#000,2px_2px_0_#fff] hover:shadow-[inset_-2px_-2px_0_#000,2px_2px_0_#ff69b4] transition-shadow duration-300 overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-[#ff69b4] to-[#ff85c1] text-white p-2 sm:p-3 border-b-[1.5px] sm:border-b-2 border-[#ffc0cb]">
          <CardTitle className="font-bold text-[clamp(14px,3.5vw,18px)] leading-tight">
            Technical Skills
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3 sm:p-4">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 min-w-0">
            {technicalSkills.map((s) => (
              <li
                key={s}
                className="text-[#800040] text-[clamp(12px,3.2vw,14px)] bg-white/70 border border-[#ffc0cb] rounded px-2 py-1"
              >
                {s}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Soft Skills */}
      <Card className="box-border border-[1.5px] sm:border-2 border-[#ff69b4] bg-[#fff0f5] shadow-[inset_-2px_-2px_0_#000,2px_2px_0_#fff] hover:shadow-[inset_-2px_-2px_0_#000,2px_2px_0_#ff69b4] transition-shadow duration-300 overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-[#ff69b4] to-[#ff85c1] text-white p-2 sm:p-3 border-b-[1.5px] sm:border-b-2 border-[#ffc0cb]">
          <CardTitle className="font-bold text-[clamp(14px,3.5vw,18px)] leading-tight">
            Soft Skills
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3 sm:p-4">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 min-w-0">
            {softSkills.map((s) => (
              <li
                key={s}
                className="text-[#800040] text-[clamp(12px,3.2vw,14px)] bg-white/70 border border-[#ffc0cb] rounded px-2 py-1"
              >
                {s}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Experience */}
      <Card className="box-border border-[1.5px] sm:border-2 border-[#ff69b4] bg-[#fff0f5] shadow-[inset_-2px_-2px_0_#000,2px_2px_0_#fff] hover:shadow-[inset_-2px_-2px_0_#000,2px_2px_0_#ff69b4] transition-shadow duration-300 overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-[#ff69b4] to-[#ff85c1] text-white p-2 sm:p-3 border-b-[1.5px] sm:border-b-2 border-[#ffc0cb]">
          <CardTitle className="font-bold text-[clamp(14px,3.5vw,18px)] leading-tight">
            Professional Experience
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 sm:space-y-6 p-3 sm:p-4 min-w-0">
          {visibleExperiences.map((exp) => (
            <section key={exp.title} className="space-y-1.5 sm:space-y-2">
              <h3 className="font-semibold text-[#800040] text-[clamp(12px,3.2vw,14px)]">
                {exp.title}
              </h3>
              <div className="text-[clamp(11px,3vw,12px)] text-[#555]">
                {exp.location}
              </div>
              <ul className="list-disc pl-5 space-y-1 text-[#800040] text-[clamp(12px,3.2vw,14px)]">
                {exp.responsibilities.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </section>
          ))}

          <AnimatePresence initial={false}>
            {showAll && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-3 sm:space-y-6 overflow-hidden"
              >
                {hiddenExperiences.map((exp) => (
                  <motion.section
                    key={exp.title}
                    variants={itemVariants}
                    className="space-y-1.5 sm:space-y-2"
                  >
                    <h3 className="font-semibold text-[#800040] text-[clamp(12px,3.2vw,14px)]">
                      {exp.title}
                    </h3>
                    <div className="text-[clamp(11px,3vw,12px)] text-[#555]">
                      {exp.location}
                    </div>
                    <ul className="list-disc pl-5 space-y-1 text-[#800040] text-[clamp(12px,3.2vw,14px)]">
                      {exp.responsibilities.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </motion.section>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="pt-1">
            <button
              onClick={() => setShowAll((s) => !s)}
              className="
                w-full sm:w-auto
                bg-gradient-to-r from-[#ffe6f2] to-[#ffd6e9]
                text-[#800040] font-bold
                text-[clamp(12px,3.2vw,14px)]
                px-4 py-2 rounded-full
                border border-[#ff69b4]
                shadow-[2px_2px_0_#800040]
                hover:translate-y-[1px] hover:shadow-none active:scale-95
                transition-all
              "
              aria-expanded={showAll}
            >
              {showAll ? "▲ Show Less Experience" : "▼ Show More Experience"}
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Education */}
      <Card className="box-border border-[1.5px] sm:border-2 border-[#ff69b4] bg-[#fff0f5] shadow-[inset_-2px_-2px_0_#000,2px_2px_0_#fff] hover:shadow-[inset_-2px_-2px_0_#000,2px_2px_0_#ff69b4] transition-shadow duration-300 overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-[#ff69b4] to-[#ff85c1] text-white p-2 sm:p-3 border-b-[1.5px] sm:border-b-2 border-[#ffc0cb]">
          <CardTitle className="font-bold text-[clamp(14px,3.5vw,18px)] leading-tight">
            Education
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2.5 sm:space-y-4 p-3 sm:p-4 min-w-0">
          {[
            { institution: "Turing School of Software & Design", degree: "Frontend Development", date: "Apr 2023 – Mar 2024" },
            { institution: "Metropolitan State University of Denver", degree: "B.S. Technical Communications · Minor in Digital Media", date: "Jan 2016 – Dec 2021" },
            { institution: "Coursera", degree: "Google Data Analytics Professional Certificate", date: "Feb 2022 – Mar 2022" },
          ].map((edu) => (
            <div key={edu.institution} className="space-y-0.5 sm:space-y-1">
              <div className="font-semibold text-[#800040] text-[clamp(12px,3.2vw,14px)]">
                {edu.institution}
              </div>
              <div className="text-[#800040] text-[clamp(12px,3.2vw,14px)] leading-relaxed">
                {edu.degree}
              </div>
              <div className="text-[clamp(11px,3vw,12px)] text-[#555]">
                {edu.date}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
