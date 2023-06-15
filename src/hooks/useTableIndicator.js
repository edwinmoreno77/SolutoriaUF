import axios from "axios";
import { useState } from "react";

export const useTableIndicator = ({ indicadores }) => {
    const [editingId, setEditingId] = useState(null);
    const [newData, setNewData] = useState({
        nombreIndicador: "",
        codigoIndicador: "",
        unidadMedidaIndicador: "",
        valorIndicador: 0,
        fechaIndicador: "",
        origenIndicador: "",
    });

    const handleEdit = (id) => {
        const indicador = indicadores.find((item) => item._id === id);

        if (indicador) {
            setEditingId(id);
            setNewData(indicador);
        }
    };

    const handleDelete = async (id) => {
        try {
            const { data } = await axios.delete(`/api/deleteIndicador?id=${id}`);
            if (data.ok) {
                alert(data.message);
            }
        } catch (error) {
            console.error("Error al eliminar el indicador", error);
        }
    };

    const handleCancel = () => {
        setEditingId(null);
        setNewData({
            nombreIndicador: "",
            codigoIndicador: "",
            unidadMedidaIndicador: "",
            valorIndicador: 0,
            fechaIndicador: "",
            origenIndicador: "",
        });
    };

    const handleSave = async (id, newData) => {
        try {
            if (id) {
                // Convertir el valor de valorIndicador a número
                newData.valorIndicador = parseFloat(newData.valorIndicador);
                const { data } = await axios.put(
                    `/api/updateIndicador?id=${id}`,
                    newData
                );
                if (data.ok) {
                    alert(data.message);
                }
            } else {
                const { data } = await axios.post("/api/guardarIndicador", newData);
                if (data.ok) {
                    console.log("Enviado...", data.message);
                    alert("Indicador creado");
                }
            }
            // Realiza cualquier otra acción necesaria después de guardar o actualizar el indicador
            setEditingId(null);
            setNewData({
                nombreIndicador: "",
                codigoIndicador: "",
                unidadMedidaIndicador: "",
                valorIndicador: 0,
                fechaIndicador: "",
                origenIndicador: "",
            });
        } catch (error) {
            console.error("Error al guardar o actualizar el indicador", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewData((prevData) => ({ ...prevData, [name]: value }));
    };

    return {
        editingId,
        newData,
        handleEdit,
        handleDelete,
        handleCancel,
        handleSave,
        handleChange,
    }
}
