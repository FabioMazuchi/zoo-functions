const data = require("../data/zoo_data");
// TODO

function getAnimalMap({prop = 'location'}) {
  // const { sex: location } = prop;
  return data.species.reduce((acc, specie) => {
    const key = specie[prop];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(specie.name);
    return acc;
  }, {});
}

console.log(getAnimalMap({}));

module.exports = getAnimalMap;
