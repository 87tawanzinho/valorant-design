import Image from "next/image";
import NavBar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex justify-center flex-col items-center h-screen">
      <div className="h-4/5  w-3/5 bg-black">
        <NavBar />
      </div>
    </main>
  );
}
