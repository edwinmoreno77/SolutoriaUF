import connectDB from '../../db/db';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
    if (req.method !== 'DELETE') {
        res.status(405).json({ error: 'Método no permitido' });
        return;
    }

    try {
        const db = await connectDB();
        const collection = db.collection('ufs');

        const { id } = req.query;

        const deleteIndicador = await collection.deleteOne({ _id: new ObjectId(id) });

        if (deleteIndicador.deletedCount === 1) {
            console.log('Indicador eliminado exitosamente');
            res.status(200).json({ message: 'Indicador eliminado exitosamente', ok: true });
        } else {
            console.log('No se encontró el indicador');
            res.status(404).json({ error: 'No se encontró el indicador' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar el indicador' });
    }
}
