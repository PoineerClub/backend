const express = require('express');
const userRoutes = require('./routes/user');
const { PORT } = require('./config');

const app = express();


// defalut middle ware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api/user', userRoutes);

app.get('/', (req, res) => {
    res.send("./public/index.html");
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})