import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import CRE from '../assets/second.mp4'

const Billing = () => (
  < div>
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <video src={CRE} autoPlay loop muted />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      La création d'une   <br className="sm:block hidden" /> identité digitale
        
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      forge la présence en ligne d'une entreprise à travers un design visuel distinctif, une voix authentique et une cohérence de marque, 
      renforçant ainsi sa reconnaissance et son impact auprès de son audience cible.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div>
    </div>
  </section>

  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <video src={CRE} autoPlay loop muted />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      La création d'une   <br className="sm:block hidden" /> identité digitale
        
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      forge la présence en ligne d'une entreprise à travers un design visuel distinctif, une voix authentique et une cohérence de marque, 
      renforçant ainsi sa reconnaissance et son impact auprès de son audience cible.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div>
    </div>
  </section>
  </div>
  
  
     
   
);

export default Billing;
