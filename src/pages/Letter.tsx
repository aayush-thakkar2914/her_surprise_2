import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Heart, Pause, Play, FastForward } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const letterText = `My Dearest Cutu Bachaa,

So this is one of the most important part of my surprise. This letter means a lot to me like In this letter I am going to note down every single and the most important things om my love life with you. From the day I have met you my bachaa my life my love, I have got all the happiness of my life. Every single morning I open up my eyes and thank the god for gifting you to me. I still remember the night we spoke for the first time like the message I did and your reply was Acha aesa, yes we can. And that long 4 hour chat that night like we got to knew so much about each other. Like I think that night only you fell for me as you mentioned like tum kitna tension mai aa gai thi when I was not available then jo data padi thi mujhe like pagal ho kyaa ek mssg nahi kar sakte. And I was like on the mood of flirting UMMhmm like itna yad aane lagi. Ek raat mai Aayush ki aadat lag gai. You were also chalak like Ahnn nahh yeh toh bas tension ho rahi like not accepting ki haan thoda sa toh pyaar ho gaya hai apko mujhse haina khushu jii

Then our talk and chat started it got into some speed the morning started with our talk and the night ended with my good night, like haan who baat hai pehle aap sote nahi the jaldi pata nahi raat ko konsa kdrama dekhte the but yes soon and steadily and gradualy maine tumne aadat daal di like ki ab merii bachaa mere sath uthegi and ham sath mai soyenge. Even sometime your family might be wondering how our nakhra wali khushu got changed. But yes soon they gonna realise the only whole and sole reason of the change is apki khushu ka pyar uska bubu. Then on the shadi day mummy gonna thank me thanks jamai raja apne hamari khushu ko sudhar diyaa. Hahha kitna pyara moment hoga naa haina bachaa but yeah Every moment we spent even before our official relationship started before the proposal it was soo soo soo precious for me and I gonna thank the god each and everyday for those moments.

Then we became best friends like I asked you proposed you earlier but my bachaa needed time. We gave each other cute nicknames, It started with BOBO then BOBU then BABY then BOBUDA then BUBU then BUBUDA and so many more like every name means so special for me these special names from your mouth the way you call me it feels so special my lioness my bachaa. So the phase of best friend ship was also so great and amazing like I sent you the first snap as I was so shy jiske karan maine kaand bhi kiya tha chotu sa notu saa but yeah thanks for forgivinh me on that. Yk I still remember what you said after the kaand  and jab maine sare snaps unsave kar diye the toh you said are pglu mujhe who snap toh save karne dete mere pass ek bhi aesa snap nahi tha 🤣🤣. I was like yeh bandi yeh bachaa ab meri hi hai isko mai kahi nahi jane deing. I have got the love of my life.  And I never wanna loose my bachaa bcoz I have started loving her so much and I always gonna love her the most in the world.

Then comes the time you proposed me, like haan even I can feel that like you waited so long ki bobo propose Karega ab toh jaldi Karega but nahh  bobo ki toh fatt rahi thi but yes myyy bachaa proposed her BOBO. The words "I love you Aayush" . 2 min ke liye toh I was shocked and in thought ki She really proposed me, chimti kaati khudko ki haan itni raat ho gayi hai but I am not seeing sapna yes BOBO you did it your bachaa is finally yours officially. That night was the most precious beautiful night of my life. The most perfect decision of my life was to say yes to you merii bachaa. I lovee you dher sara merii bachaa my lioness ❤️🫂.

So from the day we met to today when the day you are reading this for the first time and even on the day you are reading this again as I said in the clue this surprise gonna last forever isse kuch nahi hone wala its always gonnaa stay with you and forever with you. So today I promise meri bachaa ko I will always be with my  bachaa forever and ever and always gonna love her as more and more every day. 

Loveee you dher sara merii bacha merii lioness 🫂❤️💖🥹
Your loving and only tumhara one and only
BOBO ❤️❤️❤️❤️
`;

const Letter = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!isPaused && !isComplete && currentIndex < letterText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + letterText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 30);
      return () => clearTimeout(timeout);
    }
    
    if (currentIndex >= letterText.length) {
      setIsComplete(true);
    }
  }, [currentIndex, isPaused, isComplete]);

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleShowFull = () => {
    setDisplayedText(letterText);
    setCurrentIndex(letterText.length);
    setIsComplete(true);
    setIsPaused(false);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 gradient-dreamy">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto max-w-3xl"
      >
        <div className="text-center mb-12">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block mb-4"
          >
            <Heart className="fill-primary text-primary" size={48} />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-dancing font-bold text-primary mb-4"
          >
            A Letter From My Heart
          </motion.h1>
        </div>

        {!isComplete && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center gap-4 mb-8"
          >
            <Button
              onClick={handlePauseResume}
              className="bg-primary hover:bg-primary/90 text-white shadow-romantic hover:shadow-glow transition-smooth"
            >
              {isPaused ? (
                <>
                  <Play className="mr-2" size={18} />
                  Resume
                </>
              ) : (
                <>
                  <Pause className="mr-2" size={18} />
                  Pause
                </>
              )}
            </Button>
            <Button
              onClick={handleShowFull}
              className="bg-secondary hover:bg-secondary/90 text-white shadow-romantic hover:shadow-glow transition-smooth"
            >
              <FastForward className="mr-2" size={18} />
              Show Full Letter
            </Button>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card className="shadow-romantic bg-card/95 backdrop-blur border-2 border-primary/20">
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground font-poppins whitespace-pre-wrap leading-relaxed text-base md:text-lg">
                  {displayedText}
                  {!isComplete && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="text-primary"
                    >
                      |
                    </motion.span>
                  )}
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Letter;