import Window from '@/components/Window';
import Button from '@/components/Button';

export default function WorkHub() {
  return (
    <main className="min-h-screen bg-myspace-bg p-4">
      <div className="mx-auto max-w-4xl space-y-6">
        <Window title="Work">
          <p className="text-myspace-text mb-4">
            Explore selected work by category.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Button href="/work/ui-ux">UI/UX & Content Strategy</Button>
            <Button href="/work/multimedia">Multimedia & Motion</Button>
            <Button href="/work/creative">Creative & Performance</Button>
            <Button href="/work/marketing">Marketing & Strategy</Button>
            <Button href="/work/data">Data Analytics & Viz</Button>
            <Button href="/resume">Resume</Button>
          </div>
        </Window>
      </div>
    </main>
  );
}
