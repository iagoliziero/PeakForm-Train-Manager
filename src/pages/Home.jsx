import { CircleUserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";
import H1 from "../components/H1";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-darker bg-cover bg-center bg-no-repeat flex flex-col items-center gap-12 lg:justify-center custom-scrollbar">
      <div className=" flex flex-col justify-center 3xl:mt-0 gap-8">
        <div>
          <button
            onClick={() => navigate(`/signin`)}
            className="w-10 h-10 top-[5rem] md:left-[21.875rem] lg:left-[34.375rem] rounded-full items-center bg-yellowMain hover:bg-orange flex justify-center relative left-52 "
          >
            {" "}
            <CircleUserRound size={30} />{" "}
          </button>
        </div>
        <span className="flex items-center justify-center">
          <H1>Bem vindo ao</H1>
        </span>

        <span className="flex flex-col items-center">
          <img
            className="w-[9rem] md:w-[11rem] xl:w-[12rem]"
            src="../../logo.png"
            alt="logo"
          />
        </span>
      </div>
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="flex flex-col gap-4">
          <img
            className="w-[21.875rem] lg:w-[14.75rem] xxl:w-[18rem] rounded-2xl"
            src="../../image1.png"
            alt="imagem 1"
          />
          <p className="text-3xl text-whiteMain text-center">
            Veja seus treinos <br />
            virarem conquistas.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <img
            className="w-[21.875rem] xxl:w-[18rem] lg:w-[14.75rem] rounded-2xl"
            src="../../image2.png"
            alt="imagem 2"
          />
          <p className="text-3xl text-whiteMain text-center">
            Transforme esforço <br /> em progresso.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <img
            className="w-[21.875rem] xxl:w-[18rem] lg:w-[14.75rem] rounded-2xl"
            src="../../image3.png"
            alt="imagem 3"
          />
          <p className="text-3xl text-whiteMain text-center">
            Organização, <br /> disciplina e resultado.
          </p>
        </div>
      </div>
      <div className="flex flex-col sticky bottom-0 lg:relative items-center md:items-center">
        <button
          onClick={() => navigate(`/nome`)}
          className="w-[18rem] md:w-[19rem] xxl:h-[3.5rem] h-[3.75rem]
                    bg-yellowMain mb-12 text-2xl rounded-lg hover:bg-orange hover:scale-105 transition-all duration-[400ms] font-semibold"
        >
          Continuar
        </button>
      </div>
    </div>
  );
}

export default Home;
