import React, { useState, useEffect } from 'react';
import './App.css';
import ReactSVG from './React.svg';
import AngularSVG from './Angular.svg';
import VueSVG from './Vue.svg';
import MemoryCard from './components/MemoryCard';
import uniqid from 'uniqid';

const App = () => {
  let [highScore, setHighScore] = useState(0);
  let [currentScore, setCurrentScore] = useState(0);
  let [cardsClicked, setCardsClicked] = useState([]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return [...array];
  };

  const gameOver = () => {
    if (currentScore > highScore) {
      setHighScore(currentScore);
    }
    setCurrentScore(0);
    setCardsClicked([]);
  };

  const cardClicked = (e) => {
    if (cardsClicked.includes(e.target)) {
      gameOver();
    } else {
      setCardsClicked((prevCardsClicked) => [
        ...prevCardsClicked,
        e.target,
      ]);
      setCurrentScore((prevScore) => prevScore + 1);
    }
  };

  let [memoryCards, setMemoryCards] = useState([
    <MemoryCard
      img={ReactSVG}
      title="React"
      gameOver={gameOver}
      cardClicked={cardClicked}
      key={uniqid()}
    />,
    <MemoryCard
      img={AngularSVG}
      title="Angular"
      gameOver={gameOver}
      cardClicked={cardClicked}
      key={uniqid()}
    />,
    <MemoryCard
      img={VueSVG}
      title="Vue.js"
      gameOver={gameOver}
      cardClicked={cardClicked}
      key={uniqid()}
    />,
  ]);

  return (
    <div className="App">
      Score: {currentScore}
      {shuffleArray(memoryCards)}
    </div>
  );
};

export default App;
