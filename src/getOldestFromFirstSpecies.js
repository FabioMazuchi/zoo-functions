const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const response = data.employees.find((emplo) => emplo.id === id).responsibleFor[0];
  const residentes = data.species.find((especie) => especie.id === response).residents;
  const velho = residentes.reduce((maisVelho, res) => maisVelho.age < res.age ? res : maisVelho);
  return [velho.name, velho.sex, velho.age];
}

module.exports = getOldestFromFirstSpecies;
