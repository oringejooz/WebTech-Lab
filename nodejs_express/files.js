const fs = require('fs');

//reading files
// fs.readFile('./docs/blog1.txt', (err,data) => {
//   if(err){
//     console.log(err);
//   }
//   console.log(data.toString());
// });
//Call back func cuz asynchronous
//Writing Files

// fs.writeFile('./docs/blog1.txt','I wopyuuu',()=>{
//     console.log('Files Written');
// });

// fs.writeFile('./docs/blog2.txt','AI wopyuuu AARAADHYA',()=>{
//     console.log('Files Written');
// });


//Directories
// if(!fs.existsSync('./docs/assets')){
//     fs.mkdir('./docs/assets',(err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log('Folder created');
//     });
// }



//Deleting Files

// fs.rmdir('./docs/assets',(err) => {
//     if(err){
//         console.log(err);
//     }
//     console.log('Folder removed');
 
// });

if(fs.existsSync('./docs/blog2.txt')){
    fs.unlink('./docs/blog2.txt',(err) =>{
        console.log(err);
    });
    console.log('File deleted');
}