const express = require('express');
const app = express();

let counter = 0;
const PORT = 3000;

app.get('/', (req, res) => {
	
	res.send({
		language: 'Node',
	});
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
