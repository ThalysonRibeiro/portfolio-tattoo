export interface HomeProps {
  object: {
    slug: string;
    title: string;
    metadata: {
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
      agenda: {
        titulo_agenda: string;
        horario_padrao: string;
        fin_semana: string;
        almoco: string;
      }
      sobre: {
        imagem_artista: {
          url: string;
          imgix_url: string;
        }
        descricao: string;
        equipamentos: EquipamentosProps[];
      };
      carrossel_esquerda: {
        titulo: string;
        imagem: ImagemProps[];
      };
      carrossel_direita: {
        titulo: string;
        imagem: ImagemProps[];
      };
      card_servicos: CardServicosProps[];
      contato: {
        menssagem_whats: string;
        titulo_localizacao: string;
        url: string;
        instagram: string;
        add_numero: AddNumeroProps[];
      };
    }
  }
}

export interface EquipamentosProps {
  tintas: string;
  maquinas: string;
}

export interface ImagemProps {
  titulo_imagem: string;
  imagem_carrossel: {
    url: string;
    imgix_url: string;
  }
}

export interface CardServicosProps {
  titulo: string;
  descricao: string;
  imagem: {
    url: string;
    imgix_url: string;
  }
}

export interface AddNumeroProps {
  numero: string;
}