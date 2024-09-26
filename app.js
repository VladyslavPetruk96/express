const express = require('express');

const app = express();

const firstHandler = (req, res, next) => {
	console.log('first handler');
	next();
};
const secondHandler = (req, res) => {
	console.log('second');
	res.send('response from Express');
};

app.get('/', firstHandler, secondHandler);

app.listen(4000, () => console.log('Server was started on port 4000'));
