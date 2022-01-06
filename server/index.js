const app = require('express')() //express: 
const server = require('http').createServer(app)
const cors = require('cors')
const io = require('socket.io')(server,{
    cors : {
        origin :"*",
        credentials :true
    }
});


io.on('connection', socket=>{
    socket.on('message',({name,message,message2}) => {
        io.emit('message',({name, message, message2}))
    })
})

server.listen(4000, function(){
    console.log('listening on port 4000');
})
