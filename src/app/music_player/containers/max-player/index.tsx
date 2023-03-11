"use client";

import { useCallback, useMemo, useState } from "react";
import { AlbumCover } from "../../components/album-cover";
import { MusicInfo } from "../../components/music-info";
import { PlayerControls } from "../../components/player-controls";
import { TimeLine } from "../../components/time-line";
import { Music } from "../../types/Music";

type Props = {
  music: Music;
};

export const MaxPlayer = ({ music }: Props) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timer | null>(null);
  const [playing, setPlaying] = useState(false);

  const timeToEnd = useMemo(
    () => music.time - currentTime,
    [currentTime, music.time]
  );

  const musicPercent = useMemo(() => {
    return (currentTime / music.time) * 100;
  }, [currentTime, music.time]);

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
    <div className="p-[38px] bg-[#2A2141] rounded-[10px] flex flex-col gap-y-[30px]">
      <div>
        <AlbumCover size={190} />
      </div>

      <div>
        <MusicInfo artistName={music.artist} musicName={music.name} />
      </div>

      <div>
        <PlayerControls playing={playing} onPlayClick={handlePlayClick} />
      </div>

      <div>
        <TimeLine
          currentTime={currentTime}
          timeToEnd={timeToEnd}
          percent={musicPercent}
        />
      </div>
    </div>
  );
};
