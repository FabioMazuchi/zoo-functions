const data = require("../data/zoo_data");
// TODO

const countTotal = () => {
  const res = {};
  data.species.forEach((specie) => {
    res[specie.name] = specie.residents.length;
  });
  return res;
};

// console.log(countTotal());

const contIndividual = (animal) => {
  const key = Object.values(animal)[0];
  return data.species.find((specie) => specie.name === key).residents.length;
};

const constSexAnimal = (animal) => {
  const anim = Object.values(animal)[0];
  const sex = Object.values(animal)[1];
  return data.species
    .find((specie) => specie.name === anim)
    .residents.reduce((acc, resident) => {
      if (resident.sex === sex) {
        acc += 1;
      }
      return acc;
    }, 0);
};

// console.log(constSexAnimal({ specie: "penguins", sex: "male" }));

function countAnimals(animal) {
  if (animal === undefined) {
    return countTotal();
  } if (Object.keys(animal)[1] === 'sex') {
		return constSexAnimal(animal);
	}
  return contIndividual(animal);
}

// console.log(countAnimals({ specie: "penguins", sex: "male" }));

module.exports = countAnimals;
