const fs = require('fs').promises
const util = require('util')
// const readFilePromise = util.promisify(fs.readFile);
// const writeFilePromise = util.promisify(fs.writeFile);
const start = async() =>{
try{
    const first = await fs.readFile('./content/first.txt','utf-8');
    const second = await fs.readFile('./content/second.txt','utf-8');
await fs.writeFile('./content/fifth.txt',`${first} and this is the text for the fourth file`,{flag: 'a'});
    console.log(first,second)


}catch(error){
    console.log(error)
}
}
start()
