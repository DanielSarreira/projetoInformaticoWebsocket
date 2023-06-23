const httpServer = require('http').createServer()
const io = require("socket.io")(httpServer, {
    allowEIO3: true,
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        credentials: false
    }
})
httpServer.listen(3000, function () {
    console.log('listening on *:3000')
})
io.on('connection', function (socket) {
    console.log(`client ${socket.id} has connected`)
})

io.on('connection', function (socket) {
    socket.on('newInscricao', function (response) {
        socket.broadcast.emit('newInscricao', response)
    })
})
