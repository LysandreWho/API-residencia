const express = require('express');
const router = express.Router();
const alunoController = require('../controllers/alunoController');

// Rotas para CRUD
router.post('/', alunoController.create);
router.get('/', alunoController.getAll);
router.get('/:id', alunoController.getOne);
router.put('/:id', alunoController.update);
router.delete('/:id', alunoController.delete);

module.exports = router;
