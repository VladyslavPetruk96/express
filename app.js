const express = require('express');

const app = express();

const getRootHandler = (req, res) => {
	res.send('Get root route');
};

//comments
const getCommentsHandler = (req, res) => {
	res.send('Get comments route');
};
const getSingleCommentHandler = (req, res) => {
	res.send(`Get comment route. CommentId ${req.params.commentId}`);
};
const postCommentsHandler = (req, res) => {
	res.send('Post comments route');
};
const deleteCommentHandler = (req, res) => {
	res.send(`Delete comments route. CommentId ${req.params.commentId}`);
};

//users
const getUsersHandler = (req, res) => {
	res.send('Get users route');
};
const getSingleUserHandler = (req, res) => {
	res.send(`Get user route. UserID ${req.params.userID}`);
};
const postUsersHandler = (req, res) => {
	res.send('Post users route');
};

app.get('/', getRootHandler);

app.get('/users', getUsersHandler);
app.post('/users', postUsersHandler);
app.get('/users/:userID', getSingleUserHandler);

app.listen(4000, () => console.log('Server was started on port 4000'));
