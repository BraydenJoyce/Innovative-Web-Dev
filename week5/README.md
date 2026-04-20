# Wildlife Photography Game

## Setup

### 1. Add your images
Place these files in the `/public` folder:

| Filename         | Description                              |
|-----------------|------------------------------------------|
| `background.jpg` | Background scene image                   |
| `animal1.png`    | First animal (transparent background)    |
| `animal2.png`    | Second animal (transparent background)   |
| `animal3.png`    | Third animal (transparent background)    |
| `camera.mp3`     | Camera shutter sound                     |

> If you use different filenames, update `ANIMALS` and `CAMERA_SOUND` at the top of `src/App.js`.

### 2. Install and run

```bash
npm install
npm start
```

## How to play
- An animal randomly walks across the screen from left to right.
- Click **📸 Take Photo** to score a point and play the camera sound.
- When the animal finishes crossing, a new round begins with a randomly selected animal.
- Score and Round are displayed at the top.
