import ReactPlayer from "react-player";

export default function Player({clip}){

    return (
      <div className="video-player">
          <ReactPlayer 
          playing={true}
          loop={true}
          url={clip}
          />
      </div>  
    );
}