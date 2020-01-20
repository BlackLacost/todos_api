const { Router } = require('express');
const { todoRouter } = require('./todos');

const router = Router();

router.use('/todos', todoRouter);

module.exports = {
  apiRouter: router,
};
