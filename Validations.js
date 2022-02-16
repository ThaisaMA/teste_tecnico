const validateTask = async (req, res, next) => {
    const { task, status } = req.body;
    if (!task || !status) return res.status(401).json({ message: 'All fields must be filled'});
    next();
};

module.exports = {
    validateTask,
};