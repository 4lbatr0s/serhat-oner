const fs = require('fs')//to use fileSystem functions

const read = (filename) => {
    return new Promise((resolve, reject) => {
        resolve(fs.readFile(filename, 'utf8', (err,data)=>{
            if(err){
                throw err
            }
            let returnValue = JSON.parse(JSON.stringify(data))
            console.log(returnValue)
        }))
    })
} 

module.exports = read

// const fs = require('fs').promises //to use fileSystem functions

// const read = (filename) => {
//     const data = fs.readFileSync(filename,
//         { encoding: 'utf8', flag: 'r' });
//     console.log(data)
// }

// module.exports = read