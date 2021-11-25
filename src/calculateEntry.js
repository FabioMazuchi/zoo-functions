const data = require("../data/zoo_data");

function countEntrants(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  } else {
    return entrants.reduce(
      (accIdade, entrant) => {
        if (entrant.age < 18) {
          accIdade.child += 1;
        } else if (entrant.age >= 18 && entrant.age < 50) {
          accIdade.adult += 1;
        } else {
          accIdade.senior += 1;
        }
        return accIdade;
      },
      { child: 0, adult: 0, senior: 0 }
    );
  }
}

function calculateEntry(entrants) {
  const calc = countEntrants(entrants);
  if (calc === 0) {
    return 0;
  } else {
    return (
      data.prices.adult * calc.adult +
      data.prices.senior * calc.senior +
      data.prices.child * calc.child
    );
  }
}

module.exports = { calculateEntry, countEntrants };
