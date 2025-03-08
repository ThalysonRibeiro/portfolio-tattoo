export interface PostsProps {
  object: {
    slug: string;
    title: string;
    type: string;
    metadata: {
      postagens: {
        post: PostProps[]
      }
    }
  }
}

interface PostProps {
  titulo_post: string;
  imagem_post: {
    url: string;
    imgix_url: string;
  }
  descricao: string;
}