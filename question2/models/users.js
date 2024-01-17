const { v4: uuidv4 } = require('uuid');

const path = require('node:path');
const { parse, serialize } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/users.json');

function creationUser(userName, mail) {
  const users = parse(jsonDbPath, []);

  const newUsers = {
    id: uuidv4(),
    userName,
    mail,
  };
  users.push(newUsers);
  serialize(jsonDbPath, users);
  return newUsers;
}

function emailExiste(email) {
  const users = parse(jsonDbPath, []);

  const verifEmail = users.find((user) => user.mail === email);
  return verifEmail;
}

module.exports = {
  creationUser,
  emailExiste,
};
