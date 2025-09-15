import MotionTransition from "./transition-component";
import Image from "next/image";

export default function AvatarServices() {
  return (
    <MotionTransition
      position="right"
      className="bottom-0 left-0 hidden md:inline-block md:absolute"
    >
      <Image
        src="/services2.png"
        width={300}
        height={300}
        className="w-[350px] h-full"
        alt="Avatar"
      ></Image>
    </MotionTransition>
  );
}
