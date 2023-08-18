const fs = require('fs');

// create folder

if (!fs.existsSync('./new')) {
    fs.mkdir('./new', (err) => {
        if (err) throw err;
        console.log("folder created");
    })

}

// delet folder
if (fs.existsSync('./new')) {
    fs.rmdir('./new', (err) => {
        if (err) throw err;
        console.log("folder deleted");
    })

}