import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import CharacterGrid from './components/characters/CharacterGrid';
import Header from './components/Header';
import Search from './components/ui/Search';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      console.log(result.data)
      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems();
  }, [query])

  return (
    <div className="container">
     <Header />
     <Search getQuery={(q) => setQuery(q) }/>
     <CharacterGrid items={items} isLoading={isLoading}  />
    </div>
  );
}

export default App;
