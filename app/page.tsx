import Image from "next/image";
import NavBar from "./components/Navbar";
import SectionOne from "./components/SectionOne";
import ImageComponent from "./components/ImageComponent";

export default function Home() {
  return (
    <main className="flex justify-center flex-col items-center h-screen">
      <ImageComponent />
      <div className="h-4/5  w-3/5 bg-valorant">
        <NavBar />
        <SectionOne />
      </div>
    </main>
  );
}
