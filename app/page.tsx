import Image from "next/image";
import NavBar from "./components/Navbar";
import SectionOne from "./components/SectionOne";
import ImageComponent from "./components/ImageComponent";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";

export default function Home() {
  return (
    <main className="flex justify-center flex-col items-center h-screen">
      <div className=" width-container bg-valorant relative overflow-y-scroll">
        <ImageComponent />

        <NavBar />
        <div className="padding-sections">
          <SectionOne />
          <SectionTwo />
          <SectionThree />
          <div className="text-center">
            <p className="text-xs text-center p-2 w-80   opacity-30">
              Este projeto foi desenvolvido para simular o cliente do Valorant.
              a sua concepção foi voltada para computadores, assim como o
              cliente original. Para uma experiência visual única, assegure-se
              de estar utilizando um computador.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
