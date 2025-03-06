export interface HomeProps {
  object: {
    slug: string;
    title: string;
    metadata: {
      hero: {
        banner: {
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
      }
      button_redes: ButtonProps[]
      sobre: {
        imagem_artista: {
          url: string;
          imgix_url: string;
        }
        descricao: {
          equipamentos: EquipamentosProps[]
        }
      }
      carrossel_esquerda: {
        titulol: string;
        imagem: ImagemProps[]
      }
      carrossel_centro: {
        titulol: string;
        imagem: ImagemProps[]
      }
      carrossel_direita: {
        titulol: string;
        imagem: ImagemProps[]
      }
      card_servicos: CardServicosProps[]
      contato: {
        titulo_localizacao: string;
        url: string;
        instagram: string;
        add_numero: AddNumeroProps[]
      }

    }
  }
}

interface ButtonProps {
  tutulo_button: string;
  url_button: string;
}

interface EquipamentosProps {
  titulo: string;
  maquinas: string;
}

interface ImagemProps {
  imagem_carrossel: {
    url: string;
    imgix_url: string;
  }
}

interface CardServicosProps {
  titulo: string;
  descricao: string;
  imagem: {
    url: string;
    imgix_url: string;
  }
}

interface AddNumeroProps {
  numero: string;
}