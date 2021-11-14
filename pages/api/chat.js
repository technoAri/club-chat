import { PrismaClient } from '.prisma/client';
import { v4 as uuidv4 } from 'uuid'

// import { Server } from 'socket.io'

// const chatHandler = (req, res) => {
//   if (!res.socket.server.io) {
//     console.log('*First use, starting socket.io')

//     const io = new Server(res.socket.server)

//     io.on('connection', socket => {
//       socket.broadcast.emit('a user connected')
//       socket.on('hello', msg => {
//         socket.emit('hello', 'world!')
//       })
//     })

//     res.socket.server.io = io
//   } else {
//     console.log('socket.io already running')
//   }
//   res.end()
// }

// export const config = {
//   api: {
//     bodyParser: false
//   }
// }

// export default chatHandler

export default async function chat(req, res) {
    const prisma = new PrismaClient();
    try {
        await prisma.topic.createMany({
            data: [
              { name: 'JavaScript', id: uuidv4() },
              { name: 'Angular', id: uuidv4() },
              { name: 'React', id: uuidv4() },
              { name: 'NextJS', id: uuidv4() },
            ],
          })

          res.status(200).send({ done: true })
    }
    catch (error) {
        console.error(error)
        res.status(500).end(error.message)
    }
}