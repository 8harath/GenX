import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { AccessibilityIcon, Lightbulb, Layers, DollarSign } from "lucide-react";

const principles = [
  {
    icon: AccessibilityIcon,
    title: "Accessibility",
    description: "Making VR available to everyone"
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Advancing VR technology for real-world applications"
  },
  {
    icon: Layers,
    title: "Versatility",
    description: "Expanding VR beyond gaming"
  },
  {
    icon: DollarSign,
    title: "Affordability",
    description: "Ensuring cost-effective solutions without compromising performance"
  }
];

export default function About() {
  return (
    <section className="py-20 bg-background/95">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          GenX Reality: Bridging the Digital Divide with Accessible VR Technology
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-lg text-center mb-16 max-w-3xl mx-auto text-muted-foreground"
        >
          We saw firsthand how high costs and limited accessibility were preventing VR from reaching its full potential. 
          We are committed to democratizing access to immersive learning experiences and unlocking new use cases for VR across diverse sectors.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="hover:shadow-[0_0_20px_rgba(0,255,0,0.2)] transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <principle.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">{principle.title}</h3>
                  <p className="text-muted-foreground">{principle.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
