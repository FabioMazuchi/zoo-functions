const data = require('../data/zoo_data');
// TODO

// const entr = [
//   { name: "Lara Carvalho", age: 5 },
//   { name: "Frederico Moreira", age: 5 },
//   { name: "Pedro Henrique Carvalho", age: 5 },
//   { name: "Maria Costa", age: 18 },
//   { name: "Núbia Souza", age: 18 },
//   { name: "Carlos Nogueira", age: 50 },
// ];

// // { child: 3, adult: 2, senior: 1 }
const countIdade = (acc, entr) => {
  if (entr.age < 18) {
    return { child: acc.child + 1, adult: acc.adult, senior: acc.senior };
  }
  if (entr.age >= 18 && entr.age < 50) {
    return { child: acc.child, adult: acc.adult + 1, senior: acc.senior };
  }
  return { child: acc.child, adult: acc.adult, senior: acc.senior + 1 };
};

function countEntrants(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  return entrants.reduce((acc, entrant) => countIdade(acc, entrant), {
    child: 0,
    adult: 0,
    senior: 0,
  });
}

// console.log(countEntrants());

function calculateEntry(entrants) {
  const v = countEntrants(entrants);
  const d = data.prices;
  if (v === 0) {
    return 0;
  }
  return (
    d.adult * v.adult + d.senior * v.senior + d.child * v.child
  );
}

// console.log(calculateEntry({}));

module.exports = { calculateEntry, countEntrants };
