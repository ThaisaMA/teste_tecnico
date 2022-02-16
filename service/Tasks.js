const { create, findAll, find } = require("../model/Tasks");

const createTasks = async ({ task, status }) => create({ task, status });

const getAll = async () => findAll();

const getOne = async (id) => {
    const taskExist = await find(id);
    if (!taskExist) return { erroCode: 'NOT_EXISTS' };
    return taskExist;
};


    
module.exports = {
    createTasks,
    getAll,
    getOne,
}        