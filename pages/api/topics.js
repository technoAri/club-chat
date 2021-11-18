import { getAllTopics, getTrendingTopics } from "../../lib/user-topics"

export default async function topics(req, res) {
    const topics = await getAllTopics();
    try {
        // console.log ("All Topics::" , getAllTopics())
        res.status(200).send({ topics: topics })
    }
    catch (error) {
        console.error(error)
        res.status(500).end(error.message)
      }
}
