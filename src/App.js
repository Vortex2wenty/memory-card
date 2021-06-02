import React, { useState, useEffect } from 'react';
import './App.css';
import ReactSVG from './React.svg';
import AngularSVG from './Angular.svg';
import VueSVG from './Vue.svg';
import jQuerySVG from './jQuery.svg';
import NodeSVG from './Node.svg';
import SvelteSVG from './Svelte.svg';
import BackboneSVG from './Backbone.svg';
import EmberSVG from './Ember.svg';
import MeteorSVG from './Meteor.svg';
import MemoryCard from './components/MemoryCard';
import uniqid from 'uniqid';

const App = () => {
  let [highScore, setHighScore] = useState(0);
  let [currentScore, setCurrentScore] = useState(0);
  let [cardsClicked, setCardsClicked] = useState([]);
  let [targetClicked, setTargetClicked] = useState('');

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

  const checkCardValidity = (target) => {
    if (cardsClicked.includes(target)) {
      gameOver();
    } else {
      setCardsClicked((prevCardsClicked) => [...prevCardsClicked, target]);
      setCurrentScore((prevScore) => prevScore + 1);
    }
  };

  const cardClicked = (e) => {
    if (
      e.target.classList.contains('memory-card-img') ||
      e.target.classList.contains('memory-card-title')
    ) {
      setTargetClicked(e.target.parentElement);
    } else {
      setTargetClicked(e.target.parentElement.parentElement);
    }
  };

  useEffect(() => {
    if (targetClicked) {
      checkCardValidity(targetClicked);
      setTargetClicked('');
    }
  }, [targetClicked]);

  let [memoryCards] = useState([
    <MemoryCard
      img={ReactSVG}
      title="React"
      gameOver={gameOver}
      cardClicked={cardClicked}
      key={uniqid()}
      dataKey={uniqid()}
    />,
    <MemoryCard
      img={AngularSVG}
      title="Angular"
      gameOver={gameOver}
      cardClicked={cardClicked}
      key={uniqid()}
      dataKey={uniqid()}
    />,
    <MemoryCard
      img={VueSVG}
      title="Vue.js"
      gameOver={gameOver}
      cardClicked={cardClicked}
      key={uniqid()}
      dataKey={uniqid()}
    />,
    <MemoryCard
      img={jQuerySVG}
      title="jQuery"
      gameOver={gameOver}
      cardClicked={cardClicked}
      key={uniqid()}
      dataKey={uniqid()}
    />,
    <MemoryCard
      img={NodeSVG}
      title="Node.js"
      gameOver={gameOver}
      cardClicked={cardClicked}
      key={uniqid()}
      dataKey={uniqid()}
    />,
    <MemoryCard
      img={SvelteSVG}
      title="Svelte"
      gameOver={gameOver}
      cardClicked={cardClicked}
      key={uniqid()}
      dataKey={uniqid()}
    />,
    <MemoryCard
      img={BackboneSVG}
      title="Backbone.js"
      gameOver={gameOver}
      cardClicked={cardClicked}
      key={uniqid()}
      dataKey={uniqid()}
    />,
<MemoryCard
      img={EmberSVG}
      title="Ember.js"
      gameOver={gameOver}
      cardClicked={cardClicked}
      key={uniqid()}
      dataKey={uniqid()}
    />,
<MemoryCard
      img={MeteorSVG}
      title="Meteor"
      gameOver={gameOver}
      cardClicked={cardClicked}
      key={uniqid()}
      dataKey={uniqid()}
    />,
  ]);

  return (
    <div className="App">
      <div className="navbar">
        <div className="flex-item">Score: {currentScore}</div>
        <div className="flex-item">High Score: {highScore}</div>
      </div>
      <div className="flex-container">{shuffleArray(memoryCards)}</div>
    </div>
  );
};

export default App;
