import { FaRegClock } from "react-icons/fa";
import { ServiceProps } from "./services";

export function Schedules({ metadata }: { metadata: ServiceProps }) {
  return (
    <div className="w-80 sm:w-100 flex flex-col  border border-zinc-700 bg-zinc-800 rounded-lg p-4">
      <p className="inline-flex items-center text-xl gap-2.5 mb-4">
        <FaRegClock className="text-primary animate-pulse" size={20} />
        {metadata?.agenda?.titulo_agenda}
      </p>
      <div className="flex flex-col justify-between gap-6">
        <table className="text-sm text-gray-400 w-full">
          <tbody>
            <tr className="border-solid bg-zinc-700">
              <td className="p-1">Segunda-feira</td>
              <td className="p-1"> {metadata?.agenda?.horario_padrao}</td>
            </tr>
            <tr className="">
              <td className="p-1">Terça-feira</td>
              <td className="p-1"> {metadata?.agenda?.horario_padrao}</td>
            </tr>
            <tr className="border-solid bg-zinc-700">
              <td className="p-1">Quarta-feira</td>
              <td className="p-1"> {metadata?.agenda?.horario_padrao}</td>
            </tr>
            <tr className="">
              <td className="p-1">Quinta-feira</td>
              <td className="p-1"> {metadata?.agenda?.horario_padrao}</td>
            </tr>
            <tr className="border-solid bg-zinc-700">
              <td className="p-1">Sexta-feira</td>
              <td className="p-1"> {metadata?.agenda?.horario_padrao}</td>
            </tr>
            <tr>
              <td className="p-1">Fim de semana e feriados</td>
              <td className="p-1">{metadata?.agenda?.fin_semana}</td>
            </tr>
          </tbody>
        </table>
        <hr className="text-primary" />
        <p className="inline-flex gap-2.5"><FaRegClock className="text-primary animate-pulse" size={20} />Horário de almoço: {metadata?.agenda?.almoco}</p>
      </div>
    </div>
  )
}