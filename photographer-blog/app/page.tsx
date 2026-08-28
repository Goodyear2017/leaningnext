
import HeroCarousel from "@/components/HeroCarousel";
import HomeCard from "@/components/HomeCard";
import {homeCards} from "@/lib/homecards";
export default function Home() {
  return (
    <>
      <HeroCarousel />   
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 m-4">
        {homeCards.map((card) => (
          <HomeCard key = {card.id}
           {...card} />
          

          )
        )
      };

      </div>
    </>  
  );
}
