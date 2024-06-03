import styles from "../style";
import { discount, robot } from "../assets";
import Commencer from "./GetStarted";
import Heros from '../assets/first.png'

const Hero = () => {
  return (
    <section  className={`flex mb-10 md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Votre Besoin Digital</span> Est Notre Responsabilité{" "}
            <span className="text-white"></span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
          Bienvenue chez notre agence Marketing Digital{" "}
          </h1>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          <main></main>
          <span className="text-gradient">NEXTEP</span>{" "}
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Notre équipe d'experts utilise une méthodologie pour Boostez votre présence en ligne 
         des stratégies ciblées, des résultats tangibles. Faites décoller votre entreprise dès aujourd'hui.
        </p>
      </div>
      <img src={Heros} alt="billing" className="w-[80%] h-[60%] relative z-[5]" />
      <div className="ss:flex hidden mt-80 md:mr-4 mr-0">
            < Commencer />
          </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" /> 
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;
