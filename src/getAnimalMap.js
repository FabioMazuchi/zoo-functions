const data = require("../data/zoo_data");
// TODO

const addLocalSpecie = (local) => {
  const array = [];
  return data.species
    .filter((specie) => specie.location === local)
    .reduce((acc, spec) => {
      array.push(spec.name);
      acc[local] = array;
      return acc;
    }, {});
};}

function getAnimalMap(options) {}

module.exports = getAnimalMap;
