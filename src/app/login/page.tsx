import Image from "next/image";

import bg from "./assets/bg.png";
import logo from "./assets/logo.svg";
import { Input } from "./components/input";
import { Link } from "./components/link";

export default function Page() {
  return (
    <div className="flex justify-between w-[1440px] h-[900px] bg-gray-50">
      <div className="px-28 py-10 grid">
        <Image src={logo} alt="logo" />

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4 max-w-[351px]">
            <h1 className="text-gray-800 text-4xl font-bold">
              Acesse a plataforma
            </h1>
            <span className="text-gray-600 text-base font-normal">
              Faça login ou registre-se para começar a construir seus projetos
              ainda hoje.
            </span>
          </div>

          <form className="flex flex-col gap-8" action="submit">
            <div className="flex flex-col gap-4">
              <Input
                label="E-mail"
                placeholder="Digite seu e-mail"
                type="email"
              />
              <Input
                label="Senha"
                labelRigth={<Link>Esqueceu a senha?</Link>}
                placeholder="Digite sua senha"
                type="password"
              />
            </div>

            <button className="bg-[#7C3AED] hover:bg-[#9F67FF] focus:bg-[#9F67FF] transition rounded py-4 px-6 text-white text-base font-bold">
              Entrar
            </button>

            <span className="text-gray-600 text-base font-normal">
              Ainda não tem conta? <Link>Inscreva-se</Link>
            </span>
          </form>
        </div>
      </div>

      <Image src={bg} alt="backgound" />
    </div>
  );
}
