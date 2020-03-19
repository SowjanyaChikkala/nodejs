var http = require('http');
var server=http.createServer(function (req, res2) {
    if(req.url=='/get')
    {
    http.get('http://jsonplaceholder.typicode.com/posts',(res)=>
{
    console.log(res.statusCode);
  let data = '';
  res.on('data', (chunk) => {data += chunk; });
  res.on('end', () => {
        const parsedData = JSON.parse(data);
        res2.write(JSON.stringify(parsedData));
})
})
}
 else if(req.url=='/post')
    {
        const options = {
            hostname: 'jsonplaceholder.typicode.com',
            path: '/posts',
            method: 'POST'
          };
          
        const req2 = http.request(options, (res) => 
         {
           console.log(`statusCode: ${res.statusCode}`)
           res.setEncoding('utf8');
           res.on('data', (a) => {
             //res2.write("posted")
           console.log(a)
        })
            req.on('error',(err)=>{
                console.log(err.message)
            })
            
          
          })
           var postdata=JSON.stringify(
            {
                user_id:23456,
                id:45,
                tittle:"sdfg",
                body:"drtyuiophdfyuitr"
            });
            req2.write(postdata);
            res2.write("sdfghjkl")
            req2.end();
        
    }
})
server.listen(4040);
console.log("listening")
