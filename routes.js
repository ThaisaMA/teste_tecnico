const { 
    createNewTasks,
    getAllTasks,
    getOneTask, 
    updateTaskById,
    deleteTask 
} = require('./controller/Tasks');
const { validateTask } = require('./Validations');

const router = require('express').Router();

router.post('/', validateTask, createNewTasks);
router.get('/', getAllTasks);
router.get('/:id', getOneTask);
router.put('/:id', updateTaskById);
router.delete('/:id', deleteTask);

module.exports = router;