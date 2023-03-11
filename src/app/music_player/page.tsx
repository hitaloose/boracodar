import { MaxPlayer } from "./containers/max-player";
import { MedPlayer } from "./containers/med-player";
import { MinPlayer } from "./containers/min-player";
import { Music } from "./types/Music";

export default function Page() {
  const music: Music = {
    name: "Yellow",
    artist: "Coldplay",
    time: 5
  };

  return (
    <div className="flex gap-x-[32px]">
      <div className="flex flex-1">
        <MaxPlayer music={music} />
      </div>

      <div className="flex flex-col gap-y-[30px]">
        <MedPlayer music={music} />

        <MinPlayer music={music} />
      </div>
    </div>
  );
}
