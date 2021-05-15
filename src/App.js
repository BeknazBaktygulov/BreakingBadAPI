import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import CharacterGrid from './components/characters/CharacterGrid';
import Header from './components/Header';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters`)
      console.log(result.data)
      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems();
  }, [])

  return (
    <div className="container">
     <Header />
     <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
