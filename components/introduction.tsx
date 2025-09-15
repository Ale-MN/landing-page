"use client";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
const Introduction = () => {
  return (
    <div className="z-20 w-full bg-black/10 justify-center ">
      <div className="z-20 grid items-center justify-center h-full p-6 mt-12 py-20 md:py-0 md:grid-cols-2">
        <Image src="/home-1.png" priority width="700" height="700" alt="pic" />

        <div className="flex flex-col mx-auto justify-center max-w-md">
          <h1 className=" text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
            Sentarse y
            <TypeAnimation
              sequence={[
                " Programar",
                1000,
                " Optimizar",
                1000,
                " Practicar",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-bold justify-center text-amber-500"
            />
          </h1>
          <p className="mx-auto text-xl  justify-center md:mx-0 md:mb-8">
            Desarrollador frontend con ganas de afrontar desafíos
          </p>

          <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10 ">
            <Link
              href="/portfolio"
              className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50 "
            >
              Proyectos
            </Link>
            <Link
              href="/contacto"
              className="px-3 py-2 transition-all border-2 cursor-pointer text-md text-amber-500 w-fit rounded-xl hover:shadow-xl hover:shadow-amber-500/50 "
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
