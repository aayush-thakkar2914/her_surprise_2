import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Music, Music2, Home, Calendar, Mail, Gift, Camera, Sparkles, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";

const Navigation = () => {
  const location = useLocation();
  const [musicPlaying, setMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      if (musicPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [musicPlaying]);

  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/reasons", icon: Heart, label: "100 Reasons" },
    { path: "/timeline", icon: Calendar, label: "Timeline" },
    { path: "/letter", icon: Mail, label: "Love Letter" },
    { path: "/gift", icon: Gift, label: "Gift Box" },
    { path: "/moments", icon: Camera, label: "Moments" },
    { path: "/cuteness", icon: Sparkles, label: "Cuteness" },
    { path: "/dreams", icon: Cloud, label: "Our Dreams" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border shadow-romantic"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/">
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart className="fill-primary text-primary animate-heart-beat" size={28} />
              <span className="text-xl font-dancing font-bold text-primary">For My Bachaa</span>
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`transition-smooth ${
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-primary/5 hover:text-primary"
                    }`}
                  >
                    <Icon size={16} className="mr-1.5" />
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMusicPlaying(!musicPlaying)}
            className="hover:bg-primary/10 hover:text-primary transition-smooth relative"
          >
            {musicPlaying ? (
              <Music2 className="animate-pulse" size={20} />
            ) : (
              <>
                <Music size={20} className="opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-0.5 bg-current rotate-45" />
                </div>
              </>
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-start gap-1 mt-3 overflow-x-auto pb-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link key={item.path} to={item.path}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`transition-smooth whitespace-nowrap ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-primary/5 hover:text-primary"
                  }`}
                >
                  <Icon size={14} className="mr-1" />
                  {item.label}
                </Button>
              </Link>
            );
          })}
        </div>
      </div>
      
      <audio ref={audioRef} loop preload="auto">
        <source src="/background-music.mp3" type="audio/mpeg" />
      </audio>
    </motion.nav>
  );
};

export default Navigation;
