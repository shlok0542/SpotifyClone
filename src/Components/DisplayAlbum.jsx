import React, { useContext } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData} from "../assets/frontend-assets/assets";
import { Clock } from "lucide-react";
import { PlayerContext } from "../Context.jsx/PlayerContext";

const DisplayAlbum = () => {
  const {playWithId} = useContext(PlayerContext)
  const { id } = useParams();
  const albumData = albumsData[id];
  return (
  <>
        <div>
          <Navbar />
          <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
            <img className="w-48 rounded " src={albumData.image} alt="" />
            <div className="flex flex-col">
              <p>Playlist</p>
              <h1 className="text-5xl font-bold mb-4 md:text-7xl">
                {albumData.name}
              </h1>
              <h4>{albumData.desc}</h4>
              <p className="mt-1">
                <img
                  className="inline-block w-5"
                  src={assets.spotify_logo}
                  alt=""
                />
                <b> Spotify </b>
                • 1,232,856 likes
                • <b>50 songs </b>
                about 2hr 30 min
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7] gap-4">
            <p><b className="mr-4 text-center">#</b>Title</p>
            <p className="hidden sm:block text-center">Album</p>
            <p className="hidden md:block text-center">Date Added</p>
            <p className="flex justify-center relative left-2"><Clock/></p>
        </div>
        {songsData.map((item,index)=>
          (
            <div onClick={()=>{
              playWithId(item.id)
            }} key={index} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7] gap-4">
            <p className="text-white flex items-center">
              <b className="mr-4 text-[#a7a7a7]">{index+1}</b>
              <img className="w-10 mr-5 inline " src={item.image} alt="" />
            <span className="text-nowrap">{item.name}</span>
            </p>
            <p className="text-[15px] hidden sm:block text-center">{albumData.name}</p>
            <p className="text-[15px] hidden md:block text-center">5 days ago</p>
            <p className="text-[15px] ml-5 text-center ">{item.duration}</p>
            </div>
          )
        )}
    </>
  )
}

export default DisplayAlbum;
