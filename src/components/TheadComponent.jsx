import React from "react";

export const TheadComponent = ({ newData, handleChange, handleSave }) => {
  return (
    <thead>
      <tr>
        <td className="m-1 p-1">
          <input
            type="text"
            name="nombreIndicador"
            value={newData.nombreIndicador}
            onChange={handleChange}
            className="w-full px-2 py-1 border rounded"
          />
        </td>
        <td className="m-1 p-1">
          <input
            type="text"
            name="codigoIndicador"
            value={newData.codigoIndicador}
            onChange={handleChange}
            className="w-full px-2 py-1 border rounded"
          />
        </td>
        <td className="m-1 p-1">
          <input
            type="text"
            name="unidadMedidaIndicador"
            value={newData.unidadMedidaIndicador}
            onChange={handleChange}
            className="w-full px-2 py-1 border rounded"
          />
        </td>
        <td className="m-1 p-1">
          <input
            type="number"
            name="valorIndicador"
            value={newData.valorIndicador}
            onChange={handleChange}
            className="w-full px-2 py-1 border rounded"
          />
        </td>
        <td className="m-1 p-1">
          <input
            type="text"
            name="fechaIndicador"
            value={newData.fechaIndicador}
            onChange={handleChange}
            className="w-full px-2 py-1 border rounded"
          />
        </td>
        <td className="m-1 p-1">
          <input
            type="text"
            name="origenIndicador"
            value={newData.origenIndicador}
            onChange={handleChange}
            className="w-full px-2 py-1 border rounded"
          />
        </td>
        <td className="m-1 p-1">
          <button
            onClick={() => handleSave(null, newData)}
            className="px-4 py-2 m-1 rounded-lg bg-cyan-900 text-white"
          >
            Crear
          </button>
        </td>
      </tr>
    </thead>
  );
};
