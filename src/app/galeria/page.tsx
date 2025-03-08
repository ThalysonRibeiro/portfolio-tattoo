
import { getDataGalery } from "@/utils/actions/get-data";
import { GaleryProps } from "@/utils/galery-type";
import CardImageGalery from "./components/cardImageGalery";

export default async function Galeria() {
  const { object }: GaleryProps = await getDataGalery();


  return (
    <div className="w-full min-h-screen flex items-center justify-center">

      <div className="max-w-7xl w-full min-h-screen flex gap-6 flex-col items-center">

        <h1 className="text-4xl font-bold mt-6 text-white">Galeria</h1>

        <CardImageGalery metadata={object.metadata} />
      </div>



    </div>

  )
}
