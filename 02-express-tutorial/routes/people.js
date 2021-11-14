const express = require('express');
const {
  getPerson,
  createPerson,
  createPersonPostman,
  putPerson,
  deletePerson
} = require('../controllers/people');

const router = express.Router();

router.get('/', getPerson);

router.post('/', createPerson);

router.post('/postman', createPersonPostman);

router.put('/:id', putPerson);

router.delete('/:id', deletePerson);

module.exports = router;
