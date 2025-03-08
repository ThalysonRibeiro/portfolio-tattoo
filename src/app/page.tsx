import { getDataHome } from "@/utils/actions/get-data";
import { HomeProps } from "@/utils/home-type";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/Sevices/services";
import { Footter } from "@/components/Footer/footer";
import { About } from "@/components/about";

export default async function Home() {
  const { object }: HomeProps = await getDataHome();

  return (
    <div className="flex flex-col items-center">
      <Header />
      <Hero metadata={object.metadata} />
      <Services metadata={object.metadata} />
      <About metadata={object.metadata} />
      <Footter metadata={object.metadata} />
    </div>
  );
}
