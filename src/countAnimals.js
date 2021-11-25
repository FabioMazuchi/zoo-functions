const data = require('../data/zoo_data');

const countTotal = () => {
  const res = {};
  data.species.forEach((specie) => {
    res[specie.name] = specie.residents.length;
  });
  return res;
};

const contIndividual = (animal) => {
  const key = Object.values(animal)[0];
  return data.species.find((specie) => specie.name === key).residents.length;
};

const constSexAnimal = (animal) => {
  const anim = Object.values(animal)[0];
  const sex = Object.values(animal)[1];
  let total = 0;
  return data.species
    .find((specie) => specie.name === anim)
    .residents.reduce((acc, resident) => {
      if (resident.sex === sex) {
        total += 1;
      }
      return total;
    }, 0);
};

function countAnimals(animal) {
  if (animal === undefined) {
    return countTotal();
  }
  if (Object.keys(animal)[1] === 'sex') {
    return constSexAnimal(animal);
  }
  return contIndividual(animal);
}

module.exports = countAnimals;
