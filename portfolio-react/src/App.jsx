import Header from './components/Header/Header';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="mx-auto max-w-7xl px-6 py-24">
        <section id="home" className="py-24">
          <h1 className="text-5xl font-bold text-slate-950 md:text-7xl">
            Hello, I'm Rushikesh Auti
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-500">
            MERN Stack Developer passionate about building responsive web
            applications using React, Node.js, Express, and MongoDB.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;