const fs = require('fs')//to use fileSystem functions

const deleteFile = (filename) => {
    fs.unlink(filename, function (err) {
        if (err) throw err;
        console.log('file deleted');
    });
}

module.exports = deleteFile