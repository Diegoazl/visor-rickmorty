import { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './components/CharacterCard';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(res => setCharacters(res.data.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={styles.body}>
      <header style={styles.header}>
        <h1 style={styles.title}>👽 Galería Interdimensional - Rick & Morty</h1>
        <p style={styles.subtitle}>Explora personajes de todas las dimensiones. Vota con actitud.</p>
      </header>

      <div style={styles.grid}>
        {characters.map(char => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  body: {
    backgroundColor: '#111827',
    minHeight: '100vh',
    color: '#f9fafb',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    padding: '20px'
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px'
  },
  title: {
    fontSize: '2.4rem',
    color: '#38bdf8'
  },
  subtitle: {
    fontSize: '1rem',
    color: '#9ca3af'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px'
  }
};

export default App;
