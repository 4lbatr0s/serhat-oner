const fs = require('fs')//to use fileSystem functions


const rename = (filename, newName) => {
    fs.rename(filename, newName, function(err){
        if(err) throw err
        console.log('File name has been changed')
    })
}




module.exports = rename