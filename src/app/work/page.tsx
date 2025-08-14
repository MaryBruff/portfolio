import Window from '@/components/Window';
import Button from '@/components/Button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <Window title="Welcome to My Portfolio">
        <h1 className="text-2xl font-bold mb-4">Work</h1>
        <div className="flex space-x-4">
          <Button href="/about">About Me</Button>
          <Button href="/contact">Contact</Button>
        </div>
      </Window>
    </main>
  );
}