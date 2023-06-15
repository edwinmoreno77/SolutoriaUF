import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import IndicadoresTable from '../components/IndicadoresTable';
import IndicadoresChart from '../components/IndicadoresChart';

export default function IndicadoresPage() {
  const [indicadores, setIndicadores] = useState([]);
  const [desde, setDesde] = useState('');
  const [hasta, setHasta] = useState('');

  const router = useRouter();
  const handleNavigate = () => {
    router.push('/fillDataBase');
  };

  useEffect(() => {
    async function fetchIndicadores() {
      const { data } = await axios.get('api/getIndicators');
      setIndicadores(data);
    }

    fetchIndicadores();

    const interval = setInterval(fetchIndicadores, 5000); // Actualiza cada 5 segundos (ajusta el intervalo según tus necesidades)

    return () => {
      clearInterval(interval); // Limpia el intervalo cuando se desmonta el componente
    };
  }, []);

  function filtrarIndicadores() {
    if (desde && hasta) {
      return indicadores.filter((indicador) => {
        const fecha = new Date(indicador.fechaIndicador);
        const desdeDate = new Date(desde);
        const hastaDate = new Date(hasta);

        return fecha >= desdeDate && fecha <= hastaDate;
      });
    }
    return indicadores;
  }

  return (
    <div>
      <h1 className='text-5xl text-center p-5 font-semibold text-cyan-50 bg-sky-950'>Indicadores</h1>
      <button onClick={handleNavigate} className='shadow-lg p-3 rounded-lg bg-cyan-800 text-white m-3 hover:bg-cyan-500'>Llenar base de datos </button>
      <h1 className="m-2 text-2xl underline text-center">Rango de fecha:</h1>
      <div className="my-5 text-center">
        <label htmlFor="Desde" className="m-2">
          Desde:
        </label>
        <input type="date" className="w-2/12 px-2 py-1 border rounded" value={desde} onChange={(e) => setDesde(e.target.value)} />
        <label htmlFor="Hasta" className="m-2">
          Hasta:
        </label>
        <input type="date" className="w-2/12 px-2 py-1 border rounded" value={hasta} onChange={(e) => setHasta(e.target.value)} />
      </div>
      <div className='flex justify-center'>
        <IndicadoresChart indicadores={filtrarIndicadores()} />
      </div>
      <IndicadoresTable indicadores={filtrarIndicadores()} />
    </div>
  );
}