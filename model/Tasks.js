const { ObjectId } = require('mongodb');
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

  const find = async (id) => {
    const db = await connection();
    const idTask = await db.collection(collection).findOne({ _id: ObjectId(id) });
    return idTask;   
};

const update = async ({ id, task, status }) => {
    const db = await connection();
    await db.collection(collection).updateOne({ _id: ObjectId(id) }, 
    { $set: { task, status } });
    return { _id: id, task, status };
};

const remove = async (id) => {
    const db = await connection();
    const removeTask = await db.collection(collection).deleteOne({ _id: ObjectId(id) });
    return removeTask;
};

module.exports = {
    create,
    findAll,
    find,
    update,
    remove
  };