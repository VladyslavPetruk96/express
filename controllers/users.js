const getUsersHandler = (req, res) => {
	res.send('Get users route');
};
const getSingleUserHandler = (req, res) => {
	res.send(`Get user route. UserID ${req.params.userID}`);
};
const postUsersHandler = (req, res) => {
	res.send('Post users route');
};

module.exports = {
	getUsersHandler,
	getSingleUserHandler,
	postUsersHandler,
};
