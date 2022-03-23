const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/index.html', fileContent, err => {
        if (err) {
            reject(err);
            //return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
            return;
        }
        //if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
            ok: true,
            message: 'file created!'
        });
      });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'style sheet created.'
            });
        });
    });
}

module.exports = { writeFile, copyFile };