const { readFile, writeFile } = require("./file");

exports.getUserByEmail = (email) => {
    return new Promise((resolve, reject) => {
        const user = User.find((user) => user.email === email);
        if (!user) {
            reject(new Error(`User with email ${email} not found`));
        }
        resolve(user);
    });
};


exports.IsUserExistByEmail = async (email) => {
    const data = await readFile('./models/user.json');
    return new Promise((resolve, reject) => {
        if (!data) {
            resolve(false);
        }
        const user = data.find((user) => user.email === email);
        if (!user) {
            resolve(false);
        } else {
            resolve(true);
        }
    });
}

exports.saveUser = async (user) => {
    const data = writeFile('./models/user.json', user);
    return new Promise((resolve, reject) => {
        if (!data) {
            reject(new Error('Failed to save user'));
        } else {
            resolve(data);
        }
    })
 }