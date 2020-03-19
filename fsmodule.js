const fs=require('fs')
fs.writeFile('./model.txt',"Hey I am writing!",(err,data)=>
{
    if(err) throw err;
    else{
        console.log("writing:"+data)
    }
})
fs.readFile('./model.txt',"utf8",(err,data)=>
{
    if(err) {
        console.log(err)
    }    
    else{
        console.log("reading"+data)
        }
})
fs.appendFile("./model.txt","Appending text",(err)=>
{
     if(err)
     {
          console.log("error")
     }
     else
     {
          console.log("Appended!")
     }

})
fs.open('./model.txt', (err, fd) => {
    if (err) throw err;
    else{
        console.log("File opened!")
        console.log(fd);
    }
    fs.close(fd, (err) => {
      if (err) throw err;
    });
  });
  fs.rename('./model.txt', './fsprgms.js', (err) => 
{    
if (err) 
{
    console.log(err)
}
else{
console.log("renamed")
}});
fs.unlink("./fsprgm.js",err=>{
    if(err){
        console.error(err)
    }
    else{
        console.log("Done Async Delete!")
    }
})


