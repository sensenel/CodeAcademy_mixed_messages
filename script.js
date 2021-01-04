"use strict";

const cooKieOutput = {
    signs: [
         { positiv: ["Sun", "Andromeda", "Butterfly"]
         },
         { negativ: ["Moon", "Mars", "SuperNova"]
         },
         { neutral:  ["Worm", "Beteigeuze", "giggling Star"]
         }
   ],
    fortunes: [
         { positiv: ["good luck", "happiness", "kingsize fortune"],
         },
         { negativ: ["bad times", "tremendous trouble", "nearby danger"]

         },
         { neutral: ["huge changes", "lost in faith", "long lasting sexual pleasure"] 
         } 
      ],
    advices: [
         { positiv: ["have fun!", "let you go", "hug someone!"]
         },
         { negativ: ["trust no one", "run away!", "hide!"]
         },
         { neutral: ["trust live", "trust the person next to you", "think about live"]
         }
      ],
     pullSpell () {
        let dice = (arr) => {
            return Math.floor(Math.random() * arr.length);
        }
        let signObjs = this.signs[dice(this.signs)],
        signProp = [],
        sign = '',
        fortune = '',
        advice = '';
        for (let prop in signObjs) {
           signProp = prop;
           let signIndex = dice(signObjs[prop]); 
           sign = signObjs[prop][signIndex];
        }
        switch(signProp) {
           case "positiv" :   fortune = this.fortunes[0].positiv[dice(this.fortunes[0].positiv)]; 
                              advice = this.advices[0].positiv[dice(this.advices[0].positiv)];
           break;
           case "negativ" :   fortune = this.fortunes[1].negativ[dice(this.fortunes[1].negativ)];
                              advice = this.advices[1].negativ[dice(this.advices[1].negativ)];
           break;
           case "neutral" :   fortune = this.fortunes[2].neutral[dice(this.fortunes[2].neutral)]; 
                              advice = this.advices[2].neutral[dice(this.advices[2].neutral)];
           break;
           default: fortune = 'error'; advice = 'error';
           break;
        }

        console.log('\n############## ------------- ############### \n');
        console.log(`Your sign is ${sign} \n`);
        console.log(`You are having ${fortune} \n`);
        console.log(`You should ${advice} \n`);
        console.log('############## ------------- ###############\n');
     }
}

cooKieOutput.pullSpell();

//console.log(cooKieOutput.signs[0].positiv);