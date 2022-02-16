const { create, findAll, find, update, remove } = require("../model/Tasks");

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

const removeById = async (id) => {
    const taskExist = await find(id);
    if (!taskExist) return { erroCode: 'NOT_EXISTS' };
    const deleteTask = await remove(id);
    return deleteTask;
};

    
module.exports = {
    createTasks,
    getAll,
    getOne,
    updateById,
    removeById,
}        