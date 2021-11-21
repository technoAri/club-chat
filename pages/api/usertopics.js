import { createUserTopic, getUserTopics } from "../../lib/user-topics"

export default async function usertopics(req, res) {
    if (req.method === 'GET') {
        try {
            const result = await getUserTopics('510bad3d-3694-4e0d-8563-decc212d7eab');
            res.status(200).send({ result })
        } catch (error) {
            console.error(error)
            res.status(500).send(error)
        }
    }
    else if (req.method === 'POST') {
        try {
            const response = await createUserTopic('510bad3d-3694-4e0d-8563-decc212d7eab', '6159a426-e7ac-4a0f-9bcf-b606918418f4');
            if (response) {
                const result = await getUserTopics('510bad3d-3694-4e0d-8563-decc212d7eab');
                res.status(200).send({ result })
            }
            res.status(200).send({ done: false })
        }
        catch (error) {
            console.error(error)
            res.status(500).send(error.message)
        }
    }
}