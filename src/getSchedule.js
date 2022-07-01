const data = require('../data/zoo_data');

const getHours = (day) => {
  if (day === 'Monday') {
    return 'CLOSED';
  }
  return `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`;
};

const getAnimals = (day) => {
  if (day === 'Monday') {
    return 'The zoo will be closed!';
  }
  return data.species
    .filter((specie) => specie.availability.includes(day))
    .map((animal) => animal.name);
};

const info = () => {
  const days = Object.keys(data.hours);
  const obj = {};
  for (let i = 0; i < days.length; i += 1) {
    obj[days[i]] = {
      officeHour: getHours(days[i]),
      exhibition: getAnimals(days[i]),
    };
  }
  return obj;
};

const individualDay = (day) => {
  const obj = {};
  obj[day] = info()[day];
  return obj;
};

const individualAnimal = (animal) =>
  data.species.find((specie) => specie.name === animal).availability;

const checkDays = (day) => {
  const check = Object.keys(data.hours).includes(day);
  return check;
};

const checkAnimal = (animal) => {
  const check = data.species.some((specie) => specie.name === animal);
  return check;
};

function getSchedule(scheduleTarget) {
  const day = checkDays(scheduleTarget);
  const animal = checkAnimal(scheduleTarget);

  if (day === true) {
    return individualDay(scheduleTarget);
  }
  if (animal === true) {
    return individualAnimal(scheduleTarget);
  }
  return info();
}

module.exports = getSchedule;
