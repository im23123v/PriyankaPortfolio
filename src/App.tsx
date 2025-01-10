import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundEffect from './components/BackgroundEffect';
import SparkleTrail from './components/SparkleTrail/SparkleTrail';
import ScrollGradient from './components/ScrollGradient';
import FloralPattern from './components/FloralPattern';
import './styles/animations.css';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white/90">
      <ScrollGradient />
      <FloralPattern />
      <BackgroundEffect />
      <SparkleTrail />
      <Header />
      <main className="relative">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}