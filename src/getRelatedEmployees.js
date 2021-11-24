const data = require('../data/zoo_data');

function isManager(id) {
  const res = data.employees.find((employe) => employe.id === id).managers.length;
  if (res === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

function getRelatedEmployees(managerId) {
  // seu código aqui
}

module.exports = { isManager, getRelatedEmployees };
