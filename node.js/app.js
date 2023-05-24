const { writeFile, readFile,readFileSync,writeFileSync } = require('fs');
const read = readFile('./content/first.txt','utf-8',(err,data)=>{
if(err){
console.log(err)
return;
}

writeFile('./content/second.txt',data,(err) => {
    if (err){
console.log(err)

}
console.log('done with this task');
})
console.log('and this ned problem nades');
})