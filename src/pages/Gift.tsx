import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Gift as GiftIcon, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Gift = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => {
    setIsOpened(true);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 gradient-romance flex items-center justify-center">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-dancing font-bold text-white mb-4"
          >
            A Special Gift For You
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-white/90 font-poppins"
          >
            Something made with love, just for you 💝
          </motion.p>
        </motion.div>

        <div className="flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            {!isOpened ? (
              <motion.div
                key="gift-box"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.2, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                {/* Gift Box */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative cursor-pointer"
                  onClick={handleOpen}
                >
                  <div className="w-64 h-64 bg-primary rounded-2xl shadow-glow flex items-center justify-center relative overflow-hidden">
                    {/* Ribbon */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-full bg-accent" />
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-12 bg-accent" />

                    {/* Bow */}
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -top-6 left-1/2 -translate-x-1/2 z-10"
                    >
                      <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-romantic">
                        <GiftIcon className="text-accent-foreground" size={32} />
                      </div>
                    </motion.div>

                    {/* Sparkles */}
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute"
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          delay: i * 0.3,
                          repeat: Infinity,
                        }}
                      >
                        <Sparkles className="text-white" size={20} />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-8 text-center"
                >
                  <Button
                    size="lg"
                    onClick={handleOpen}
                    className="bg-white text-primary hover:bg-white/90 shadow-romantic font-poppins text-lg px-8"
                  >
                    Unwrap Your Gift 🎁
                  </Button>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="opened-gift"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full"
              >
                {/* Confetti Effect */}
                {[...Array(30)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    initial={{
                      x: "50%",
                      y: "50%",
                      scale: 0,
                    }}
                    animate={{
                      x: `${Math.random() * 200 - 100}%`,
                      y: `${Math.random() * 200 - 100}%`,
                      scale: [0, 1, 0],
                      rotate: Math.random() * 360,
                    }}
                    transition={{
                      duration: 1.5,
                      ease: "easeOut",
                    }}
                  >
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{
                        backgroundColor: [
                          "#FF69B4",
                          "#FFB6C1",
                          "#FFC0CB",
                          "#E0BBE4",
                          "#FF6B9D",
                        ][Math.floor(Math.random() * 5)],
                      }}
                    />
                  </motion.div>
                ))}

                <Card className="shadow-romantic bg-card/95 backdrop-blur">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <h2 className="text-3xl font-dancing font-bold text-primary mb-6">
                        A Video Message For You
                      </h2>
                      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                        <p className="text-muted-foreground font-poppins">
                          [Video player placeholder - Add your personal video message here]
                        </p>
                      </div>
                      <p className="mt-6 text-foreground font-poppins italic">
                        "Every moment with you is a gift. This website is just a small way to show how much you mean to me."
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Gift;
