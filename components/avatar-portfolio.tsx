import MotionTransition from "./transition-component";
import Image from "next/image";

export default function AvatarPortfolio() {
  return (
    <MotionTransition
      position="right"
      className="bottom-0 left-0 hidden xl:inline-block xl:absolute"
    >
      <Image
        src="/services4.png"
        width={400}
        height={400}
        className="w-full h-full"
        alt="Avatar"
      ></Image>
    </MotionTransition>
  );
}
