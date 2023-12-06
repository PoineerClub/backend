const dotenv = require('dotenv');
dotenv.config();


module.exports = {
    PORT: process.env.APP_PORT,
    SECRET: process.env.SECRET,
}