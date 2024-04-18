const fs = require('fs');

const readStream = fs.createReadStream('docs/blog3.txt',{encoding:'utf8'});

const writeStream = fs.createWriteStream('./docs/blog4.txt');


// //Event Listener
// readStream.on('data',(chunk)=>{
//     console.log('--------- NEW CHUNK -----------');
//     console.log(chunk);
//     writeStream.write('\nNew CHunk\n');
//     writeStream.write(chunk);

// }); 

//Piping
readStream.pipe(writeStream);
