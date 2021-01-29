const { Router } = require('express');
const IndexController = require('../controllers/index')

const router = Router();

/* GET index page. */
router.get('/', IndexController.index);

module.exports = router;
