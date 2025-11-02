import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const VirtualDatesGallery = () => {
  const dates = [
    {
      img: "/virtualdates/date3.jpg",
      quote: "Distance means nothing when you mean everything",
      message: "Our virtual movie nights are my favorite 🎬",
    },
    {
      img: "/virtualdates/date1.jpg",
      quote: "Miles apart but close at heart",
      message: "Every video call brings us closer 💻❤️",
    },
    {
      img: "/virtualdates/date4.jpg",
      quote: "Love knows no distance",
      message: "Your voice makes everything better 🎧",
    },
    {
      img: "/virtualdates/date2.jpg",
      quote: "Together in spirit, always",
      message: "Can't wait for our next virtual date 📱",
    },
    {
      img: "/virtualdates/date5.jpg",
      quote: "Technology brings hearts together",
      message: "Seeing your face lights up my screen and my heart 💫",
    },
    {
      img: "/virtualdates/date6.jpg",
      quote: "Worth every pixel",
      message: "Distance is temporary, our love is forever 🌍💕",
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
            Virtual Dates 💻❤️
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-muted-foreground font-poppins"
          >
            Distance couldn’t keep us apart
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dates.map((date, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <Card className="shadow-romantic hover:shadow-glow transition-smooth bg-card/90 backdrop-blur overflow-hidden">
                {/* Replace video icon with your real photo */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={date.img}
                    alt={`virtual-date-${index + 1}`}
                    className="w-full h-full object-cover rounded-t-2xl hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <CardContent className="p-6">
                  <p className="text-xl font-dancing font-bold text-primary mb-3 text-center">
                    "{date.quote}"
                  </p>
                  <p className="text-muted-foreground font-poppins text-sm text-center">
                    {date.message}
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
          
        </motion.div>
      </motion.div>
    </div>
  );
};

export default VirtualDatesGallery;
