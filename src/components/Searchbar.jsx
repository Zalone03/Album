import React from 'react'

const Searchbar = ({ setQuery, setCategoria, setActivateSearch }) => {
  const categorias = [
    "Natureza",
    "Pessoas",
    "Tecnologia",
    "Animais",
    "Arquitetura",
    "Viagem",
    "Comida",
    "Esportes",
    "Moda",
  ];

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Pesquisar fotos..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={() => setActivateSearch(true)}>Pesquisar</button>
      <select
        onChange={(e) => {
          setCategoria(e.target.value);
          setActivateSearch(true);
        }}
      >
        <option value="">Todas as categorias</option>
        {categorias.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Searchbar