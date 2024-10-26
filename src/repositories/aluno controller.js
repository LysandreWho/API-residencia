const alunoRepository = require('../repositories/alunoRepository');

exports.create = (req, res) => {
  const aluno = alunoRepository.create(req.body);
  res.status(201).json(aluno);
};

exports.getAll = (req, res) => {
  res.json(alunoRepository.getAll());
};

exports.getOne = (req, res) => {
  const aluno = alunoRepository.getOne(req.params.id);
  aluno ? res.json(aluno) : res.status(404).json({ message: 'Aluno não encontrado' });
};

exports.update = (req, res) => {
  const aluno = alunoRepository.update(req.params.id, req.body);
  aluno ? res.json(aluno) : res.status(404).json({ message: 'Aluno não encontrado' });
};

exports.delete = (req, res) => {
  const aluno = alunoRepository.remove(req.params.id);
  aluno ? res.status(204).send() : res.status(404).json({ message: 'Aluno não encontrado' });
};
