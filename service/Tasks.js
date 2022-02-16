const { create } = require("../model/Tasks");

const createTasks = async ({ task, status }) => 
    create({ task, status });

    
module.exports = {
    createTasks,
}        