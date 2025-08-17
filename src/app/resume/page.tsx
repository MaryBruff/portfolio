    import Window from '@/components/Window';

    export default function Resume() {
    return (
        <main className="min-h-screen bg-myspace-bg p-4">
        <div className="mx-auto max-w-3xl space-y-6">
            {/* Header / Summary */}
            <Window title="Resume">
            <div className="text-myspace-text space-y-2">
                <p className="font-medium">
                QA Analyst & Frontend Engineer with strengths in accessibility, test automation, and data quality.
                </p>
                <p>
                Tools: React, TypeScript, GraphQL, Cypress, Jest, SQL, Figma, WCAG/ARIA.
                </p>
            </div>
            </Window>

            {/* Skills */}
            <Window title="Skills" className="myspace-window">
            <ul className="text-myspace-text space-y-2 list-disc pl-5">
                <li>Data Analysis & Reporting</li>
                <li>Customer Service</li>
                <li>Frontend Development</li>
                <li>UX/UI & Accessibility</li>
                <li>Microsoft Office</li>
                <li>Customer Experience & Communication</li>
            </ul>
            </Window>

            {/* Education */}
            <Window title="Education" className="myspace-window">
            <ul className="text-myspace-text space-y-4">
                <li>
                <div className="font-semibold">Turing School of Software & Design</div>
                <div>Frontend Development</div>
                <div className="text-sm opacity-80">Apr 2023 – Mar 2024</div>
                </li>
                <li>
                <div className="font-semibold">Metropolitan State University of Denver</div>
                <div>B.S. Technical Communications · Minor in Digital Media</div>
                <div className="text-sm opacity-80">Jan 2016 – Dec 2021</div>
                </li>
                <li>
                <div className="font-semibold">Coursera</div>
                <div>Google Data Analytics Professional Certificate</div>
                <div className="text-sm opacity-80">Feb 2022 – Mar 2022</div>
                </li>
            </ul>
            </Window>

            {/* Experience */}
            <Window title="Experience" className="myspace-window">
            <div className="text-myspace-text space-y-6">
                <section>
                <h3 className="font-semibold">Data Annotation Specialist — Meta (via Experis)</h3>
                <div className="text-sm opacity-80">Remote · [Add exact dates]</div>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Reviewed and validated annotations on high-volume datasets using proprietary platforms.</li>
                    <li>Ensured compliance with quality rubrics and SOPs; authored and maintained guidelines.</li>
                    <li>Developed workflow expertise to optimize quality outcomes and throughput.</li>
                    <li>Monitored data for errors, patterns, and trends; produced actionable stakeholder reports.</li>
                    <li>Acted as SME to advise on data quality issues and drive corrective actions.</li>
                </ul>
                </section>

                <section>
                <h3 className="font-semibold">Programming & Playout Development — iHeartMedia (Intern)</h3>
                <div className="text-sm opacity-80">Remote · May 2024 – Aug 2024</div>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Worked with AWS Lambda, S3, and EC2 on metadata ingestion pipelines and service reliability.</li>
                    <li>Refactored REST APIs and implemented GraphQL schema/resolvers to improve flexibility.</li>
                    <li>Built integration & E2E tests with Jest and Playwright for REST and GraphQL endpoints.</li>
                    <li>Partnered with stakeholders to gather requirements and align feature development.</li>
                    <li>Authored technical setup guides to streamline onboarding.</li>
                </ul>
                </section>

                <section>
                <h3 className="font-semibold">Medical Claim Analyst — UnitedHealth Group</h3>
                <div className="text-sm opacity-80">Remote · Jan 2023 – May 2023</div>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Investigated and resolved complex claims while adhering to regulations.</li>
                    <li>Produced reports that informed strategic planning and process improvements.</li>
                    <li>Surpassed productivity targets with high accuracy and quality.</li>
                </ul>
                </section>
            </div>
            </Window>

            {/* Quick Nav back to Work */}
            <Window title="Explore Work">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a className="underline" href="/work/ui-ux">UI/UX & Content Strategy</a>
                <a className="underline" href="/work/multimedia">Multimedia & Motion</a>
                <a className="underline" href="/work/creative">Creative & Performance</a>
                <a className="underline" href="/work/marketing">Marketing & Strategy</a>
                <a className="underline" href="/work/data">Data Analytics & Viz</a>
            </div>
            </Window>
        </div>
        </main>
    );
    }
