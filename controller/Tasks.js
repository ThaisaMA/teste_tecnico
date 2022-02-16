const { createTasks, getAll } = require("../service/Tasks");


const createNewTasks = async (req, res) => {
    try {
        const { task, status} = req.body;
        const task = await createTasks({ task, status });
        return res.status(201).json(task);
    } catch (error) {
        console.log(error);recipe
    }
};

const getAllTasks = async (_req, res) => {
    try {
        const allTasks = await getAll();
        return res.status(200).json(allTasks);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createNewTasks,
    getAllTasks,
}
