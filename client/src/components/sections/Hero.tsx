import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ThreeScene from "../ThreeScene";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ThreeScene />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4 font-montserrat"
        >
          GenX Reality: Making AR/VR Accessible and Affordable for All
        </motion.h1>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 text-muted-foreground"
        >
          Unlocking the Transformative Potential of AR/VR Through Innovation and Accessibility
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,0,0.5)]"
          >
            Explore Our Solutions
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
