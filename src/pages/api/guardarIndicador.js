import connectDB from '../../db/db';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Método no permitido' });
        return;
    }

    try {
        const db = await connectDB();
        const collection = db.collection('ufs');

        const newData = req.body;

        await collection.insertOne(newData);

        res.status(201).json({ message: 'Indicador guardado exitosamente', ok: true });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al guardar el indicador' });
    }
}
