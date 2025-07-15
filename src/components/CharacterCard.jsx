import { useState } from 'react';

function CharacterCard({ character }) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <div style={styles.card}>
      <img src={character.image} alt={character.name} style={styles.image} />
      <h3 style={styles.name}>{character.name}</h3>
      <p style={styles.detail}>🧬 Especie: {character.species}</p>
      <p style={styles.detail}>💀 Estado: {character.status}</p>

      <div style={styles.buttonGroup}>
        <button onClick={() => setLikes(likes + 1)} style={styles.likeBtn}>👍 Like</button>
        <button onClick={() => setDislikes(dislikes + 1)} style={styles.dislikeBtn}>👎 Dislike</button>
      </div>

      <p style={styles.score}>🔥 Puntaje: {likes - dislikes}</p>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: '#1f2937',
    borderRadius: '12px',
    padding: '16px',
    textAlign: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
    transition: 'transform 0.3s ease',
    color: '#f3f4f6'
  },
  image: {
    width: '100%',
    borderRadius: '10px',
    marginBottom: '12px'
  },
  name: {
    fontSize: '1.3rem',
    color: '#38bdf8',
    marginBottom: '6px'
  },
  detail: {
    fontSize: '0.95rem',
    color: '#d1d5db',
    margin: '4px 0'
  },
  buttonGroup: {
    marginTop: '12px'
  },
  likeBtn: {
    marginRight: '10px',
    padding: '8px 14px',
    backgroundColor: '#10b981',
    border: 'none',
    borderRadius: '6px',
    color: '#fff',
    cursor: 'pointer',
    fontWeight: 'bold'
  },
  dislikeBtn: {
    padding: '8px 14px',
    backgroundColor: '#ef4444',
    border: 'none',
    borderRadius: '6px',
    color: '#fff',
    cursor: 'pointer',
    fontWeight: 'bold'
  },
  score: {
    marginTop: '10px',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#facc15'
  }
};

export default CharacterCard;
