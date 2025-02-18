import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Brain, Globe } from "lucide-react";

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
          {/* Timeline line with glowing effect */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 transform -translate-x-1/2 hidden md:block shadow-[0_0_10px_rgba(0,255,0,0.2)]" />

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
                    className="inline-block w-full"
                  >
                    <Card className="overflow-hidden hover:shadow-[0_0_30px_rgba(0,255,0,0.2)] transition-all duration-500 border border-primary/20">
                      <CardContent className="p-6 relative">
                        {/* Glowing background effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <motion.div
                          initial={{ scale: 0.95, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          transition={{ delay: index * 0.3 }}
                          className="relative z-10"
                        >
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
                                initial={{ x: index % 2 === 0 ? 20 : -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * i }}
                                className="text-muted-foreground flex items-center gap-2"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                                {achievement}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                {/* Animated timeline marker */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative"
                  >
                    <motion.div
                      animate={{ 
                        boxShadow: ["0 0 10px rgba(0,255,0,0.2)", "0 0 20px rgba(0,255,0,0.4)", "0 0 10px rgba(0,255,0,0.2)"]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="w-4 h-4 rounded-full bg-primary"
                    />
                    <div className="absolute inset-0 animate-ping bg-primary rounded-full opacity-25" />
                  </motion.div>
                </div>

                {/* Empty column for layout */}
                <div className="hidden md:block" />
              </motion.div>
            ))}
          </div>

          {/* Call to Action with enhanced animation */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary/10 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-6 py-3 rounded-lg relative group"
            >
              <span className="relative z-10">Stay Updated</span>
              <motion.div
                className="absolute inset-0 rounded-lg bg-primary opacity-0 group-hover:opacity-10"
                initial={false}
                animate={{ scale: [0.95, 1.05, 0.95] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}