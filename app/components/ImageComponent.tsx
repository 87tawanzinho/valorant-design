import Image from "next/image";
import Raze from "@/public/characters/raze.png";
import Yoru from "@/public/characters/yoru.png";
export default function ImageComponent() {
  return (
    <div className="relative end-0">
      <Image
        src={Raze}
        alt="Raze"
        className="images-bg absolute end-0 top-32 opacity-75 "
      />
      <Image
        src={Yoru}
        alt="Raze"
        className=" images-bg  absolute end-48 top-80 opacity-75"
      />
    </div>
  );
}
