//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Player from './components/Player';

const videoClips = ['./clips/clip1.mp4', './clips/clip2.mp4', './clips/clip3.mp4', './clips/clip4.mp4', './clips/clip5.mp4'];

function App() {

  const [clip, setClip] = useState(videoClips[0])

  
  return (
    <div className="App">
        <Player clips={clip} />    
    </div>
  );
}

export default App;
