
import React, { useEffect, useRef } from "react";
const ESCAPE_KEYS = ["1", "2", "3", "4", "5"];
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
          //setClip(clips[key])
        }
      };
      useEventListener("keydown", handler);

      //const [clip, setClip] = useState(clips[1])


      return (
        <div className="video-player">
            <video controls>
                {clips.map((clip) => (
                    <source  src={clip} type="video/mp4" />
                ))}
                
            </video>
        </div>  

      );
}