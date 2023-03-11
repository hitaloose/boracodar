type Props = {
  musicName: string;
  artistName: string;
};

export const MusicInfo = ({ artistName, musicName }: Props) => {
  return (
    <div className="flex flex-col">
      <strong className={`text-[#E1E1E6] text-[24px]`}>{musicName}</strong>
      <span className={`text-[#E1E1E6] text-[19px] opacity-50`}>
        {artistName}
      </span>
    </div>
  );
};
