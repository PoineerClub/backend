const fs = require('fs');

exports.readFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(JSON.parse(data));
    });
  });
};

exports.writeFile = async (path, item) => {
  const data = await this.readFile(path);
  return new Promise((resolve, reject) => {
    if (!data) {
      reject(new Error('No data found'));
    } else {
      data.push(item);
      fs.writeFile(path, JSON.stringify(data), (err) => {
        if (err) {
          reject(err);
        }
        resolve(item);
      });
    }
  });
};
