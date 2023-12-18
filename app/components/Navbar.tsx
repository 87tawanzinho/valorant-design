import Image from "next/image";
import menu from "@/public/info.gif";
export default function NavBar() {
  return (
    <header className="flex p-4 justify-between">
      <div className="bg-slate-800 rounded p-2">
        <Image src={menu} alt="menu" className="h-6 w-6"></Image>
      </div>

      <div>
        <p>df</p>
      </div>
    </header>
  );
}
