export interface GaleryProps {
  object: {
    slug: string;
    title: string;
    metadata: {
      galeria: {
        imagem_galeria: ImageGaleryProps[]
      }
    }
  }
}

export interface ImageGaleryProps {
  imagem: {
    url: string;
    imgix_url: string;
  }
}