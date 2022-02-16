const { createTasks } = require("../service/Tasks");


const createNewTasks = async (req, res) => {
    try {
        const { task, status} = req.body;
        const task = await createTasks({ task, status });
        return res.status(201).json(task);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createNewTasks,
}
