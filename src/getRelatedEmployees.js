const data = require('../data/zoo_data');
// TODO

function isManager(id) {
  return (
    data.employees.some((pessoa) => pessoa.managers.includes(id)));
}

// console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    
  }
}

console.log(getRelatedEmployees('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = { isManager, getRelatedEmployees };
