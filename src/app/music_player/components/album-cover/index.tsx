import Image from "next/image";

import AlbumImage from "../../assets/album.png";

type Props = {
  size: number;
};

export const AlbumCover = ({ size }: Props) => {
  return (
    <Image
      width={size}
      height={size}
      src={AlbumImage}
      alt="album cover"
      className="rounded-[6px]"
    />
  );
};
