import React from "react";
import YouTube from "react-youtube";

export const Player = ({videoId}: {videoId: string}) => {
    return <YouTube videoId={videoId} opts={playerOpts} />
}

const playerOpts: any = {
    height: 150,
    width: 400,
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
    },
};