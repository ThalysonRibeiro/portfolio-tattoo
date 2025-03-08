import { EquipamentosProps } from "@/utils/home-type";
import Image from "next/image";
interface AboutProps {
  sobre: {
    imagem_artista: {
      url: string;
      imgix_url: string;
    }
    descricao: string;
    equipamentos: EquipamentosProps[];
  };
}

export function About({ metadata }: { metadata: AboutProps }) {
  return (
    <div className="p-4 flex flex-col gap-6">
      <h1 className="text-primary text-2xl md:text-4xl text-center mb-10">Sobre STIG TATTOO</h1>
      <div className="max-w-7xl w-full p-4 flex flex-col gap-6 md:flex-row">
        <div className="w-full md:w-2/5">
          <Image
            src={metadata?.sobre?.imagem_artista.url}
            alt="imagem do artista"
            width={500}
            height={500}
            className="bg-cover h-full w-full object-cover rounded-lg"
          />
        </div>
        <div className="w-full md:w-3/5">
          <p className="text-gray-400 mb-4">{metadata?.sobre?.descricao}</p>

          <div className="flex flex-wrap  gap-3 text-gray-200 font-bold mb-4">
            {metadata?.sobre?.equipamentos?.map(tinta => (
              <p className="capitalize hover:text-primary bg-zinc-700 px-1 py-0.5 rounded-md" key={tinta?.tintas}>{tinta?.tintas}</p>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 text-gray-200 font-bold mb-4">
            {metadata?.sobre?.equipamentos?.map(esquip => (
              <p className="capitalize hover:text-primary bg-zinc-700 px-1 py-0.5 rounded-md" key={esquip?.maquinas}>{esquip?.maquinas}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}