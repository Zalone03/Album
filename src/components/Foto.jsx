import React from 'react'

const Foto = ({ dados, setFotoAmpliada }) => {
  return (
  <div className="foto" onClick={() => setFotoAmpliada(dados)}>
    <img src={dados.urls.small} alt={dados.alt_description} loading="lazy" />
  </div>
  )
}
export default Foto