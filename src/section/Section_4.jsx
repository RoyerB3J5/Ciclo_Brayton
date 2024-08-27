function Section_4({loading, dataApi, referencia,reiniciar}) {
  return (
    <section className="flex flex-col justify-center items-center my-4 py-10 px-4 md:px-12 gap-2" ref={referencia} >
      {loading && <h2 className="font-semibold text-2xl text-center">Cargando...</h2>}
      {!loading && dataApi && (
        <>
          <h2 className=" font-semibold text-3xl">Resultados</h2>
          <hr className="w-[250px] border-t-4 border-red-800"/>
          <div className=" flex flex-col gap-3 mt-5 justify-center items-center">
            <ul className="flex flex-col gap-3 text-sm md:text-lg justify-center items-center" style={{ listStyleType: 'disc' }}>
              <li>Trabajo del compresor = {dataApi.w_comp} kJ/kg</li>
              <li>Trabajo turbina 1 = {dataApi.w_turb_1} kJ/kg</li>
              <li>Trabajo turbina 2 = {dataApi.w_turb_2} kJ/kg</li>
              <li>Trabajo Neto = {dataApi.w_neto} kJ/kg</li>
              <li>Calor de entrada total = {dataApi.q_in} kJ/kg</li>
              <li>Eficiencia = {dataApi.n}</li>
              <li>Potencia = {dataApi.pot} kW</li>
              <li>Razon de Trabajo = {dataApi.r_w}</li>
            </ul>
          </div>
          <h2 className=" font-semibold text-3xl mt-10">Gráficas</h2>
          <hr className="w-[250px] border-t-4 border-red-800"/>
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center flex-wrap gap-4 mt-4 w-full">
            {dataApi.image_T_s && (
              <div className="flex justify-center w-full lg:w-auto">
                <img
                  src={`data:image/png;base64,${dataApi.image_T_s}`}
                  alt="T-s Diagram"
                  className="w-full max-w-[300px] md:max-w-[370px] lg:max-w-[550px] object-cover"
                />
              </div>
            )}
            {dataApi.image_p_v && (
              <div className="flex justify-center w-full lg:w-auto">
                <img
                  src={`data:image/png;base64,${dataApi.image_p_v}`}
                  alt="T-s Diagram"
                  className="w-full max-w-[350px] md:max-w-[400px] lg:max-w-[550px] object-cover"
                />
              </div>
            )}
            {dataApi.image_W_pr && (
              <div className="flex justify-center w-full lg:w-auto">
                <img
                  src={`data:image/png;base64,${dataApi.image_W_pr}`}
                  alt="W-pr Diagram"
                  className="w-full max-w-[350px] md:max-w-[400px] lg:max-w-[550px] object-cover"
                />
              </div>
            )}
            {dataApi.image_n_pr && (
              <div className="flex justify-center w-full lg:w-auto">
                <img
                  src={`data:image/png;base64,${dataApi.image_n_pr}`}
                  alt="n-pr Diagram"
                  className="w-full max-w-[350px] md:max-w-[400px] lg:max-w-[550px] object-cover"
                />
              </div>
            )}
            
          </div>
          <h2 className=" font-semibold text-3xl mt-10">Tablas</h2>
          <hr className="w-[250px] border-t-4 border-red-800 mb-6"/>
          <div className="overflow-x-auto w-full  max-w-[300px] sm:max-w-[1100px] flex sm:justify-center items-center">
              <table className="w-full max-w-[1100px] table-auto shadow-lg border-collapse  p-5">
                <thead className="bg-red-800 text-white">
                  <tr>
                    <th className="px-4 py-5 border">N</th>
                    <th className="px-4 py-5 border">Temperatura (ºC)</th>
                    <th className="px-4 py-5 border">Presión (kPa)</th>
                    <th className="px-4 py-5 border">V. específico (m^3/kg)</th>
                    <th className="px-4 py-5 border">Entalpía (kJ/kg)</th>
                    <th className="px-4 py-5 border">Entropía (kJ/kg.K)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-gray-50">
                  {dataApi.calculos.map((calculo, index) => (
                    <tr key={index}>
                      <td className="px-4 py-5 border font-normal text-center">{index + 1}</td>
                      <td className="px-4 py-5 border font-normal text-center">{calculo[`t_${index + 1}`]}</td>
                      <td className="px-4 py-5 border font-normal text-center">{calculo[`p_${index + 1}`]}</td>
                      <td className="px-4 py-5 border font-normal text-center">{calculo[`v_${index + 1}`]}</td>
                      <td className="px-4 py-5 border font-normal text-center">{calculo[`h_${index + 1}`]}</td>
                      <td className="px-4 py-5 border font-normal text-center">{calculo[`s_${index + 1}`]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

          </div>
          <button className=" bg-red-800 py-3 px-3 sm:px-7 rounded-lg mt-6 hover:cursor-pointer hover:scale-105 transition-all text-white" onClick={reiniciar}>VOLVER A INTENTAR</button>
        </>
      )}
    </section>
    
  )
}

export default Section_4