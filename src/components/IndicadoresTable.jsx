import { TbodyComponent } from "./TbodyComponent";
import { TheadComponent } from "./TheadComponent";
import { useTableIndicator } from "@/hooks/useTableIndicator";

export default function IndicadoresTable({ indicadores }) {
  const {
    editingId,
    handleCancel,
    handleChange,
    handleDelete,
    handleEdit,
    handleSave,
    newData,
  } = useTableIndicator({ indicadores });

  return (
    <div className="m-auto">
      <table className="min-w-full bg-white border border-gray-200 table-auto">
        <thead>
          <tr>
            <th className="py-3 px-4 font-semibold uppercase">Nombre</th>
            <th className="py-3 px-4 font-semibold uppercase">Código</th>
            <th className="py-3 px-4 font-semibold uppercase">
              Unidad de medida
            </th>
            <th className="py-3 px-4 font-semibold uppercase">Valor</th>
            <th className="py-3 px-4 font-semibold uppercase">Fecha</th>
            <th className="py-3 px-4 font-semibold uppercase">Origen</th>
            <th className="py-3 px-4 font-semibold uppercase">Acciones</th>
          </tr>
        </thead>
        {editingId === null && (
          <TheadComponent
            newData={newData}
            handleChange={handleChange}
            handleSave={handleSave}
          />
        )}
        <TbodyComponent
          indicadores={indicadores}
          handleChange={handleChange}
          handleSave={handleSave}
          handleCancel={handleCancel}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          editingId={editingId}
          newData={newData}
        />
      </table>
    </div>
  );
}
