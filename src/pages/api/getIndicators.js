import connectDB from '../../db/db';

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        res.status(405).json({ error: 'Método no permitido' });
        return;
    }

    try {
        const db = await connectDB();

        const collection = db.collection('ufs')

        const indicators = await collection.find().toArray();

        res.status(200).json(indicators);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los indicators' });
    }
}
