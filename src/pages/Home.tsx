import { recommend } from "../dummy/main";
import Carousel from "../components/Home/Carousel";
import { useEffect, useState } from "react";

function Home() {
  const [current, setCurrent] = useState(0);
  const moveStyle = {
    0: 'translate-x-0',
    1: 'translate-x-[-100vw]',
    2: 'translate-x-[-200vw]',
    3: 'translate-x-[-300vw]',
    4: 'translate-x-[-400vw]'
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (current === recommend.recommend.length - 1) {
        setCurrent(0);
      }
      else {
        setCurrent((prev) => (prev + 1))
      }
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [current])

  return (
    <section>
      <div className={`flex overflow-hidden ${moveStyle[current]} w-[400vw]`}>
        {recommend.recommend.map((el) => {
          return <Carousel data={el} />
        })}
      </div>
    </section>
  );
}

export default Home;