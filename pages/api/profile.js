import { getUserProfile } from '../../lib/user'

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const result = await getUserProfile('510bad3d-3694-4e0d-8563-decc212d7eab');
            res.status(200).send({ result })
        } catch (error){
            console.error(error)
            res.status(500).send(error)
        }
    }
}
