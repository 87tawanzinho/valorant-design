import Image from "next/image";
import NavBar from "./components/Navbar";
import SectionOne from "./components/SectionOne";
import ImageComponent from "./components/ImageComponent";
import SectionTwo from "./components/SectionTwo";

export default function Home() {
  return (
    <main className="flex justify-center flex-col items-center h-screen">
      <div className=" width-container bg-valorant relative overflow-hidden">
        <ImageComponent />

        <NavBar />
        <div className="padding-sections">
          <SectionOne />
          <SectionTwo />
        </div>
      </div>
      <p className="text-xs text-center">
        Este projeto foi desenvolvido para simular o cliente do Valorant. Com
        isso em mente, a sua concepção foi voltada para computadores, assim como
        o cliente original. Para uma experiência visual única, assegure-se de
        estar utilizando um computador.
      </p>
    </main>
  );
}
