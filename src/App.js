//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Player2 from './components/Player2';
import SequencerControls from './components/SequencerControls';
import ClipButtons from './components/ClipButtons';

const videoClips = ['./clips/clip1.mp4', './clips/clip2.mp4', './clips/clip3.mp4', './clips/clip4.mp4', './clips/clip5.mp4'];

function App() {


  //const [clip, setClip] = useState(videoClips[0+1]);
  const [sequence, setSequence] = useState();

  function addToSequence(clip){

    setSequence(sequence =>{
      const updatedSequence = [...sequence, clip]
      return updatedSequence;
    });

    addToSequence(clip);

    console.log(sequence);
  }

  function changeClip(){}
  
  return (
    <>
      <div className="App">
          <Player2 
            clips={videoClips} 
            onAddToSequence={addToSequence} 
            onChangeClip={changeClip}
          />  
          <div><p>Click on the video to get context, then hit 1, 2, 3, 4, 5</p> </div>
          <ClipButtons />
          <SequencerControls />
      </div>
    </>
  );
}

export default App;
