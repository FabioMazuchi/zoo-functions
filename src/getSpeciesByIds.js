const data = require('../data/zoo_data');

function getSpeciesByIds(ids) {
  return data.species.map((specie) => specie.id === ids);
}

module.exports = getSpeciesByIds;
