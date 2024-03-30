//import logo from './logo.svg';
import './App.css';
import Player2 from './components/Player2';

const videoClips = ['./clips/clip1.mp4', './clips/clip2.mp4', './clips/clip3.mp4', './clips/clip4.mp4', './clips/clip5.mp4'];

function App() {


  
  return (
    <div className="App">
        <Player2 clips={videoClips} />    
    </div>
  );
}

export default App;
