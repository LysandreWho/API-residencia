let alunos = [];
let idCounter = 1;

const create = (aluno) => {
  aluno.id = idCounter++;
  alunos.push(aluno);
  return aluno;
};

const getAll = () => alunos;

const getOne = (id) => alunos.find((aluno) => aluno.id === Number(id));

const update = (id, data) => {
  const index = alunos.findIndex((aluno) => aluno.id === Number(id));
  if (index >= 0) {
    alunos[index] = { ...alunos[index], ...data };
    return alunos[index];
  }
  return null;
};

const remove = (id) => {
  const index = alunos.findIndex((aluno) => aluno.id === Number(id));
  if (index >= 0) {
    return alunos.splice(index, 1);
  }
  return null;
};

module.exports = { create, getAll, getOne, update, remove };
