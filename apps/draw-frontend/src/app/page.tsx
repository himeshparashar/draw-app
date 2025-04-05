"use client";

import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { Demo } from "../components/Demo";
import { Testimonials } from "../components/Testimonials";
import { CallToAction } from "../components/CallToAction";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white">
      <Header />
      <Hero />
      <Features />
      <Demo />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  );
}
