import { useState, useEffect, useRef } from 'react';
import './App.css';
import Player2 from './components/Player2';
import SequencerControls from './components/SequencerControls';
import ClipButtons from './components/ClipButtons';

const ESCAPE_KEYS = ["1", "2", "3", "4", "5"];
const useEventListener = (eventName, handler, element = window) => {
const savedHandler = useRef();

// Add a listener for keystroke
useEffect(() => {
    savedHandler.current = handler;
}, [handler]);

useEffect(() => {
    const eventListener = (event) => savedHandler.current(event);
    element.addEventListener(eventName, eventListener);
    return () => {
        element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
};

function App() {

  const videoClips = ['./clips/clip1.mp4', './clips/clip2.mp4', './clips/clip3.mp4', './clips/clip4.mp4', './clips/clip5.mp4'];
  const [selectedClip, setClip] = useState(videoClips[1]);
  // const [sequence, setSequence] = useState();

  // function addToSequence(clip){

  //   setSequence(sequence =>{
  //     const updatedSequence = [...sequence, clip]
  //     return updatedSequence;
  //   });

  //   addToSequence(clip);

  //   console.log(sequence);
  // }

  // Handle number key presses
  const handler = ({ key }) => {

    if (ESCAPE_KEYS.includes(key)) {
      
      setClip(videoClips[parseInt(key)-1]);

      console.log(selectedClip);
      
    }
  };
  useEventListener("keydown", handler);

  function handleButtonClick(buttonIndex){
    console.log(JSON.parse(buttonIndex));
    setClip(videoClips[buttonIndex])
    
  }

  
  return (
      <>
        <div className="App">
            <Player2 
              clip={selectedClip} 
            />  
            <div><p>Click on the video to get context, then hit 1, 2, 3, 4, 5</p> </div>
            <ClipButtons onButtonClick={handleButtonClick} />
            <SequencerControls />
        </div>
      </>
  );
}

export default App;
