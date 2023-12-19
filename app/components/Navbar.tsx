"use client";
import Image from "next/image";
import menu from "@/public/info.gif";
import user from "@/public/user.png";
import { useState } from "react";
export default function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="flex p-4 justify-between relative ">
      <div className="bg-slate-800 rounded p-2">
        <Image src={menu} alt="menu" className="h-6 w-6"></Image>
      </div>

      <div>
        <div
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
          className="bg-stone-900 rounded-full p-1 cursor-pointer transition-all hover:scale-110 "
        >
          <Image src={user} alt="user" />
        </div>
      </div>
      {openMenu && (
        <div className="absolute right-4 bg-zinc-900 mt-14 w-60  py-4 rounded  ">
          <div className="flex gap-4 border-b-2 pb-2 border-slate-700">
            <p className="text-stone-400 ml-4 font-bold">
              My User<span className="text-stone-500">#34345</span>
            </p>
          </div>

          <div className="p-8 flex flex-col gap-4 text-md font-bold transition-all hoverMenu">
            <p className="text-stone-400  hoverMenu">DETALHES DA CONTA</p>
            <p className="text-stone-400">SEGURANÇA</p>
            <p className="text-stone-400">CONFIGURAÇÕES</p>
            <p className="text-stone-400">ENCERRAR SESSÃO</p>
            <p className="text-stone-400">SAIR</p>
          </div>
        </div>
      )}
    </header>
  );
}
