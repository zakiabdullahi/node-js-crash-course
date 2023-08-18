const fspromise = require('fs').promises;
const path = require('path');

const fileop = async () => {
    try {

        const data = await fspromise.readFile(path.join(__dirname, 'Files', 'starter.txt'), 'utf8');
        console.log(data)
        await fspromise.unlink(path.join(__dirname, 'Files', 'starter.txt'));
        await fspromise.writeFile(path.join(__dirname, 'Files', 'promisetext.txt'), data);

        await fspromise.appendFile(path.join(__dirname, 'Files', 'promisetext.txt'), '\n\n nice to meet you');

        await fspromise.rename(path.join(__dirname, 'Files', 'promisetext.txt'), path.join(__dirname, 'Files', 'promisecomplete.txt'));
        const newdata = await fspromise.readFile(path.join(__dirname, 'Files', 'promisecomplete.txt'), 'utf8');
        console.log(newdata);


    } catch (e) {
        console.log(e)
    }
}

fileop();
// fs.readFile(path.join(__dirname, 'Files', 'starter.txt'), 'utf8', (err, data) => {
//     if (err) throw err
//     console.log(data)
// })
// fs.writeFile(path.join(__dirname, 'Files', 'reply.txt'), 'nice to meet you', (err) => {
//     if (err) throw err
//     console.log("write complete")

//     fs.appendFile(path.join(__dirname, 'Files', 'reply.txt'), '\n\n Yes it is', (err) => {
//         if (err) throw err
//         console.log("append complete")

//         fs.rename(path.join(__dirname, 'Files', 'reply.txt'), path.join(__dirname, 'Files', 'newReply.txt'), (err) => {
//             if (err) throw err
//             console.log("rename complete")
//         })
//     })
// })


process.on("uncaughtException", err => {

    console.log(`there was an error ${err}`);
    process.exit(1);
})