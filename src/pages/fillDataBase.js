import React, { useState } from "react";
import axios from 'axios';
import { useRouter } from 'next/router';


export default function Home() {

  const [isLoading, setisLoading] = useState(false);
  const [data, setData] = useState(false);

  const router = useRouter();
  const handleNavigate = () => {
    router.push('/');
  };


  async function fetchData() {
    try {
      setisLoading(true)
      const { data } = await axios.get('api/importHistoricalData');
      if (data.ok === true) {
        setData(true)
        setTimeout(() => {
          setisLoading(false)
        }, 500)
      }

    } catch (error) {
      console.error(error);
    }
  }

  const callFetchData = () => {
    fetchData();
  }


  return (
    <main>
      <div className='text-center text-bold'>
        <h1 className="p-3 bg-sky-900 text-2xl text-white font-extralight font-serif shadow-lg">Carga de datos</h1>
        <div className="bg-sky-50 h-screen">
          <div className="p-10 text-2xl font-extralight font-serif">
            {
              isLoading ? (<h1>Cargando...</h1>)
                : data ? <h1>Base de datos cargada</h1> : <h1>Presiona el boton para cargar la base de datos</h1>
            }
          </div>
          <button
            className="p-3 my-10 bg-orange-500 hover:bg-orange-600 shadow-lg rounded-lg text-white"
            onClick={callFetchData}
          >
            Llenar DB
          </button>
          <button onClick={handleNavigate} className='shadow-lg p-3 rounded-lg bg-cyan-800 text-white m-3 hover:bg-cyan-500'>Volver al Inicio</button>
        </div>
      </div>
    </main>
  )
}
