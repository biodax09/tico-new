import { Cursor, useTypewriter } from "react-simple-typewriter";
import { styles } from "../styles";
import Marquee from 'react-fast-marquee';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import img1 from '../assets/logolar/1.png';
import img2 from '../assets/logolar/2.png';
import img3 from '../assets/logolar/3.png';
import img4 from '../assets/logolar/4.png';
import img5 from '../assets/logolar/5.png';
import img6 from '../assets/logolar/6.png';
import img7 from '../assets/logolar/7.png';
import img8 from '../assets/logolar/8.png';


const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      "Ticari Web Yazılımları",
      "Kurumsal Web Yazılımları",
      "E-Ticaret Yazılımları",
      "Yapay Zeka Çalışmaları",
      "Kripto Teknoloji Yazılımları",
    ],
    loop: true,
    delaySpeed: 2000,
  })
  

  return (
    <section className="w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} h-screen max-w-7xl mx-auto flex lg:flex-row flex-col-reverse items-center justify-center gap-5 pt-10`}>
        <div>
          <div className="flex gap-3 select-none">
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
              <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
            </div>

            <div className="lg:w-[32rem]">
              <h1 className={`${styles.heroHeadText} text-white`}>
                Dijitalde <br />
                <span className="animate-text bg-gradient-to-r from-purple-400 via-purple-700 to-purple-700 bg-clip-text text-transparent font-black">
                 ROKETLEYİN 
                </span>
              </h1>

              <p
                className={`${styles.heroSubText} mt-2 text-white-100 max-w-lg`}>
                {text}
                <Cursor cursorColor="#915eff" />
              </p>
            </div>
          </div>

          <a
            href="#about"
            className="w-fit mx-auto flex items-center justify-center gap-5 bg-tertiary lg:px-7 lg:py-3 px-4 py-2 rounded-xl lg:mt-10 mt-5 cursor-pointer max-[350px]:hidden select-none">
            <div className="group border-[3px] border-white rounded-full h-12 w-7 flex justify-center lg:scale-100 scale-75">
              <div className="bg-white h-3 w-1 rounded-full mt-[10px] animate-bounce lg:scale-100 scale-75"></div>
            </div>

            <p>AŞAĞI KAYDIR</p>
            
          </a>
          
        </div>

    
      
        <div className="w-full">
          <div className="flex items-center justify-center lg:w-96 lg:h-96 w-[12.5rem] h-[12.5rem] max-[350px]:w-[10.5rem] max-[350px]:h-[10.5rem] mx-auto bg-gradient-to-b from-purple-500 via-purple-500 to-purple-500 hero-animation will-change-transform shadow-card">
            <div className="bg-avatar bg-cover bg-no-repeat bg-[50%]  justify-self-center lg:w-[374px] lg:h-[374px] w-48 h-48 max-[350px]:w-40 max-[350px]:h-40 hero-animation will-change-transform" />
          </div>
          
        </div>
      </div>

      <div className="marqbg">
        <Marquee direction="left" speed={100} delay={0}>
          <div className="image_wrapper">
            <img src={img1} loading='lazy' alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img2} loading='lazy' alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img3} loading='lazy' alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img4} loading='lazy' alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img5} loading='lazy' alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img6} loading='lazy' alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img7} loading='lazy' alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img8} loading='lazy' alt="" />
          </div>
        </Marquee>
      </div>
    </section>

    
  )
}

export default Hero;
