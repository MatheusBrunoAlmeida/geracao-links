"use client"
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Head from "next/head";

export default function Home() {
  return (
    <div className="w-screen flex flex-col items-center h-screen bg-white overflow-hidden relative">
      <div className="mt-20">
        <img src="/logodkm.jpg" className="w-20 h-20 rounded-full" alt="" />
      </div>

      <div className="mt-10 z-10 flex flex-col items-center">
        <h1 className="text-gray-800 font-bold">Bem vindos! 😄🎉</h1>
        <span>O que você gostaria de acessar?</span>
      </div>

      <div className="w-full z-10 p-16 gap-4 flex lg:items-center flex-col">
        <Card className="flex justify-start border-yellow-400  hover:bg-yellow-100 cursor-pointer gap-4 w-full lg:w-1/4 p-4 items-center">
          <div className="w-2 h-2 bg-yellow-400 hover:bg-white rounded-full"></div>

          <h1>Drive de atividades</h1>
        </Card>

        <Card className="flex justify-start hover:bg-green-200 border-green-400 cursor-pointer gap-4 w-full lg:w-1/4 p-4 items-center">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>

          <h1>Entrar em contato</h1>

          <img src="/whatsapp-svg.svg"className="w-4 text-green-400" color="#00770c"/>
        </Card>
      </div>

      {/* Adicionar os foguetes */}
      <div className="absolute z-0 inset-0 pointer-events-none">
        <div className="rocket-1">🌟</div>
        <div className="rocket-2">🌟</div>
        <div className="rocket-3">🌟</div>
        <div className="confet-1">🎉</div>
        <div className="confet-2">🎉</div>
        <div className="confet-3">🎉</div>
      </div>

      {/* Estilos das animações */}
      <style jsx>{`
        .rocket-1, .rocket-2, .rocket-3{
          position: absolute;
          font-size: 24px;
          animation: rocketfly 3s linear infinite;
          opacity: 0.7;
        }
        .confet-1, .confet-2, .confet-3{
          position: absolute;
          font-size: 24px;
          animation: rocketfly 3s linear infinite;
          opacity: 0.7;
        }

        .rocket-1 {
          left: 10%;
          animation-delay: 0s;
        }

        .rocket-2 {
          left: 50%;
          animation-delay: 1.5s;
        }

        .rocket-3 {
          left: 80%;
          animation-delay: 1s;
        }

        .confet-1 {
          left: 20%;
          animation-delay: 0s;
        }

        .confet-2 {
          left: 60%;
          animation-delay: 1.5s;
        }

        .confet-3 {
          left: 90%;
          animation-delay: 1s;
        }

        @keyframes rocketfly {
          0% {
            bottom: -50px;
            transform: translateY(0) rotate(0deg);
          }
          100% {
            bottom: 120%;
            transform: translateY(-100%) rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
}
