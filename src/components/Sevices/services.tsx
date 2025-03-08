import { CardServicosProps, ImagemProps } from "@/utils/home-type";
import { Schedules } from "./schedules";
import { CardService } from "./cardService";
import { CarouselTattoo } from "./carouselTattoo";

export interface ServiceProps {
  agenda: {
    titulo_agenda: string;
    horario_padrao: string;
    fin_semana: string;
    almoco: string;
  };
  card_servicos: CardServicosProps[];
  carrossel_esquerda: {
    titulo: string;
    imagem: ImagemProps[];
  };
  carrossel_direita: {
    titulo: string;
    imagem: ImagemProps[];
  };
}

export function Services({ metadata }: { metadata: ServiceProps }) {
  return (
    <div id="serviços" className="w-full min-h-screen flex justify-center">
      <div className="max-w-7xl w-full">

        <h1 className="text-primary text-2xl md:text-4xl text-center mb-10">Nossos serviços</h1>

        <div className="p-3 flex flex-col gap-6 md:flex-row items-center lg:justify-around md:justify-evenly">
          <Schedules metadata={metadata} />
          <div className="grid gap-3 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-10">
            <CarouselTattoo carrousel={metadata?.carrossel_direita} />
            <CarouselTattoo carrousel={metadata?.carrossel_esquerda} />
          </div>
        </div>

        <CardService metadata={metadata} />
      </div>
    </div>
  )
}