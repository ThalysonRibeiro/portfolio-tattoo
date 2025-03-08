import Image from "next/image";
import { ServiceProps } from "./services";

export function CardService({ metadata }: { metadata: ServiceProps }) {
  return (
    <div className="w-full mb-6 place-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 gap-6 mt-10">
      {metadata?.card_servicos.map(item => (
        <div key={item.titulo} className="w-60 border border-zinc-700 bg-zinc-950 rounded-lg overflow-hidden">
          <div>
            <Image
              src={item.imagem.url}
              alt={item.titulo}
              width={500}
              height={500}
              className="bg-cover h-full w-full object-cover transition-all duration-300 hover:scale-110 hover:rotate-1"
            />
          </div>
          <div className="p-4">
            <h2 className="text-gray-200 text-2xl">{item.titulo}</h2>
            <p className="text-gray-400">{item.descricao}</p>
          </div>
        </div>
      ))}
    </div>
  )
}