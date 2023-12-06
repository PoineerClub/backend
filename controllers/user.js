var crypto = require('crypto');
const {  IsUserExistByEmail, saveUser } = require('../utils/user');
const { SECRET } = require('../config');

exports.signup = async(req, res) => {
  const { email, firstName,lastName, password, balance ,address} = req.body;
  // check if user exists
  const isUserExist = await IsUserExistByEmail(email);
  if (isUserExist) {
    return res.status(409).json({ message: 'User already exists' });
  }
  const hashedPassword = crypto.createHmac('sha256', SECRET).update(password).digest('hex');

  const user = {
      id: Math.floor(Math.random() * 10000000000),
      email,
      firstName,
      lastName,
      password: hashedPassword,
      accountNumber: Math.floor(Math.random() * 80000000000),
      branch: 'Bangalore',
      address,
      balance
    };
  const savedUser = await saveUser(user);
  if (!savedUser) {
    return res.status(500).json({ message: 'Failed to save user' });
  }

  return res.status(200).json({ message: 'User created successfully' ,"user":savedUser});
};

exports.signin = (req, res) => {

}
exports.signout = (req, res) => { }



