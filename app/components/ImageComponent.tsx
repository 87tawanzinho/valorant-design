import Image from "next/image";
import Raze from "@/public/characters/raze.png";
export default function ImageComponent() {
  return (
    <div>
      <Image src={Raze} alt="Raze" />
    </div>
  );
}
