const Dinosaur = require('./dinosaur.js');

const Park = function (name, ticketPrice, dinosaurs) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = dinosaurs;
}

Park.prototype.dinosaurCount = function(){
    return this.dinosaurs.length
}

Park.prototype.addDinosaur = function(dinosaur){
    this.dinosaurs.push(dinosaur)
}

Park.prototype.removeDinosaur = function(dinosaur){
    dinosaurIndex = this.dinosaurs.indexOf(dinosaur)
    this.dinosaurs.splice(dinosaurIndex, 1)
}

Park.prototype.mostPopular = function(){
    let mostPopular = new Dinosaur(null, null, 0)

    for (let dinosaur of this.dinosaurs) {
        if (dinosaur.guestsAttractedPerDay > mostPopular.guestsAttractedPerDay) {
            mostPopular = dinosaur
        }
    }
    return mostPopular.species
}

Park.prototype.findBySpecies = function(species){
    const foundDinosaurs = []

    for (let dinosaur of this.dinosaurs) {
        if (dinosaur.species === species) {
            foundDinosaurs.push(dinosaur)
        }
    }
    return foundDinosaurs
}

Park.prototype.visitorsAttractedPerDay = function(){
    let visitors = 0

    for (let dinosaur of this.dinosaurs) {
        visitors += dinosaur.guestsAttractedPerDay
    }
    return visitors
}

Park.prototype.visitorsAttractedPerYear = function(){
    return this.visitorsAttractedPerDay() * 365
}

Park.prototype.yearlyRevenue = function(){
    return this.visitorsAttractedPerYear() * this.ticketPrice
}

module.exports = Park;