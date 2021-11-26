const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((pessoa) => pessoa.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return data.employees
    .filter((employe) => employe.managers.includes(managerId))
    .map((value) => `${value.firstName} ${value.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
