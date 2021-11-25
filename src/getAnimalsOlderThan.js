const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species
    .filter((specie) => specie.name === animal)[0]
    .residents.every((select) => select.age > age);
}

module.exports = getAnimalsOlderThan;
