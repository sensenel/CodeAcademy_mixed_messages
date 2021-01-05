"use strict";

const cooKieOutput = {
    signs: [
         { positiv: ["Sun", "Andromeda", "Butterfly", "Meerkat", "Lion"]
         },
         { negativ: ["Moon", "Mars", "SuperNova", "Feuermelder-Face", "Cook Pu"]
         },
         { neutral:  ["Worm", "Beteigeuze", "giggling Star", "Temper Beige", "Swiss coati"]
         }
   ],
    fortunes: [
         { positiv: ["good luck", "happiness", "kingsize fortune", "mo' money!", "everything!"],
         },
         { negativ: ["bad times", "tremendous trouble", "nearby danger", "spreading darkness", " ... no, too late!"]

         },
         { neutral: ["huge changes", "lost in faith", "long lasting sexual pleasure", "bizarre thoughts", "times where you'll ... oh! a squirrel!!"] 
         } 
      ],
    advices: [
         { positiv: ["have fun!", "let you go", "hug someone!", "buy yourself some cool stuff!", "party hard!"]
         },
         { negativ: ["trust no one", "run away!", "hide!", "fight the good fight!", "surrender"]
         },
         { neutral: ["trust live", "trust the person next to you", "think about live", "discuss boring issues", "maybe, do this ... or that, best both"]
         }
      ],
     pullSpell () {
        let dice = (arr, obj = false) => {
           if(obj) {
              return arr[Math.floor(Math.random() * arr.length)];

           } else {
            return Math.floor(Math.random() * arr.length);
           }
        }
        let signObjs = this.signs[dice(this.signs)],
        signProp = '',
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