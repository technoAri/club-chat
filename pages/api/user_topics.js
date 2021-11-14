import { createUserTopic } from "../../lib/user-topics"

export default async function user_topics(req, res) {
    try {
        createUserTopic(req.body)
        res.status(200).send({ done: true })
    }
    catch (error) {
        console.error(error)
        res.status(500).end(error.message)
      }
}