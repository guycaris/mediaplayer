
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

export default function Player({clips, clipIndex}){

    const handler = ({ key }) => {

        if (ESCAPE_KEYS.includes(key)) {
          console.log(`${key} key pressed!`);
        }
      };
      useEventListener("keydown", handler);


      return (
        <div className="video-player">
            <video controls>
                <source src="./clips/clip2.mp4" type="video/mp4" />
            </video>
        </div>  

      );
}