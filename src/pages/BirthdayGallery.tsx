import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

const BirthdayGallery = () => {
  const celebrations = [
    {
      image: "/bday/bday1.jpg",
      quote: "I always want to make your every day special as much as you aare my bachaa ❤️",
      message: "11th March 2002 your birthday a day when earth got a beautiful princess a cute bachaa of mine.",
    },
    {
      image: "/bday/bday2.jpg",
      quote: "Even having a cupcake tastes like having the most seetest dish of the world as I have my bachaa with me who is the sweetest person of the world😘🥹",
      message: "Thanks to your mummy and papa for bringing mera sweet bacha in this world my baby I always gonna be grateful to them and the god as they gifted me you 💖🫂",
    },
    {
      image: "/bday/bday3.jpg",
      quote: "Cheers to my bachaa turning 23 that day and night was the most sweetest night my bachaa",
      message: "My bachaa turned 23 she was lookng like a jalpari in that white dress and the most cute thing she had with herself was that bracelet as her bobu gifted her that cheers to many more lovely year and bday celebration of us merii bachaa 😘🥳",
    },
    {
      image: "/bday/bday4.jpg",
      quote: "My bachaa made my day special with those pyare se gift that mug and the shirt 🥹🫂❤️",
      message: "Meri bachaa yk this was the first time someone gifted me something in the past few years like from the many years my  bday was like no fun no gifts just haan bday hai kyaa ho gaya but this was the bday you made me feel special and even I had tears then as well as while writing this, that mug and shirt meant a life for me meri bachaa Lovee you dher saraa merii bachudii ❤️🫂🥹",
    },
    {
      image: "/bday/bday5.jpg",
      quote: "You make life worth celebrating",
      message: "Happy birthday to my everything 💝",
    },
    {
      image: "/bday/bday6.jpg",
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
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-smooth mb-8"
        >
          <ArrowLeft size={20} />
          <span className="font-poppins">Back to Moments</span>
        </button>

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
                <div className="aspect-square bg-gradient-to-br from-secondary/30 to-accent/20 flex items-center justify-center overflow-hidden">
                  <img
                    src={celebration.image}
                    alt={celebration.quote}
                    className="w-full h-full object-contain"
                  />
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
      </motion.div>
    </div>
  );
};

export default BirthdayGallery;