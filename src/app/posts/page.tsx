import { getDataPosts } from "@/utils/actions/get-data";
import { PostsProps } from "@/utils/posts-type";
import Image from "next/image";

export default async function Posts() {
  const { object }: PostsProps = await getDataPosts();


  return (
    <div className="w-full min-h-screen flex items-center justify-center">

      <div className="max-w-7xl w-full p-4 min-h-screen flex gap-6 flex-col items-center">

        <h1 className="text-4xl font-bold mt-6 text-white">
          {object?.title.charAt(0).toUpperCase() + object?.title.slice(1)}
        </h1>

        {[...object?.metadata?.postagens?.post].reverse().map(item => (
          <div className="w-full sm:w-[50%] p-4 mb-4 border border-primary rounded-lg" key={item.titulo_post}>
            <h2 className="text-2xl my-4 text-gray-200">
              {item?.titulo_post.charAt(0).toUpperCase() + item?.titulo_post.slice(1)}
            </h2>
            <div className="w-full h-130">
              <Image
                src={item?.imagem_post?.url}
                alt={item?.titulo_post}
                width={500}
                height={500}
                className="bg-cover rounded-lg h-full w-full object-cover transition-all duration-300"
              />
            </div>
            <p className="text-gray-400 my-4">{item?.descricao.charAt(0).toUpperCase() + item?.descricao.slice(1)}</p>
          </div>
        ))}
      </div>



    </div>

  )
}
