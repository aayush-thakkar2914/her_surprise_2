import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Plane, Heart, Sparkles, Mountain, Users } from "lucide-react";

const dreams = [
  {
    icon: Home,
    title: "Our Dream Home",
    description: "A cozy place filled with love, laughter, and countless beautiful memories together.",
  },
  {
    icon: Plane,
    title: "Adventures Together",
    description: "Exploring the world hand in hand, creating stories we'll tell for a lifetime.",
  },
  {
    icon: Heart,
    title: "Growing Old Together",
    description: "Walking through life side by side, loving you more with each passing day.",
  },
  {
    icon: Mountain,
    title: "Conquering Dreams",
    description: "Supporting each other's goals and celebrating every victory together.",
  },
  {
    icon: Users,
    title: "Building a Family",
    description: "Creating a beautiful future filled with love, joy, and endless possibilities.",
  },
  {
    icon: Sparkles,
    title: "Making Magic",
    description: "Turning ordinary moments into extraordinary memories, every single day.",
  },
];

const Dreams = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 gradient-romance">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto max-w-6xl"
      >
        <div className="text-center mb-16">
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-block mb-4"
          >
            <Sparkles className="text-white" size={48} />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-dancing font-bold text-white mb-4"
          >
            Our Forever Dreams 🌙
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-white/90 font-poppins"
          >
            The beautiful future I see with you by my side 💫
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dreams.map((dream, index) => {
            const Icon = dream.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <Card className="shadow-romantic hover:shadow-glow transition-smooth bg-white/95 backdrop-blur border-2 border-white/50 h-full">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 3,
                        delay: index * 0.3,
                        repeat: Infinity,
                      }}
                      className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4"
                    >
                      <Icon className="text-primary" size={32} />
                    </motion.div>
                    <h3 className="text-2xl font-dancing font-bold text-foreground mb-3">
                      {dream.title}
                    </h3>
                    <p className="text-muted-foreground font-poppins">
                      {dream.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Card className="shadow-glow bg-white/95 backdrop-blur">
            <CardContent className="p-8">
              <Heart className="fill-primary text-primary mx-auto mb-4 animate-heart-beat" size={48} />
              <h2 className="text-3xl font-dancing font-bold text-primary mb-4">
                Together, Forever
              </h2>
              <p className="text-lg text-foreground font-poppins italic max-w-2xl mx-auto">
                "With you, every dream feels within reach. You're not just my love, you're my partner in everything. 
                Here's to building our beautiful forever, one magical moment at a time."
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Dreams;
