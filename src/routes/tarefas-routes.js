const express = require('express');
const router = express.Router();

const tarefaController = require('../controllers/tarefas-controllers');

//@router Get
//@retornar todas as tarefas
//@access public
//@endpoint http://localhost:porta/tarefas
router.get('/tarefas', tarefaController.getTarefas);

//@router Get
//@Query Titulo
//@retornar apenas titulo
//@access public
//@endpoint http://localhost:porta/tarefas/titulo
router.get('/tarefas/titulo', tarefaController.getByTitle);

//@router Get
//@params ID
//@retornar todos os ids das tarefas
//@access public
//@endpoint http://localhost:porta/tarefas/id
router.get('/tarefas/:id', tarefaController.getById);

//@router POST tarefas
//@criar tarefas
//@access public
//@endpoint http://localhost:porta/tarefas
router.post('/tarefas', tarefaController.postTarefas);

//@ DELETE tarefas
//@deletar tarefas
//@access public
//@endpoint http://localhost:porta/tarefas/:id
router.delete('/tarefas/:id', tarefaController.deletarTarefas);

module.exports = router;