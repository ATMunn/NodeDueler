class Duel {
    constructor(fighters, mode="normal") {
        if(fighters.length != 2) {
            console.error("Duel must have 2 fighters");
        } 
        else {
            this.fighter1 = fighters[0];
            this.fighter2 = fighters[1];
        }
        this.mode = mode;
        this.started = false;
        this.winner = "";
    }
    start() {
        this.started = true;
        console.log("Starting!")
        let str1 = this.fighter1.stats.strength, 
            str2 = this.fighter2.stats.strength, 
            hlt1 = this.fighter1.stats.maxHealth,
            hlt2 = this.fighter2.stats.maxHealth;
        console.log(`Fighter 1 stats:\nStrength: ${str1}\nMax health: ${hlt1}\n`);
        console.log(`Fighter 2 stats:\nStrength: ${str2}\nMax health: ${hlt2}\n`);
    }
    end() {
        this.started = false;
        console.log("Duel over! Winner: " + this.winner);
        process.exit();
    }
    tick() {
        if(this.started) {
            let f1dmg = (this.fighter2.stats.strength * Math.ceil(Math.random() * 10));
            let f2dmg = (this.fighter1.stats.strength * Math.ceil(Math.random() * 10));
            this.fighter1.damage(f1dmg);
            this.fighter2.damage(f2dmg);
            console.log(`Fighter 1 dealt ${f1dmg} damage to Fighter 2`);
            console.log(`Fighter 2 dealt ${f2dmg} damage to Fighter 1`);
            let f1 = this.fighter1.health, 
                f2 = this.fighter2.health;
            console.log(`Fighter health: F1 ${f1}|${f2} F2\n`);
            if(this.fighter1.alive == false || this.fighter2.alive == false) {
                this.winner = (this.fighter1.alive?this.fighter1.name:this.fighter2.name);
                this.end();
            }
        }
    }
}
module.exports = Duel;