const http=require('http') 
const PORT=5000
const fs=require('fs')

const server=http.createServer((req,res)=>{

    fs.readFile('date-time.txt','utf8',(err,data)=>{
        if(err)
            console.log(err)
        else
            res.writeHead(200,{'Content-Type':'text/html'})
            res.end(data)
    })
   
   
  
})

server.listen(PORT,()=>console.log(`server is listening port:${PORT}`))