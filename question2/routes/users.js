const express = require('express');

const router = express.Router();
const { emailExiste, creationUser } = require('../models/users');

/* GET users listing. */
router.get('/', (req, res) => {
  res.json({ users: [{ name: 'e-baron' }] });
});

/* creation user */
router.post('/', (req, res) => {
  const { userName, mail } = req.body;

  if (!userName || !mail || userName.trim() === '' || mail.trim() === '') {
    return res.status(400).json({ message: 'vide' });
  }

  const verifmail = emailExiste(mail);

  if (verifmail) {
    return res.status(400).json({ message: 'lemail existe deja' });
  }

  const users = creationUser(userName, mail);
  if (users) {
    return res.status(200).json({ id: users.id });
  }

  return res.status(500).json();
});

module.exports = router;
