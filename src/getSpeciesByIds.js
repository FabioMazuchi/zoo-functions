const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return data.species.filter((specie) => specie.id === ids[0] || specie.id === ids[1]);
}

module.exports = getSpeciesByIds;
