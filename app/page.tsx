"use client";

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Background from '../components/Background';
import GrandEntranceClient from '../components/GrandEntranceClient';
import ClickSpark from '../components/ClickSpark';
import SpiderScroll from '../components/SpiderScroll';

export default function Home() {
  return (
    <div className="w-full bg-black text-white selection:bg-cyan-500/40 font-sans">
      <ClickSpark sparkColor="#00ffff" sparkSize={12} sparkRadius={20} sparkCount={10} duration={500} easing="ease-out" extraScale={1.2} />
      <Background />
      <GrandEntranceClient />
      <SpiderScroll />

      <div className="relative z-10">
        <Navbar />
        <div className="pt-24 md:pt-16 page-content">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Achievements />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}
