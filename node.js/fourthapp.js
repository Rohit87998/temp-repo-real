const fs = require('fs')
const util = require('util')
const readFilePromise = util.promisify(fs.readFile);
const writeFilePromise = util.promisify(fs.writeFile);
const start = async() =>{
try{
    const first = await readFilePromise('./content/first.txt','utf-8');
    const second = await readFilePromise('./content/second.txt','utf-8');
await writeFilePromise('./content/fourth.txt',`${first} and this is the text for the fourth file`);
    console.log(first,second)


}catch(error){
    console.log(error)
}
}
start()
