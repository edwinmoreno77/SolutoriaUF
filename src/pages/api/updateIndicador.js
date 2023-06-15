import connectDB from '../../db/db';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
    if (req.method !== 'PUT') {
        res.status(405).json({ error: 'Método no permitido' });
        return;
    }

    try {
        const db = await connectDB();
        const collection = db.collection('ufs');

        const { id } = req.query;
        const newData = req.body;

        // Eliminar el campo _id de los datos a actualizar
        delete newData._id;

        await collection.updateOne(
            { _id: new ObjectId(id) },
            { $set: newData }
        );

        res.status(200).json({ message: 'Indicador actualizado exitosamente', ok: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar el indicador' });
    }
}
