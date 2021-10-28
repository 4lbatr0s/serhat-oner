const fs = require('fs')//to use fileSystem functions
const read = require('./read') // to use read.js file.
const update = async (filename, data)=> {
    try {
        await read(filename)
        fs.writeFile(filename, JSON.stringify(data), (err) => {
            if (err) {
                throw err
            }
            console.log('File has been updated')
        })
    } catch (error) {
        console.log(error)
    }
    
}

module.exports = update