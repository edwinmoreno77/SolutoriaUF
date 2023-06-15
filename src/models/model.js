import mongoose from 'mongoose';

const ufSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    nombreIndicador: { type: String, required: true },
    codigoIndicador: { type: String, required: true },
    unidadMedidaIndicador: { type: String, required: false },
    valorIndicador: { type: Number, required: false },
    fechaIndicador: { type: String, required: false },
    origenIndicador: { type: String, required: false }
});

const UF = mongoose.model('UF', ufSchema);

export default UF;
