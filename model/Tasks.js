const connection = require('./connection');

const collection = 'tasks';

const create = async ({ task, status }) => {
    const db = await connection();
    const insertTask = await db.collection(collection).insertOne( 
        { task, status }, 
    );
    const task = insertTask.ops[0];
    return { task };
};

const findAll = async () => {
    const db = await connection();
    const allTasks = await db.collection(collection).find({}).toArray();
    return allTasks;
  };

module.exports = {
    create,
    findAll,
  };