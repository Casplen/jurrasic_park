const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let tRex;
  let stegosaurus;
  let dinosaurs;

  beforeEach(function () {
    tRex = new Dinosaur('t-rex', 'carnivore', 50);
    stegosaurus = new Dinosaur("stegosaurus", "herbivore", 40);
    dinosaurs = [tRex, stegosaurus];
    park = new Park ("Jurrassic Park", 100, dinosaurs);

  })

  it('should have a name', function(){
    assert.strictEqual(park.name, "Jurrassic Park")
  });

  it('should have a ticket price', function(){
    assert.strictEqual(park.ticketPrice, 100)
  });

  it('should have a collection of dinosaurs', function(){
    assert.strictEqual(park.dinosaurCount(), 2)
  });

  it('should be able to add a dinosaur to its collection', function(){
    let apatosaurus = new Dinosaur("apatosaurus", "herbivore", 50)
    park.addDinosaur(apatosaurus)
    assert.strictEqual(park.dinosaurCount(), 3)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinosaur("t-rex")
    assert.strictEqual(park.dinosaurCount(), 1)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    assert.strictEqual(park.mostPopular(), "t-rex")
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    foundDinosaurs = [tRex]
    assert.deepStrictEqual(park.findBySpecies("t-rex"), foundDinosaurs)
  });

  it('should be able to calculate the total number of visitors per day', function(){
    assert.strictEqual(park.visitorsAttractedPerDay(), 90)
  });

  it('should be able to calculate the total number of visitors per year', function(){
    assert.strictEqual(park.visitorsAttractedPerYear(), 32850)
  });

  it('should be able to calculate total revenue for one year', function(){
    assert.strictEqual(park.yearlyRevenue(), 3285000)
  });

});
