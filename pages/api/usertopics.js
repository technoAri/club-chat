import { createUserTopic, getUserTopics } from "../../lib/user-topics"

export default async function usertopics(req, res) {
    if (req.method === 'GET') {
        try {
            const result = await getUserTopics('5a0fa6fc-67f6-49bd-b575-410eeca45ec3');
            res.status(200).send({ result })
        } catch (error){
            console.error(error)
            res.status(500).send(error)
        }
    }
    else {
        try {
            createUserTopic(req.body)
            res.status(200).send({ done: true })
        }
        catch (error) {
            console.error(error)
            res.status(500).send(error.message)
        }
    }
}