import Image from "next/image";
import valorantLogo from "@/public/valorantLogo.png";
import botaoPlay from "@/public/botao-play.png";
export default function SectionOne() {
  return (
    <main className="flex flex-col align-left p-24 gap-8  ">
      <Image src={valorantLogo} alt="logoValorant" className=" w-80 " />

      <button className=" bg-button w-20 bg-red-800 w-40 h-14 text-2xl font-bold rounded-xl flex justify-center gap-4 items-center shadow  ">
        <Image src={botaoPlay} alt="botao" className="h-10 w-10 " />

        <p>Jogar</p>
      </button>
    </main>
  );
}
