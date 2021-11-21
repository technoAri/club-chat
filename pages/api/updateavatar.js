import { updateUserProfileDP } from '../../lib/user'

export default async function handler(req, res) {
    console.log("HEREGHYU", req);
    if (req.method === 'POST') {
        try {
            const result = await updateUserProfileDP('510bad3d-3694-4e0d-8563-decc212d7eab', req.body.query.avatar);
            res.status(200).send({ result })
        } catch (error){
            console.error(error)
            res.status(500).send(error)
        }
    }
}