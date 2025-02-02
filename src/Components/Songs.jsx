import React, { useContext } from "react";
import SongCard from "./SongCard";
import { myContext } from "./Context";

function Songs() {
  const {songs} = useContext(myContext);
  const song= songs[0];
  return (
    <div className="songs h-full w-[74%] bg-zinc-800 p-5 flex flex-wrap gap-5 justify-evenly rounded-lg overflow-y-scroll no-scrollbar">
      {song.map((item, index) => (
        <SongCard key={index} data={item} />
      ))}
    </div>
  );
}

export default Songs;
