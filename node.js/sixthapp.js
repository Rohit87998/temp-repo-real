const write = require('fs');
for(let i=0;i<100000;i++){
    write.writeFileSync('./content/big.txt',`line ${i}`,{flag:'a'});
}
