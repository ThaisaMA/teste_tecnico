const { createNewTasks, getAllTasks, getOneTask, updateTaskById, deleteTask } = require('./controller/Tasks');

const router = require('express').Router();

router.post('/',createNewTasks);
router.get('/', getAllTasks);
router.get('/:id', getOneTask);
router.put('/:id', updateTaskById);
router.delete('/:id', deleteTask);

module.exports = router;