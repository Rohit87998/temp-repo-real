const {createReadStream} = require('fs');
const read = createReadStream('./content/bigtxt',{highWaterMark:90000,encoding:'utf-8'});


read.on('data',(result)=>{
    console.log(result);
})
read.on('error',(whatever)=>{
    console.log(whatever);
}
)