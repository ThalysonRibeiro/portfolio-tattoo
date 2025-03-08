import Image from "next/image";
import { ButtonWhats } from "./buttonWhtas";
import { AddNumeroProps } from "@/utils/home-type";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

interface HeroProps {
  hero: {
    artista_hero: {
      url: string;
      imgix_url: string;
    }
    logo_hero: {
      url: string;
      imgix_url: string;
    }
    frase_hero: string;
  }
  contato: {
    menssagem_whats: string;
    instagram: string;
    add_numero: AddNumeroProps[];
  }
}

export function Hero({ metadata }: { metadata: HeroProps }) {
  // const data = new Date();
  // const diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

  // const diaDaSemana = diasDaSemana[data.getDay()];
  const numero = metadata?.contato?.add_numero[0]?.numero.toLowerCase()
    .replace("(", "")
    .replace(")", "")
    .replace("-", "")
    .replace(/\s/g, '');

  const redrectWhats = `https://wa.me/${numero}?text=${encodeURIComponent(metadata?.contato?.menssagem_whats)}`

  return (
    <div id="inicio" className="w-full min-h-screen flex justify-center mt-20">

      <ButtonWhats
        phone={numero}
        message={metadata?.contato?.menssagem_whats}
      />

      <div className="flex-1  max-w-7xl w-full flex flex-col items-center justify-center gap-4 md:flex-row">

        <div className="flex flex-col items-center justify-center p-4 md:w-1/2">
          <Image
            src={metadata?.hero?.logo_hero?.url}
            alt="imagem do logo do site"
            width={500}
            height={500}
            className="drop-shadow-xl"
          />
          <h2 className="relative -top-7 font-title font-extrabold text-5xl md:-top-9  md:text-8xl text-primary">
            TATTOO
          </h2>
          <p className="text-gray-400 mb-4">
            &quot;{metadata?.hero.frase_hero}&quot;
          </p>
          <div className="w-full inline-flex justify-evenly">
            <Link
              href={redrectWhats}
              target="_blank"
              className="shadowWhats inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500 text-gray-100 font-bold cursor-pointer"
            >
              <FaWhatsapp size={28} />
              <p>Agende seu horário</p>
            </Link>
            <Link
              href={`https://www.instagram.com/${metadata?.contato?.instagram}/`}
              target="_blank"
              className="shadowInsta inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-violet-500 text-gray-100 font-bold cursor-pointer"
            >
              <FaInstagram size={28} />
              <p>Instagram</p>
            </Link>
          </div>
        </div>

        <div className="flex-1 w-full md:w-1/2">
          <div className="p-4 w-full h-full">
            <Image
              src={metadata?.hero?.artista_hero?.url}
              alt="imagem do artisata no hero"
              width={780}
              height={780}
              className="bg-cover h-full w-full object-cover drop-shadow-xl"
            />
          </div>
        </div>

      </div>
    </div>
  )
}