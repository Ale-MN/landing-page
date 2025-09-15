import AvatarPortfolio from "@/components/avatar-portfolio";
import ContainerPage from "@/components/container";
import TransitionPage from "@/components/transition-page";

export default function Contacto() {
  return (
    <ContainerPage>
      <TransitionPage />
      <AvatarPortfolio />
      <div className="flex flex-col font-bold justify-center text-3xl gap-4 md:text-5xl">
        <h1 className="text-center">E-mail: alejandromann19@gmail.com </h1>
        <a
          href="https://linkedin.com/in/victor-alejandro-mannino-902453277"
          target="_blank"
          className=" flex border items-center border-white rounded-full p-2 mt-2 justify-center text-center hover:bg-white hover:text-sky-400"
        >
          Linkedin
        </a>
      </div>
    </ContainerPage>
  );
}
