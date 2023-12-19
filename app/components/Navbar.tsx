import Image from "next/image";
import menu from "@/public/info.gif";
import user from "@/public/user.png";
export default function NavBar() {
  return (
    <header className="flex p-4 justify-between">
      <div className="bg-slate-800 rounded p-2">
        <Image src={menu} alt="menu" className="h-6 w-6"></Image>
      </div>

      <div>
        <div className="bg-gray-800 rounded-full p-1">
          <Image src={user} alt="user" />
        </div>
      </div>
    </header>
  );
}
