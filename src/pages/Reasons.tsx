import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";

const reasons = [
  "The way you smile makes my day brighter and most happiest of all time. Your smile is the sweetest.",
  "The way you handle me, Bobu kitne bhi bakwas kare galti kare uski bachaa usse hamesha handle kar legi.",
  "Your bold sharp eyes jiss mai mein hamesha kho jata hu dub jata hu uff my bachaa I love them",
  "Your careful nature like bobu ki care sabse pehle meri bacha karegi, like meri bacha ki care ke bina toh bobu din bhar kuch na kuch kaand karta rahega haina 🤣",
  "YOur trust in me like bobu kuch bhi bobu ruth jaye gussa kare irritate ho jaye kabhi but meri bachaa trust me ki uska bobu uska hi hai Lovee you dher sara merii bacha",
  "The way you say “bobuu” with that cute tone itna sweet lagta hai, like pure love wrapped in one word. My heart literally melts every single time, my bachaa",
  "When you get possessive and say “tum sirf mere ho” — uff my lioness, that’s the most adorable and hottest thing ever. I love your little jealous looks, meri jaan.",
  "Jab tum gussa hoing and muh banaing and that pout wala gussa its so cutu merii bachudii yk kabhi kabhi toh woh dekhne ke liye tumhe mai pareshan karta hu",
  "The way you laugh at my stupid jokes, even the ones that make no sense meri bachaa, that laugh is therapy to my soul.",
  "The way you share everything with me har choti baat tum batati ho every single updates it makes me so happy merii bachaa.",
  "The way you care for me when I’m upset jaise tum khud hurt ho gayi ho. That’s my bachaa, meri emotional healer.",
  "Your voice, meri jaan, so soft, so loving everytime I listen toh mann karta hai bas sunte hi rahu.",
  "When you motivate me by saying “mera bobu sabse best hai”, I feel mein kuch bhi kar sakta hu, bas meri bachaa mere saath ho.",
  "The way you hug me like I still remember the first time we hugged it gave me all the happiness of the world it was so warming and lovely hug",
  "Your touch makes me feel so good it gives me the confidence of the love you have for me",
  "The way you listen to my bak bak like kitni bhi boring interesting ho kesi bhi ho you listen to them ccarefully and makes me fell so important",
  "The way you believe in God and pray for us to god, the fasts and the prayers you do for us it makes me feel so emotional",
  "Your cute snaps like everyday I see you in the morning and before sleeping I get the worlds best happiness",
  "Your smile, the way you smile seeing me the way you become happy from the day we are together its just mesmerizing meri bachaa",
  "The way you move handss in my hair as I always told you how much I love that and you always take care of that Lovee you meri baachaa",
  "The way you send me random texts and snaps while I am sad and make me feel relaxed, those efforts really means to me and makes me so happy",
  "The way you say sorry and apologies even mai masti mai bhi gussa huva ho but those texts and snaps become so cute part of my life",
  "The way you never step back for us like koi bhi ho bubu is sabse imp usse kuch nahi hona chahiye",
  "The efforts you always put for making our meet possible bhale kitne bhi problem ho bubu ko milna is most important",
  "Your loyality, like this is most lovely thing you are always loyal to me koi bhi ladka ho you never talks to him and sorry foe all the female frnds I had till now",
  "Your sleepy voice uff hayy like I die for that itna cutu voice note hota hai na every morning I cant tell",
  "Your sleepy eyes uff those snaps in the morning ankhe khuli ho ya bandh meri bacha subah subah looks so cutu ummmahhh",
  
  
  // Add 90 more reasons - keeping it shorter for now
  // ...Array.from({ length: 90 }, (_, i) => `Reason #${i + 11}: Every little thing about you is perfect`),
];

const Reasons = () => {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const toggleCard = (index: number) => {
    const newFlipped = new Set(flippedCards);
    if (newFlipped.has(index)) {
      newFlipped.delete(index);
    } else {
      newFlipped.add(index);
    }
    setFlippedCards(newFlipped);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 gradient-dreamy">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto max-w-6xl"
      >
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-dancing font-bold text-primary mb-4"
          >
            100 Reasons Why I Love You
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-muted-foreground font-poppins"
          >
            Click each card to reveal a reason 💖
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {reasons.map((reason, index) => {
            const isFlipped = flippedCards.has(index);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.02 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => toggleCard(index)}
                className="cursor-pointer"
              >
                <Card className="h-40 shadow-soft hover:shadow-romantic transition-smooth bg-card/90 backdrop-blur">
                  <CardContent className="h-full flex items-center justify-center p-4">
                    {isFlipped ? (
                      <motion.p
                        initial={{ opacity: 0, rotateY: 90 }}
                        animate={{ opacity: 1, rotateY: 0 }}
                        transition={{ duration: 0.4 }}
                        className="text-sm text-center text-foreground font-poppins"
                      >
                        {reason}
                      </motion.p>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center"
                      >
                        <Heart
                          className="fill-primary text-primary mx-auto mb-2 animate-heart-beat"
                          size={32}
                        />
                        <p className="text-primary font-dancing font-semibold text-lg">
                          {index + 1}
                        </p>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default Reasons;
