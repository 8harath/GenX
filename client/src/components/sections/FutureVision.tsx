import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Rocket, Brain, Globe } from "lucide-react";

const milestones = [
  {
    year: "2024",
    icon: Calendar,
    title: "Market Launch",
    description: "Launch of our first consumer-ready VR headset with breakthrough affordability",
    achievements: [
      "Initial product release",
      "Educational partnership program",
      "Developer SDK launch"
    ]
  },
  {
    year: "2025",
    icon: Brain,
    title: "AI Integration",
    description: "Enhanced AI capabilities for improved user experience and content creation",
    achievements: [
      "Advanced machine learning features",
      "Automated content optimization",
      "Personalized learning paths"
    ]
  },
  {
    year: "2026",
    icon: Globe,
    title: "Global Impact",
    description: "Expanding our reach to emerging markets and diverse sectors",
    achievements: [
      "Worldwide distribution network",
      "Cross-platform ecosystem",
      "Industry-specific solutions"
    ]
  }
];

export default function FutureVision() {
  return (
    <section id="future-vision" className="py-20 bg-background/95">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Future Vision
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.2,
                  ease: [0.6, 0.05, 0.01, 0.9]
                }}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left md:flex-row-reverse'
                }`}
              >
                <div className={`space-y-4 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="inline-block"
                  >
                    <Card className="hover:shadow-[0_0_20px_rgba(0,255,0,0.2)] transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <milestone.icon className="w-8 h-8 text-primary" />
                          <h3 className="text-2xl font-bold">{milestone.year}</h3>
                        </div>
                        <h4 className="text-xl font-semibold mb-2">{milestone.title}</h4>
                        <p className="text-muted-foreground mb-4">{milestone.description}</p>
                        <ul className="space-y-2">
                          {milestone.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ x: -10, opacity: 0 }}
                              whileInView={{ x: 0, opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.1 * i }}
                              className="text-muted-foreground"
                            >
                              • {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                {/* Timeline marker */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(0,255,0,0.5)]"
                  />
                </div>

                {/* Empty column for layout */}
                <div className="hidden md:block" />
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <button className="bg-primary/10 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-6 py-3 rounded-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
              Stay Updated
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
