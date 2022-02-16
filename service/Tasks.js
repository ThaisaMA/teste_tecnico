const { create, findAll, find, update } = require("../model/Tasks");

const createTasks = async ({ task, status }) => create({ task, status });

const getAll = async () => findAll();

const getOne = async (id) => {
    const taskExist = await find(id);
    if (!taskExist) return { erroCode: 'NOT_EXISTS' };
    return taskExist;
};

const updateById = async ({ id, task, status }) => {
    const taskExist = await find(id);
    if (!taskExist) return { erroCode: 'NOT_EXISTS' };
    const taskUpdate = await update({ id, task, status });
    return taskUpdate;
};

    
module.exports = {
    createTasks,
    getAll,
    getOne,
    updateById,
}        