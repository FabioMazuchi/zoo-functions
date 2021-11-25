const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const res = data.employees.find(
    (employe) =>
      employe.firstName === employeeName || employe.lastName === employeeName,
  );
  if (res === undefined) {
    return {};
  }
  return res;
}

module.exports = getEmployeeByName;
