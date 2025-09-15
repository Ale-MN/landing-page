import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const page = () => {
  return (
    <>
      <TransitionPage />
      <CircleImage />
      <AvatarServices></AvatarServices>
      <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2 md:px-20">
        <div className="max-w-[450px] mt-20">
          <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
            Mis <span className="font-bold text-amber-500">Servicios</span>
          </h1>
          <p className="mb-3 text-xl text-gray-300">
            Desarrollo frontend utilizando, HTML, CSS, JavaScript-React,
            Tailwind.
          </p>
          <button className="px-3 py-2 rounded-lg bg-amber-500 hover:bg-amber-500/65">
            Contacta Conmigo
          </button>
        </div>
        <div className="">
          <SliderServices />
        </div>
      </div>
    </>
  );
};

export default page;
