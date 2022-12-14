import React from 'react';
import { useRecoilValue } from 'recoil';
import { playlistState } from '../atoms/playlistAtom';
import Song from './Song';


function Songs() {
    const playlist = useRecoilValue(playlistState);

    console.log("playlist tracks: ", playlist);
    return (
        <div className="px-8 flex flex-col space-y-1 pb-28 text-white">

            {playlist?.tracks.items.map((track, i) => {
                return <Song key={track.track.id}  track={track} order={i} />
            })}
        </div>
    )
}

export default Songs;