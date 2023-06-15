import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const IndicadoresChart = ({ indicadores }) => {
  return (
    <div>
      <h2 className="flex justify-center text-2xl p-5 font-semibold">
        Gráfica unidad de fomento (UF)
      </h2>
      <LineChart width={900} height={400} data={indicadores}>
        <XAxis dataKey="fechaIndicador" />
        <YAxis dataKey="valorIndicador" />
        <CartesianGrid stroke="#eee" />
        <Line type="monotone" dataKey="valorIndicador" stroke="#8884d8" />
        <Tooltip />
        <Legend />
      </LineChart>
    </div>
  );
};

export default IndicadoresChart;
