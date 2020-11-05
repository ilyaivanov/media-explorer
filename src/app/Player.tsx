import React from "react";
import YouTube from "react-youtube";
import "./Player.css";
import { dispatch, actions } from "./state";

export const Player = ({ videoId }: { videoId?: string }) => {
  return (
    <div className="player">
      <YouTube
        videoId={videoId}
        opts={playerOpts}
        onEnd={() => {
          dispatch(actions.playNextTrack());
        }}
      />
    </div>
  );
};

const playerOpts: any = {
  height: 150,
  width: 400,
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};
