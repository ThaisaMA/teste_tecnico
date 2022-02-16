const { 
    createTasks, 
    getAll, 
    getOne, 
    updateById, 
    removeById 
} = require("../service/Tasks");


const createNewTasks = async (req, res) => {
    try {
        const { task, status} = req.body;
        const task = await createTasks({ task, status });
        return res.status(201).json(task);
    } catch (error) {
        console.log(error);
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

const getOneTask = async (req, res) => {
    try {
        const { id } = req.params;
        const taskId = await getOne(id);
        if (taskId.erroCode) return res.status(404).json({ message: 'task not found' });
        return res.status(200).json(taskId);
    } catch (error) {
        console.log(error);
    }
};

const updateTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        const { task, status } = req.body;
        const taskUpdate = await updateById({ id, task, status });
        if (taskUpdate.erroCode) return res.status(401).json({ message: 'task not found' });
        return res.status(200).json(taskUpdate);
    } catch (error) {
        console.log(error);
    }
};

const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const taskDelete = await removeById({ idDono, role, id });
        if (taskDelete.erroCode) return res.status(401).json({ message: 'task not found' });
        return res.status(204).json(taskDelete);
    } catch (error) {
        console.log(error);
    }
};



module.exports = {
    createNewTasks,
    getAllTasks,
    getOneTask,
    updateTaskById,
    deleteTask,
}
