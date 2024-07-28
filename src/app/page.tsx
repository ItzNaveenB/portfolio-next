import Image from "next/image";
import About from "./About1/About";
import Artcles from "./Articles/Artcles";
import HomePage from "./home/page";

export default function Home() {
  return (
    <main>
      <HomePage />
      <About />
      <Artcles />
    </main>
  );
}
