const { v4: uuidv4 } = require('uuid');

const path = require('node:path');
const { parse, serialize } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/vacance.json');

const defaultVacances = [];

function creationVacance(nomLieu, description) {
  const vacances = parse(jsonDbPath, defaultVacances);

  const newVacance = {
    id: uuidv4(),
    nomLieu,
    description,
  };
  defaultVacances.push(newVacance);
  serialize(jsonDbPath, vacances);
  return newVacance;
}

module.exports = creationVacance;


