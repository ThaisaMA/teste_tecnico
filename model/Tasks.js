const connection = require('./connection');

const collection = 'tasks';

const create = async ({ task, status }) => {
    const db = await connection();
    const insert = await db.collection(collection).insertOne( 
        { task, status }, 
    );
    const task = insert.ops[0];
    return { task };
};

module.exports = {
    create,
  };