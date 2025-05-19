import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900">
        <header className="p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Zhengke Wu</h1>
            <nav className="space-x-4">
              <Link to="/" className="hover:underline">Home</Link>
              <Link to="/portfolio" className="hover:underline">Portfolio</Link>
              <Link to="/research" className="hover:underline">Research</Link>
              <Link to="/resume" className="hover:underline">Resume</Link>
              <Link to="/about" className="hover:underline">About</Link>
              <Link to="/contact" className="hover:underline">Contact</Link>
            </nav>
          </div>
        </header>

        <main className="container mx-auto p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/research" element={<Research />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function Home() {
  return <div className="text-center text-xl">Welcome to Zhengke Wu's website.</div>;
}

function Portfolio() {
  return <div>Portfolio content coming soon.</div>;
}

function Research() {
  return <div>Research content coming soon.</div>;
}

function Resume() {
  return <div>Resume content coming soon.</div>;
}

function About() {
  return <div>About content coming soon.</div>;
}

function Contact() {
  return <div>Contact information coming soon.</div>;
}

export default App;
