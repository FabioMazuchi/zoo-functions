const data = require('../data/zoo_data');
// TODO

// const selectEmploye = ({ name }) =>
//   data.employees.find(
//     (employe) => employe.firstName === name || employe.lastName === name
//   );

// const getEspecie = ({ name }) => {
//   const species = selectEmploye({ name }).responsibleFor;
//   return species.forEach((value) => data.species.filter((spec) => spec.id === value));
// };

// console.log(getEspecie({ name: "Spry" }));

function getEmployeesCoverage({ name }) {
//   const employe = selectEmploye({ name });
//   return {
//     id: employe.id,
//     fullName: `${employe.firstName} ${employe.lastName}`,
//     species: employe.responsibleFor,
//   };
}

// console.log(getEmployeesCoverage({ name: "Spry" }));

module.exports = getEmployeesCoverage;
