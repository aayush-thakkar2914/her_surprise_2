import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PhotosGallery = () => {
  const photos = [
    {
      img: "/photos/photo1.jpg",
      quote: "Every moment with you is a treasure",
      message: "Your smile lights up my entire world 💕",
    },
    {
      img: "/photos/photo2.jpg",
      quote: "In your eyes, I found my home",
      message: "You make every day feel like magic ✨",
    },
    {
      img: "/photos/photo3.jpg",
      quote: "Together is my favorite place to be",
      message: "With you, every moment becomes a memory 📸",
    },
    {
      img: "/photos/photo4.jpg",
      quote: "You are my greatest adventure",
      message: "Your laughter is my favorite sound 🎵",
    },
    {
      img: "/photos/photo5.jpg",
      quote: "Forever grateful for you",
      message: "You make ordinary moments extraordinary 🌟",
    },
    {
      img: "/photos/photo6.jpg",
      quote: "My heart chose you",
      message: "And it was the best decision ever made 💝",
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
            Photos Together 📸
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-muted-foreground font-poppins"
          >
            Captured memories of our beautiful moments
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <Card className="shadow-romantic hover:shadow-glow transition-smooth bg-card/90 backdrop-blur overflow-hidden">
                {/* --- Replace heart with your real photo --- */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={photo.img}
                    alt={`photo-${index + 1}`}
                    className="w-full h-full object-cover rounded-t-2xl hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <CardContent className="p-6">
                  <p className="text-xl font-dancing font-bold text-primary mb-3 text-center">
                    "{photo.quote}"
                  </p>
                  <p className="text-muted-foreground font-poppins text-sm text-center">
                    {photo.message}
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

export default PhotosGallery;
