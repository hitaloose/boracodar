import Image from "next/image";

import Prev from "../../assets/prev.png";
import Play from "../../assets/play.png";
import Next from "../../assets/next.png";

type Props = {
  playing: boolean;
  onPlayClick: () => void;
};

export const PlayerControls = ({ playing, onPlayClick }: Props) => {
  return (
    <div className="flex justify-between max-w-[190px] m-auto">
      <Image
        className="cursor-pointer"
        width={29}
        height={29}
        src={Prev}
        alt="prev"
      />
      <Image
        className="cursor-pointer"
        width={29}
        height={29}
        src={Play}
        alt={playing ? "pause" : "play"}
        onClick={onPlayClick}
      />
      <Image
        className="cursor-pointer"
        width={29}
        height={29}
        src={Next}
        alt="next"
      />
    </div>
  );
};
