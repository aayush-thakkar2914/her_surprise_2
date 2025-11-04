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
  "The way you say \"bobuu\" with that cute tone itna sweet lagta hai, like pure love wrapped in one word. My heart literally melts every single time, my bachaa",
  "When you get possessive and say \"tum sirf mere ho\" — uff my lioness, that's the most adorable and hottest thing ever. I love your little jealous looks, meri jaan.",
  "Jab tum gussa hoing and muh banaing and that pout wala gussa its so cutu merii bachudii yk kabhi kabhi toh woh dekhne ke liye tumhe mai pareshan karta hu",
  "The way you laugh at my stupid jokes, even the ones that make no sense meri bachaa, that laugh is therapy to my soul.",
  "The way you share everything with me har choti baat tum batati ho every single updates it makes me so happy merii bachaa.",
  "The way you care for me when I'm upset jaise tum khud hurt ho gayi ho. That's my bachaa, meri emotional healer.",
  "Your voice, meri jaan, so soft, so loving everytime I listen toh mann karta hai bas sunte hi rahu.",
  "When you motivate me by saying \"mera bobu sabse best hai\", I feel mein kuch bhi kar sakta hu, bas meri bachaa mere saath ho.",
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
  "The way you understand my silence, jab main kuch nahi bolta but meri bachaa samajh jaati hai ki bobu ko kya chahiye, that's pure love.",
  "The way you get excited like a baby jab main tumhe surprise deta hu, that excitement in your eyes meri jaan is priceless. Like this surprise you were like bobu please 🤣",
  "Your cute angry face when I tease you, uff that angry lioness look so cutu lagta hai and at that time I just want to hug you tight.",
  "The way you worry about me, bobu ne khana khaya ya nahi, bobu theek hai ya nahi, these small things show how much you care baby.",
  "The way you remember small details about me jo main khud bhul jata hu, that shows how attentive my bachaa is.",
  "YOur cooking like meri bachaa is so swwet meri mummy kobhi yeh reason bohot pasand aayega meri bachaa sab ke liye kitne pyaar se khana banaingg wahh ekdam sanskari wifey hai meri",
  "The way you make me feel special, jaise main duniya ka sabse important person hu, that feeling is everything to me.",
  "Your efforts to make me feel close even when we're miles apart, video calls texts voice notes sab kuch karke bhi meri bachaa i always feel like we are always beside each other.",
  "The way you send me pictures of everything, 'bobu ye dekho' 'bobu main ye kar rahi hu', making me feel like I'm there with you.",
  "The way you keep our connection alive despite the distance, efforts lagatar karte rehti ho to keep us strong baby.",
  "The way you count days until we meet, 'bobu aur kitne din' that excitement in your voice makes the wait worth it baby.",
  "The way you trust me completely despite the distance, dur hoke bhi meri bachaa ka trust ubreakable hai and that's everything baby.",
  "The way you miss me, 'bobu kab miloge' 'bobu I miss you' these texts make me miss you even more bachaa.",
  "The way you make me laugh, even on my worst days meri bachaa has ke mere mood ko theek kar deti hai.",
  "Your voice notes, especially lambe wale jisme sab kuch detail mei batati ho, I listen to them on repeat baby.",
  "The way you appreciate small gestures, choti si cheez bhi main karu and meri bachaa itni khush ho jaati hai.",
  "The way you look in traditional wear, uff bachaa jab traditional pehenti ho you look like a goddess meri wifey seriously.",
  "Your cute complaints, 'bobu aaj theek se baat hi nahi hui' 'bobu tumse kaati hu' even complaints cute lagti hai meri jaan.",
  "Your loyalty and commitment, in this world where everything is temporary tumhara constant love is my safe place.",
  "Your presence in my life, simply having you meri bachaa as my partner my love my everything is the biggest reason to love you forever and beyond.",
  "Your random mood swings, one minute happy next minute gussa then pyaar but that's what makes you real and I love every mood baby.",
  "Your natural beauty, bina makeup ke bhi meri bachaa kitni khoobsurat lagti hai, that raw beauty is unmatched.",
  "The way you look in my black/white/red, jab specially mere liye wo color pehenti ho you look absolutely stunning bachaa.",
  "Your getting ready video, jab ready hote hue video bheja tha na navratri mai uff haaye I was just in awe of how beautiful my baby my bachaa my wifeyy is.",
  "The way you look in candid photos which is screenshots which i take duricng vc, unplanned unexpected clicks mei bhi my bachaa looks absolutely gorgeous.",
  "Your perfect features, nose lips jawline everything is so perfectly beautiful like God took extra time creating you baby.",
  "Your style sense, jo bhi pehenti ho traditional western anything you make everything look good on you bachaa.",
  "The way you look after our workout 🌚, even sweaty and tired meri lioness looks so attractive that determination and love shows on face.",
  "The way you look when you wake up, messy hair sleepy face meri bachaa looks so naturally beautiful in the morning.",
  "Your fitness like meri bachaa is so fit and I promise meri bachaa ka bobu bhi jaldi utna fit ho jayega jesa meri baby want ❤️",
  "Your beautiful eyes, meri bachaa ki aankhein itni expressive hai ki bina bole hi sab samajh aata hai, absolutely mesmerizing.",
  "Those special suprising snaps which meri bachaa tum mujhe bhejti ho like that beauty of yours don't have words with which i can express likne bethunga yeh card kam pad jaing."
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
                <Card className="h-48 md:h-52 shadow-soft hover:shadow-romantic transition-smooth bg-card/90 backdrop-blur">
                  <CardContent className="h-full flex items-center justify-center p-3 md:p-4">
                    {isFlipped ? (
                      <motion.div
                        initial={{ opacity: 0, rotateY: 90 }}
                        animate={{ opacity: 1, rotateY: 0 }}
                        transition={{ duration: 0.4 }}
                        className="w-full h-full overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent"
                      >
                        <p className="text-xs md:text-sm text-center text-foreground font-poppins leading-relaxed">
                          {reason}
                        </p>
                      </motion.div>
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