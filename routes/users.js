const express = require('express');
const {
	getUsersHandler,
	getSingleUserHandler,
	postUsersHandler,
} = require('../controllers/users');

const router = express.Router();

router.get('/', getUsersHandler);
router.post('/', postUsersHandler);
router.get('/:userID', getSingleUserHandler);

module.exports = router;
