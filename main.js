const duel = require("./duel.js");
const fighter = require("./fighter.js");

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateFighter(name) {
    let maxHealth = getRandomInt(200, 301);
    let strength = getRandomInt(2, 7);
    return new fighter(name, {maxHealth: maxHealth, strength: strength});
}

fighter1 = generateFighter("Fighter 1")
fighter2 = generateFighter("Fighter 2")

theDuel = new duel([fighter1, fighter2])
theDuel.start()
let delay = setTimeout(_=> {
    let ticker = setInterval(_=>{theDuel.tick()}, 1000)
}, 5000)
