import Header from './components/Header';
import Hero from './components/Hero';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-6 xl:px-4">
        <Hero />
      </main>
    </div>
  );
}