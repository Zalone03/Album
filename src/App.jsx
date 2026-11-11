import { useState, useEffect } from 'react'
import FotoAmpliada from './components/FotoAmpliada'
import FotoList from './components/FotoList'
import Searchbar from './components/Searchbar'

import axios from 'axios'

function App() {
  const [query, setQuery] = useState("");
  const [categoria, setCategoria] = useState("");
  const [fotos, setFotos] = useState([]);
  const [fotoAmpliada, setFotoAmpliada] = useState(null);
  const [activateSearch, setActivateSearch] = useState(false);

  const fetchData = async () => {
    const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;
    const searchQuery = [query, categoria].filter(Boolean).join(" ");

    try {
      if (searchQuery) {
        const response = await axios.get("https://api.unsplash.com/search/photos", {
          params: {
            client_id: apiKey,
            query: searchQuery,
            per_page: 12,
          },
        });
        setFotos(response.data.results);
      } else {
        const response = await axios.get("https://api.unsplash.com/photos/random", {
          params: {
            client_id: apiKey,
            count: 12,
          },
        });
        setFotos(response.data);
      }
    } catch (error) {
      console.error("Erro ao carregar fotos:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (activateSearch) {
      fetchData();
      setActivateSearch(false);
    }
  }, [activateSearch]);

  return (
    <div className="container">
      <header className="header">
        <h1>Álbum de Fotos</h1>
        <p>Explore imagens do Unsplash por tema ou categoria</p>
      </header>
      <Searchbar
        setQuery={setQuery}
        setCategoria={setCategoria}
        setActivateSearch={setActivateSearch}
      />
      <FotoList fotos={fotos} setFotoAmpliada={setFotoAmpliada} />
      {fotoAmpliada && (
        <FotoAmpliada foto={fotoAmpliada} setFotoAmpliada={setFotoAmpliada} />
      )}
    </div>
  );
}

export default App