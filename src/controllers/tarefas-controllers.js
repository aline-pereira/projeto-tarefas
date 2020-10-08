const tarefa = require('../models/tarefas-models');
const tarefaModel = require('../models/tarefas-models');

const getTarefas = (req, res) => {
    res.status(200).json(tarefaModel);
}

const getById = (req, res) => {
    const { id } = req.params;

    const tarefa = tarefaModel.find(tarefa => tarefa.id == id);

    res.status(200).json(tarefa);
}

const getByTitle = (req, res) => {
    const { titulo } = req.query;

    const tarefa = tarefaModel.find(tarefa => tarefa.titulo == titulo);

    res.status(200).json(tarefa);
}

//CRIAR > CORPO COM INFORMAÇÕES > REQUISIÇÃO BODY
const postTarefas = (req, res) => {
    const {titulo, descricao, prazo, responsavel} = req.body;

    const tarefaId = tarefaModel.map(tarefa => tarefa.id == id);

    const novoId = tarefas.length > 0 ? Math.max.apply(Math, tarefaId) + 1 : 1;
    const novaTarefa = {
        id: novoId,
        titulo: titulo, 
        descricao: descricao, 
        prazo: prazo, 
        responsavel: responsavel,
        dataCriacao: new Date()
    }

    tarefaModel.push(novaTarefa);

    res.status(201).json(novaTarefa);
}

const deletarTarefas = (req, res) => {
    const {id} = req.params;

    tarefaModel.filter(tarefas => tarefas.id != id);

    res.status(204).json({mensagem: 'Tarefa deletada com sucesso'})
}

module.exports = {
    getTarefas,
    getById,
    getByTitle,
    postTarefas,
    deletarTarefas
}