
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Aluno routes
const alunoRoutes = require('./src/routes/alunoRoutes');
app.use('/alunos', alunoRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
    