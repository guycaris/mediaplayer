
import React, { useEffect, useRef, useState } from "react";

import ReactPlayer from "react-player";
// const ESCAPE_KEYS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const ESCAPE_KEYS = ["0", "1", "2", "3", "4"];
const useEventListener = (eventName, handler, element = window) => {
const savedHandler = useRef();

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

export default function Player({clips}){

    const handler = ({ key }) => {

        if (ESCAPE_KEYS.includes(key)) {
          console.log(`${key} key pressed!`);
          setClip(clips[key+1]);
          
        }
      };
      useEventListener("keydown", handler);

      const [clip, setClip] = useState(clips[0+1]);
      const [sequence, setSequence] = useState();

      const recordSequence = (clipIndex) => {

      }


      return (
        <div className="video-player">
            <ReactPlayer url={clip} />
        </div>  
      );
}