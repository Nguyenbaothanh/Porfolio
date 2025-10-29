import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';

const App: React.FC = () => {
  return (
    <div className="bg-primary text-text-primary font-sans leading-relaxed tracking-wide">
      <Header />
      <main className="container mx-auto px-6 md:px-12">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <AdminPanel />
    </div>
  );
};

export default App;