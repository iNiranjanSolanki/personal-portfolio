import React from "react";
import Navbar from "@/components/Navbar";
import SocialIcons from "@/components/SocialIcons";
import Hero from "@/components/Hero";
import Technologies from "@/components/Technologies";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* // social icons */}
      <SocialIcons />

      {/* Hero Section  */}
      <Hero />

      {/* Technologies Section */}
      <Technologies />

      {/* PROJECTS Section */}
      <Projects />

      {/* About ME Section  start */}
      <About />

      {/* Contact Section */}
      <Contact />

      {/* Footer Section  start */}
      <Footer />
    </>
  );
}
