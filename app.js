const express = require('express');
const commentsRouter = require('./routes/comments');
const userRouter = require('./routes/users');

const app = express();

const getRootHandler = (req, res) => {
	res.send('Get root route');
};

app.get('/', getRootHandler);
app.use('/comments', commentsRouter);
app.use('/users', userRouter);

app.listen(4000, () => console.log('Server was started on port 4000'));
