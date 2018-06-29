class Fighter {
    constructor(name, stats) {
        this.name = name;
        this.stats = stats;
        this.health = stats.maxHealth;
        this.alive = true;
        // TODO: add more stuff here as the game gets bigger
    }
    die() {
        this.alive = false;
    }
    damage(amount) {
        this.health -= amount;
        if(this.health <= 0) {
            this.health = 0;
            this.die()
        }
    }
}
module.exports = Fighter;