const { create, findAll } = require("../model/Tasks");

const createTasks = async ({ task, status }) => create({ task, status });

const getAll = async () => findAll();

    
module.exports = {
    createTasks,
    getAll,
}        