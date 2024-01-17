const express = require('express');

const router = express.Router();

const creationVacance = require('../models/vacances');

/* create vacance */
router.post('/', (req, res) => {
  const { nomLieu, description } = req.body;

  if (!nomLieu || !description || nomLieu === '' || description.trim() === '') {
    return res.status(400).json({ message: 'vide' });
  }

  const vacance = creationVacance(nomLieu, description);

  console.log(vacance);

  if (vacance) {
    return res.status(200).json({ id: vacance.id });
  }

  return res.status(400).json({ message: 'Creation echoue' });
});

module.exports = router;
