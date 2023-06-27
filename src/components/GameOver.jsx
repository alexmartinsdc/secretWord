/* eslint-disable react/prop-types */
import './GameOver.css';

const GameOver = ({ retry, score }) => {
  return (
    <div>
      <h2>Fim do jogo!</h2>
      <h4>A sua pontuação foi: {score}</h4>
      <button onClick={retry}>Resetar jogo</button>
    </div>
  );
};

export default GameOver;
