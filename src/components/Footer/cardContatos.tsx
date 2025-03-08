import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { FooterProps } from "./footer";



export function CardContatos({ metadata }: { metadata: FooterProps }) {
  return (
    <div
      className="w-50 md:w-80 min-h-50 flex p-3 text-gray-200 bg-zinc-800/95 border border-primary text-xs rounded-lg shadow-lg relative z-50 left-3.5 md:left-30">
      <div className="w-full h-full flex flex-col gap-3 border p-4 border-primary rounded-lg">
        <h3 className="text-primary text-2xl text-center md:text-5xl">STIG TATTOO</h3>
        {metadata.contato.add_numero.map(numero => (
          <p key={numero.numero} className="inline-flex gap-2 md:text-sm"><FaWhatsapp size={18} className="text-primary" />{numero.numero}</p>
        ))}
        <p
          className="inline-flex gap-2 md:text-sm">
          <FaInstagram size={18} className="text-primary" />@{metadata.contato.instagram}
        </p>
        <Link
          href={metadata.contato.url}
          target="_blank"
          className="inline-flex gap-2 md:text-sm">
          <LuMapPin size={18} className="text-primary animate-bounce" />{metadata.contato.titulo_localizacao}
        </Link>

      </div>
    </div>
  )
}