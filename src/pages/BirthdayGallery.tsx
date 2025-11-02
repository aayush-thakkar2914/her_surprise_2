import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Cake, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const BirthdayGallery = () => {
  const celebrations = [
    {
      quote: "Making your day as special as you are",
      message: "Every birthday with you is a blessing 🎂",
    },
    {
      quote: "Celebrating the gift of you",
      message: "You deserve all the happiness in the world 🎁",
    },
    {
      quote: "Another year of loving you",
      message: "Here's to many more birthdays together 🎈",
    },
    {
      quote: "Your special day, our special moment",
      message: "Making memories that last forever 🎉",
    },
    {
      quote: "You make life worth celebrating",
      message: "Happy birthday to my everything 💝",
    },
    {
      quote: "Age is just a number, love is timeless",
      message: "Growing older together, falling deeper in love 🌹",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 gradient-sunset">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto max-w-6xl"
      >
        <Link
          to="/moments"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-smooth mb-8"
        >
          <ArrowLeft size={20} />
          <span className="font-poppins">Back to Moments</span>
        </Link>

        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-dancing font-bold text-primary mb-4"
          >
            Birthday Celebration 🎂
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-muted-foreground font-poppins"
          >
            Making every celebration special
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {celebrations.map((celebration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <Card className="shadow-romantic hover:shadow-glow transition-smooth bg-card/90 backdrop-blur overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-secondary/30 to-accent/20 flex items-center justify-center">
                  <Cake className="text-primary" size={64} />
                </div>
                <CardContent className="p-6">
                  <p className="text-xl font-dancing font-bold text-primary mb-3 text-center">
                    "{celebration.quote}"
                  </p>
                  <p className="text-muted-foreground font-poppins text-sm text-center">
                    {celebration.message}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground font-poppins italic">
            [Add birthday celebration photos here] 🎉💕
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BirthdayGallery;
