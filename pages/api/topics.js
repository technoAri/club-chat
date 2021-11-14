import { getAllTopics } from "../../lib/user-topics"

export default async function topics(req, res) {
    // return new Promise((resolve, reject) => {
    //     getAllTopics()
    //       .then(response => {
    //         // res.statusCode = 200
    //         // res.end(JSON.stringify(response))
    //         res.status(200).send({ topics: response })
    //         resolve();
    //       })
    //       .catch(error => {
    //         res.json(error);
    //         res.status(500).end();
    //         return resolve(); //in case something goes wrong in the catch block (as vijay) commented
    //       });
    //   });
    const topics = await getAllTopics();
    try {
        // console.log ("All Topics::" , getAllTopics())
        res.status(200).send({ topics: topics })
    }
    catch (error) {
        console.error(error)
        res.status(500).end(error.message)
      }
    // setTimeout(() => {
    //     try {
    //         // console.log ("All Topics::" , getAllTopics())
    //         res.status(200).send({ topics: topics })
    //     }
    //     catch (error) {
    //         console.error(error)
    //         res.status(500).end(error.message)
    //       }
    // }, 1000);
}