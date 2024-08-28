import React from 'react'
import grafico from '../assets/img.jpg'
function Intro() {
  return (
    <section className='flex flex-col justify-center items-center px-3 sm:px-5 md:px-28 py-4 sm:py-10 gap-6 my-6'>
      <p className=' text-base font-medium text-center max-w-[800px]'>Los alumnos de 5to ciclo de la carrea de Ing. Mecatrónica de la Universidad Nacional de Trujillo han desarrollado una interfaz web para el cálculo de diversos parámetros como Trabajo neto, Eficiencia, Potencia, etc. de un ciclo Brayton con regeneración, calentamiento e interenfriamiento. Así también se muestran las gráficas de los procesos termodinámicos y una tabla con los resultados de presiones, temperaturas, entropías, etc. de cada proceso.</p>
      <img src={grafico} alt="Grafico de ciclo de brayton" className=' w-[270px] sm:w-[550px] shadow-md' />
    </section>
  )
}

export default Intro