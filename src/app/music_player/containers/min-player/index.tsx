"use client";

import { useCallback, useState } from "react";
import { AlbumCover } from "../../components/album-cover";
import { MusicInfo } from "../../components/music-info";
import { PlayerControls } from "../../components/player-controls";
import { Music } from "../../types/Music";

type Props = {
  music: Music;
};

export const MinPlayer = ({ music }: Props) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timer | null>(null);
  const [playing, setPlaying] = useState(false);

  const handlePauseClick = useCallback(() => {
    setPlaying(false);
    setCurrentTime(0);
    if (intervalId) {
      clearInterval(intervalId);
    }
  }, [intervalId]);

  const handlePlayClick = useCallback(() => {
    setPlaying(true);
    const id = setInterval(() => {
      setCurrentTime((prev) => {
        const next = prev + 1;
        if (next > music.time) {
          clearInterval(id);
          handlePauseClick();
          return 0;
        }

        return next;
      });
    }, 1000);
    setIntervalId(id);
  }, [handlePauseClick, music.time]);

  return (
    <div
      id="min-player"
      className="p-[29px] bg-[#2A2141] rounded-[10px] flex flex-col gap-y-[30px]"
    >
      <div className="flex gap-x-[30px] items-center">
        <AlbumCover size={84} />
        <MusicInfo artistName={music.artist} musicName={music.name} />
      </div>

      <div>
        <PlayerControls playing={playing} onPlayClick={handlePlayClick} />
      </div>
    </div>
  );
};
