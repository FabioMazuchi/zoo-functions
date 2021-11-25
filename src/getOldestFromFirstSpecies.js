const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const res = [];
  const response = data.employees.find((emplo) => emplo.id === id).responsibleFor[0];
  const residentes = data.species.find((especie) => especie.id === response).residents;
  const velho = residentes.sort((a, b) => b.age - a.age)[0];
  res.push(velho.name);
  res.push(velho.sex);
  res.push(velho.age);
  return res;
}

module.exports = getOldestFromFirstSpecies;
