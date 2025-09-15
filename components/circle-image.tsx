"use client";
import Image from "next/image";
import React from "react";

export default function CircleImage() {
  return (
    <div className="bottom-0 hidden right-0 md:inline-block md:absolute">
      <Image
        src="/remolino3.png"
        width={300}
        height={300}
        alt="Circulo"
        className="w-full h-full"
      ></Image>
    </div>
  );
}
