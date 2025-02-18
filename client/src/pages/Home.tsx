import { motion } from "framer-motion";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Innovations from "@/components/sections/Innovations";
import HowItWorks from "@/components/sections/HowItWorks";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-background text-foreground overflow-x-hidden"
    >
      <Hero />
      <About />
      <Innovations />
      <HowItWorks />
      <Contact />
    </motion.div>
  );
}
