"use strict";

const cooKieOutput = {
    signs: ["Sun", "Moon", "Mars", "Andromeda", "Beteigeuze", "Butterfly", "Worm", "SuperNova", "giggling Star"],
    fortunes: ["good luck", "bad times", "huge changes", "lost in faith", "nearby danger", "long lasting sexual pleasure"],
    advice: ["trust no one", "trust live", "trust the person next to you", "run away!", "calm down", "let you go", "think about live", "have fun!"],
     pullSpell () {
        console.log('\n############## ------------- ############### \n');
        console.log(`Your sign is ${this.signs[Math.floor(Math.random() * this.signs.length)]} \n`);
        console.log(`You are having ${this.fortunes[Math.floor(Math.random() * this.fortunes.length)]} \n`);
        console.log(`You should ${this.advice[Math.floor(Math.random() * this.advice.length)]} \n`);
        console.log('############## ------------- ###############\n');
     }
}

cooKieOutput.pullSpell();
