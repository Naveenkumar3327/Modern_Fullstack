import Counter from "../components/Counter/Counter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">Welcome to Next.js!</h1>
      <Counter />
    </main>
  );
}
// This is the main page of the application, where the Counter component is rendered.
// It includes a welcome message and uses Tailwind CSS for styling.