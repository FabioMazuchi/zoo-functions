const data = require("../data/zoo_data");
// TODO
const info = () => {
  const days = Object.keys(data.hours);
  let obj = {};
  for (let i = 0; i < days.length; i++) {
    obj[days[i]] = {
      officeHour: getHours(days[i]),
      exhibition: getAnimals(days[i]),
    };
  }
  return obj;
};

const individualObj = (day) => {
  const obj = {};
  obj[day] = info()[day];
  return obj;
};

const getAnimals = (day) => {
  if (day === "Monday") {
    return "The zoo will be closed!";
  }
  return data.species
    .filter((specie) => specie.availability.includes(day))
    .map((animal) => animal.name);
};

const getHours = (day) => {
  if (day === "Monday") {
    return "CLOSED";
  }
  return `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`;
};

function getSchedule(scheduleTarget) {
  if (!checkAnimalDays(scheduleTarget) || scheduleTarget === undefined) {
    return info();
  }
  return individualObj(scheduleTarget);
}

const checkAnimalDays = (param) => {
  const animals = data.species.some((specie) => specie.name === param);
  const days = Object.keys(data.hours).includes(param);
  if (animals === true || days === true) {
    return true;
  }
  return false;
};

// console.log(getSchedule('Tuesday'));

module.exports = getSchedule;
