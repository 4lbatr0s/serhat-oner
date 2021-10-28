const fs = require('fs')

const write = (filename, data) => {
    fs.writeFile(filename, JSON.stringify(data), function(err) {
        if(err) return console.error(err); //if file returns an error, then consle
    })
}

module.exports = write