const fs = require('fs');
const gettext = (path) => {
return new Promise((resolve,reject)=> {
fs.readFile(path,'utf-8',(err,data)=>{
if (err)
{
    reject(err);
}
else
resolve(data);
})
    }
)}
const start = async() => {
    try{const first = await gettext('./content/first.txt')
    console.log(first);
}
catch(err){
    console.log(err)
}
}
start()
   

