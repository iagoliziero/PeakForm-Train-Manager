import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import validator from "validator";
import Login from "../components/Login";
import { useNavigate } from "react-router-dom";
import H1 from "../components/H1";
import Logo from "../components/Logo";

function SignIn() {
  const [isShowPasswordSignIn, setIsShowPasswordSignIn] = useState(false);
  useState(false);

  const handlePasswordSignIn = () => {
    setIsShowPasswordSignIn(!isShowPasswordSignIn);
  };

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <div className="h-screen bg-darker bg-cover bg-center bg-no-repeat flex flex-col items-center gap-12 overflow-scroll no-scrollbar lg:justify-center">
      <Logo />
      <div className="flex flex-col ">
        <div className="mt-5 flex flex-col gap-3">
          <H1>
            {" "}
            Entrar em sua conta
          </H1>
          <div className="flex flex-col items-center mt-10">
            <div>
              <input
                {...register("email", {
                  required: true,
                  validate: (value) => validator.isEmail(value),
                })}
                className={`mt-5 w-[20rem] md:w-[21.875rem] md:h-[3.4375rem] h-[3.125rem] rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain focus:outline-none focus:ring-3  ${
                  errors?.email ? "border-lightRed" : "focus:border-yellowMain"
                }`}
                type="text"
                placeholder="Endereço de e-mail "
              />
              {errors?.email?.type === "required" && (
                <p className="text-lightRed mx-4 mt-1">
                  {" "}
                  O e-mail é obrigatório.{" "}
                </p>
              )}
              {errors?.email?.type === "validate" && (
                <p className="text-lightRed mx-4 mt-1">
                  {" "}
                  Digite um e-mail válido.{" "}
                </p>
              )}
            </div>
            <div>
              <input
                {...register("passwordSignIn", {
                  required: true,
                  minLength: 7,
                })}
                className={`mt-5 w-[20rem] relative left-3 md:w-[21.875rem] md:h-[3.4375rem] h-[3.125rem] rounded-md bg-darker border border-gray text-3xl p-4 text-whiteMain focus:outline-none focus:ring-3  ${
                  errors?.passwordSignIn
                    ? "border-lightRed"
                    : "focus:border-yellowMain"
                }`}
                type={isShowPasswordSignIn ? "password" : "text"}
                placeholder="Digite sue senha "
              />
              <button
                onClick={handlePasswordSignIn}
                className="text-whiteMain relative  m-0 right-[3.125rem] top-1 bottom-9 "
              >
                {" "}
                {isShowPasswordSignIn && <EyeClosed />}{" "}
                {!isShowPasswordSignIn && <Eye />}{" "}
              </button>
              {errors?.passwordSignIn?.type === "required" && (
                <p className="text-lightRed mx-4 mt-1">
                  {" "}
                  A senha é obrigatória.{" "}
                </p>
              )}
              {errors?.passwordSignIn?.type === "minLength" && (
                <p className="text-lightRed mx-4 mt-1">
                  {" "}
                  A senha deve ter pelo menos 7 caracteres.{" "}
                </p>
              )}
            </div>
          </div>
          <div className="mt-8 gap-3 flex flex-col items-center ">
            <button
              onClick={() => handleSubmit(onSubmit)()}
              className="w-[18.75rem] md:w-[22.5rem] h-[3.75rem] bg-yellowMain mt-8 text-2xl rounded-lg hover:bg-orange hover:scale-105 duration-[400ms] transition-all font-semibold"
            >
              Entrar
            </button>
            <h2 className="text-2xl lg:text-3xl font-darker text-whiteMain font-semibold text-center">
              {" "}
              Ou
            </h2>
            <div>
              <Login />
            </div>
          </div>
          <div className="flex gap-1 mt-2 mb-12 text-xl font-darker text-whiteMain justify-center">
            <h2> Não tenho uma conta!</h2>
            <button
              onClick={() => navigate(`/login`)}
              className="text-yellowMain hover:text-orange"
            >
              {" "}
              Criar agora.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
