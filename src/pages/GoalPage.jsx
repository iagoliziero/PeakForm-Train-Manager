import { useContext, useState } from "react";
import userContext from "../contexts/userContexts";

function GoalPage() {
  const { user } = useContext(userContext);

  const [selectedButtons, setSelectedButton] = useState([]);

  const buttons = [
    { id: 1, label: "Perder peso" },
    { id: 2, label: "Manter peso" },
    { id: 3, label: "Ganhar peso" },
    { id: 4, label: "Ganhar massa muscular" },
    { id: 5, label: "Melhorar a saúde" },
  ];

  const toggleSelection = (id) => {
    setSelectedButton((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((btnId) => btnId !== id)
        : [...prevSelected, id]
    );
  };

  return (
    <div className="h-screen bg-darker bg-cover bg-center bg-no-repeat flex flex-col items-center gap-12 overflow-visible">
      <div className="flex flex-col justify-center mt-16 gap-8">
        <span className="flex flex-col items-center">
          <img
            className="w-[160px] md:w-[190px] lg:w-[220px] xl:w-[250px]"
            src="src/public/logo.png"
            alt="logo"
          />
        </span>
      </div>
      <div>
        <div className="mt-5 flex flex-col gap-5">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-whiteMain text-center font-semibold">
            Obrigado, {user} Agora, vamos <br /> falar sobre suas metas.
          </h1>
          <span className="text-center text-xl text-whiteMain">
            <p>
              Escolha até 2 aspectos importantes para você, <br /> incluindo um
              objetivo relacionado ao seu peso.
            </p>
          </span>

          <div className="flex flex-col items-center mt-8 gap-8">
            {buttons.map((button) => (
              <button
                key={button.id}
                onClick={() => toggleSelection(button.id)}
                className={`text-center w-[320px] md:w-[350px] md:h-[55px] h-[50px] rounded-md bg-darker border border-gray text-3xl text-whiteMain 
                ${
                  selectedButtons.includes(button.id)
                    ? "border-yellowMain text-yellowMain text-4x1"
                    : ""
                }`}
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="mb-12 flex flex-row lg:relative mt-10 items-center md:items-center gap-6">
        <button className="w-[170px] hidden md:block md:w-[220px] h-[60px] border border-yellowMain text-2xl rounded-lg text-yellowMain hover:scale-105 transition-all font-semibold">
          Voltar
        </button>
        <button className="w-[300px] md:visible-false md:w-[220px] h-[60px] bg-yellowMain text-2xl rounded-lg hover:bg-orange hover:scale-105 transition-all font-semibold">
          Continuar
        </button>
      </div>
    </div>
  );
}

export default GoalPage;
