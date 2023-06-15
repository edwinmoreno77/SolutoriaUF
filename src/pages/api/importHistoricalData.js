import axios from 'axios';
import UF from '../../models/model'; // Importa el modelo UF
import connectDB from '../../db/db'; // Importa la función connectDB


export default async function importHistoricalData(req, res) {

    try {
        // Establece la conexión a la base de datos
        await connectDB();
        //Pedir token de acceso
        const { data } = await axios.post('https://postulaciones.solutoria.cl/api/acceso', {
            userName: "edwinmoreno77@gmail.com",
            flagJson: true
        });
        //Pedir datos usando el token anterior
        const response = await axios.get('https://postulaciones.solutoria.cl/api/indicadores', {
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${data.token}`,
            },
        });
        const historicalData = response.data;
        // Itera sobre los datos históricos y crea documentos UF en la base de datos
        for (const data of historicalData) {
            //filtrar solo los datos de la UF
            if (data.codigoIndicador === 'UF') {
                //verifiar si esta en la base de datos y evitar repetir datos.
                const existingUF = await UF.findOne({ id: data.id });
                if (existingUF) {
                    // El documento UF ya existe en la base de datos.
                    console.log(`El documento UF con id ${data.id} ya existe en la base de datos.`);
                } else {
                    //Crear el objeto UF para guardar en base de datos.
                    const uf = new UF({
                        id: data.id,
                        nombreIndicador: data.nombreIndicador,
                        codigoIndicador: data.codigoIndicador,
                        unidadMedidaIndicador: data.unidadMedidaIndicador,
                        valorIndicador: data.valorIndicador,
                        fechaIndicador: data.fechaIndicador,
                        origenIndicador: data.origenIndicador,
                    });
                    //Guardar 
                    await uf.save();
                }
            }
        }
        console.log('Datos históricos importados correctamente');
        res.status(200).json({
            ok: true,
        });
    } catch (error) {
        console.error('Error al importar los datos históricos:', error);
    }
}


