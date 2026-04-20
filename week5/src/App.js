import React, { useState, useEffect, useRef } from 'react';
import './App.css';


const ANIMALS = ['snake.png', 'scorpion.png', 'coyote.png'];

const CAMERA_SOUND = 'camera.mp3';

// Animal movement speed
const SPEED = 0.3;

// Tick interval in milliseconds
const TICK_MS = 16;
// ─────────────────────────────────────────────────────────────────────────────

function getRandomAnimal() {
  const index = Math.floor(Math.random() * ANIMALS.length);
  return ANIMALS[index];
}

export default function App() {
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);
  const [currentAnimal, setCurrentAnimal] = useState(getRandomAnimal);
  const [position, setPosition] = useState(-15); // starts off-screen left (%)
  const [flashMsg, setFlashMsg] = useState('');
  const audioRef = useRef(null);

  // Move the animal across the screen
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        if (prev >= 105) {
          // Animal has crossed the screen, new round
          setRound((r) => r + 1);
          setCurrentAnimal(getRandomAnimal());
          return -15; // reset to off screen left
        }
        return prev + SPEED;
      });
    }, TICK_MS);

    return () => clearInterval(interval);
  }, []);

  // Take a photo, play sound and increase score
  function handleTakePhoto() {
    // Play sound
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => { });
    }

    setScore((s) => s + 1);

    // flash message
    setFlashMsg('📸 Photo Taken!');
    setTimeout(() => setFlashMsg(''), 800);
  }

  return (
    <div className="game-container">
      {/* Hidden audio element */}
      <audio ref={audioRef} src={CAMERA_SOUND} preload="auto" />

      {/* HUD */}
      <div className="hud">
        <h1 className="score">Score: {score}</h1>
        <h2 className="round">Round: {round}</h2>
      </div>

      {/* Flash message */}
      {flashMsg && <div className="flash-msg">{flashMsg}</div>}

      {/* Walking animal */}
      <img
        className="animal"
        src={currentAnimal}
        alt="wildlife"
        style={{ left: `${position}%` }}
      />

      {/* Camera button */}
      <button className="photo-btn" onClick={handleTakePhoto}>
        📸 Take Photo
      </button>
    </div>
  );
}
