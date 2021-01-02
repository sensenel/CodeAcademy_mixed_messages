"use strict";

const cooKieOutput = {
    savedSpells: [],
    possibleSpells: ["Nothing is as easy as it looks.",
     "Everything takes longer than you think.", "Anything that can go wrong will go wrong.",
     "If there is a possibility of several things going wrong, the one that will cause the most damage will be the one to go wrong.",
     "If there is a worse time for something to go wrong, it will happen then.",
     "If anything simply cannot go wrong, it will anyway.",
     "If you perceive that there are four possible ways in which a procedure can go wrong, and circumvent these, then a fifth way, unprepared for, will promptly develop.",
     "Left to themselves, things tend to go from bad to worse.",
     "If everything seems to be going well, you have obviously overlooked something.",
     "Nature always sides with the hidden flaw.",
     "Mother nature is a bitch.",
     "It is impossible to make anything foolproof because fools are so ingenious.",
     "haha, just kidding"],
     pullSpell () {
         let num = Math.floor(Math.random() * this.possibleSpells.length),
         token = this.possibleSpells[num];
         console.log("---- " + token +  " ----");
         this.savedSpells.push(token);
     },
     delSavedSpells () {
         this.savedSpells = [];
         console.log(this.savedSpells);
     },
     outputSaved () {
         this.savedSpells.forEach(spell => {
            console.log(spell);
         });
     }
}

cooKieOutput.pullSpell();
cooKieOutput.outputSaved();
//cooKieOutput.delSavedSpells();
