import { createUserTopic, getUserTopics } from "../../lib/user-topics"

export default async function usertopics(req, res) {
    if (req.method === 'GET') {
        try {
            const result = await getUserTopics('510bad3d-3694-4e0d-8563-decc212d7eab');
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