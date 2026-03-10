import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Card from './components/card';
import Loader from './components/Loader';
import './App.css';

export default function App() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    const storedCards = localStorage.getItem('cards');
    if (storedCards) {
      setCards(JSON.parse(storedCards));
    }
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const addCard = (data) => {
    const newCards = [...cards, data];
    setCards(newCards);
    localStorage.setItem('cards', JSON.stringify(newCards));
  };

  const updateCard = (data) => {
    const newCards = cards.map(card => card.id === data.id ? data : card);
    setCards(newCards);
    localStorage.setItem('cards', JSON.stringify(newCards));
    setEditData(null);
  };

  const deleteCard = (id) => {
    const newCards = cards.filter(card => card.id !== id);
    setCards(newCards);
    localStorage.setItem('cards', JSON.stringify(newCards));
  };

  const editCard = (data) => {
    setEditData(data);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="app">
      <Navbar />
      <Form addCard={addCard} editData={editData} updateCard={updateCard} />
      <div className="cards-container">
        {cards.map(card => (
          <Card key={card.id} data={card} onEdit={editCard} onDelete={deleteCard} />
        ))}
      </div>
    </div>
  );
}