import { CategoryShow } from "@/components/CategoryShow";
import { DoctorsShowCase } from "@/components/DoctorsShowCase";
import { Hero } from "@/components/Hero";
import { OurServices } from "@/components/OurServices";

export default function Home() {
  return (
    <main>
      <Hero />
      <CategoryShow />
      <OurServices />
      <DoctorsShowCase />
    </main>
  );
}
