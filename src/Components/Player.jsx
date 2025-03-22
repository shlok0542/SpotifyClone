import React, { useContext } from "react";
import { songsData } from "../assets/frontend-assets/assets";
import { Fullscreen, ListMusic, MicVocal, Minimize, Pause, Play, Repeat, Shuffle, SkipBack, SkipForward, SpeakerIcon, SquarePlay, Volume2,} from "lucide-react";
import { PlayerContext } from "../Context.jsx/PlayerContext";

const Player = () => {
  const {track,seekbar,seekbg ,playStatus,play,pause,time,previous,next,seekSong}=useContext(PlayerContext)
  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4 p-2">
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src={track.image} alt="songs" />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 12)}</p>
        </div>
        </div>
        <div className="flex flex-col items-center gap-1 m-auto">
          <div className="flex gap-4">
           <Shuffle   size={15} />
           <SkipBack onClick={previous} size={15}/>
           {playStatus?<Pause onClick={pause} size={15}/>:<Play onClick={play} size={15}/>}
            <SkipForward onClick={next} size={15}/>
            <Repeat  size={15}/>
          </div>
          <div className="flex items-center gap-5">
            <p>{time.currentTime.minute}:{time.currentTime.second}</p>
            <div onClick={seekSong} ref={seekbg} className="w-[60vw] max-w-[300px] bg-gray-300 rounded-full cursor-pointer">
              <hr ref={seekbar} className="h-1 border-none w-0 bg-green-800 rounded-full"></hr>
            </div>
            <p>{time.totalTime.minute}:{time.totalTime.second}</p>
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-2 opacity-75">
        <SquarePlay size={14}/>
        <MicVocal  size={14}/>
        <ListMusic  size={14}/>
        <SpeakerIcon size={14}/>
        <Volume2  size={14}/>
        <div className="bg-slate-50 w-10 h-1 rounded">

        </div>
        <Minimize size={14}/>
        <Fullscreen size={14} />
        </div>
    </div>
  );
};

export default Player;
