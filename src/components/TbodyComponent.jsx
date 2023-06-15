import React from "react";

export const TbodyComponent = ({
  indicadores,
  handleChange,
  handleSave,
  handleCancel,
  handleEdit,
  handleDelete,
  editingId,
  newData,
}) => {
  return (
    <tbody>
      {indicadores.map((indicador) => (
        <tr className="bg-slate-50 " key={indicador._id}>
          <td className="m-1 p-1">
            {editingId === indicador._id ? (
              <input
                type="text"
                name="nombreIndicador"
                value={newData.nombreIndicador}
                onChange={handleChange}
                className="w-full px-2 py-1 border rounded"
              />
            ) : (
              indicador.nombreIndicador
            )}
          </td>
          <td className="m-1 p-1">
            {editingId === indicador._id ? (
              <input
                type="text"
                name="codigoIndicador"
                value={newData.codigoIndicador}
                onChange={handleChange}
                className="w-full px-2 py-1 border rounded"
              />
            ) : (
              indicador.codigoIndicador
            )}
          </td>
          <td className="m-1 p-1">
            {editingId === indicador._id ? (
              <input
                type="text"
                name="unidadMedidaIndicador"
                value={newData.unidadMedidaIndicador}
                onChange={handleChange}
                className="w-full px-2 py-1 border rounded"
              />
            ) : (
              indicador.unidadMedidaIndicador
            )}
          </td>
          <td className="m-1 p-1">
            {editingId === indicador._id ? (
              <input
                type="number"
                name="valorIndicador"
                value={newData.valorIndicador}
                onChange={handleChange}
                className="w-full px-2 py-1 border rounded"
              />
            ) : (
              indicador.valorIndicador
            )}
          </td>
          <td className="m-1 p-1">
            {editingId === indicador._id ? (
              <input
                type="text"
                name="fechaIndicador"
                value={newData.fechaIndicador}
                onChange={handleChange}
                className="w-full px-2 py-1 border rounded"
              />
            ) : (
              indicador.fechaIndicador
            )}
          </td>
          <td className="m-1 p-1">
            {editingId === indicador._id ? (
              <input
                type="text"
                name="origenIndicador"
                value={newData.origenIndicador}
                onChange={handleChange}
                className="w-full px-2 py-1 border rounded"
              />
            ) : (
              indicador.origenIndicador
            )}
          </td>
          <td className="m-1 p-1">
            {editingId === indicador._id ? (
              <div>
                <button
                  className="m-1 text-white bg-cyan-900 p-3 rounded-lg"
                  onClick={() => handleSave(indicador._id, newData)}
                >
                  Guardar
                </button>
                <button
                  className="m-1 text-white bg-red-600 p-3 rounded-lg"
                  onClick={handleCancel}
                >
                  Cancelar
                </button>
              </div>
            ) : (
              <div>
                <button
                  className="m-1 text-white bg-cyan-900 p-3 rounded-lg"
                  onClick={() => handleEdit(indicador._id)}
                >
                  Editar
                </button>
                <button
                  className="m-1 text-white bg-red-600 p-3 rounded-lg"
                  onClick={() => handleDelete(indicador._id)}
                >
                  Eliminar
                </button>
              </div>
            )}
          </td>
        </tr>
      ))}
    </tbody>
  );
};
