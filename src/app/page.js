import Button from "@/components/Button/button";
import Image from "next/image";
import Hero from "public/hero.png";

export default function Home() {
  return (
    <div className="flex items-center gap-24">
      <div className="flex-1 flex flex-col gap-12">
        <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-hero-bg to-hero-color">
          Better design for your digital products.
        </h1>
        <p className="text-lg font-light">
          Turing your idea into Realtiy. We bring together the teams from the
          global tech industry
        </p>
        <Button title="See my works" url="/portfolio" />
      </div>

      <div className="flex-1">
        <Image
          src={Hero}
          alt="hero-image"
          width={500}
          height={500}
          className=" object-contain"
          priority={false}
        />
      </div>
    </div>
  );
}
