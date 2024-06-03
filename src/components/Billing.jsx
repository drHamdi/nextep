import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import CRE from '../assets/second.mp4'
import GRC from '../assets/GRS.mp4'
import CSW from '../assets/CSW.mp4'

const Billing = () => (
  < div>
  <section  className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <video className="rounded-3xl" src={CRE} autoPlay loop muted />

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
    <div >
    <section id="product" className= {layout.sectionReverse} >
    <div className={layout.sectionImgReverse}>
      <video className="rounded-3xl" src={GRC} autoPlay loop muted />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Gestion des  <br className="sm:block hidden" /> Réseaux Sociaux
        
      </h2>
      <p className={`${styles.paragraph}  max-w-[470px] mt-5`}>
        - Créer des profils professionnels sur les réseaux sociaux pertinents (Facebook, LinkedIn, Twitter, Instagram, etc.). <br/>
        - Partager régulièrement du contenu provenant de votre site web et d'autres sources pertinentes. <br/>
        - Interagir avec votre audience en répondant aux commentaires, messages et mentions  <br />
        - Utiliser les publicités sur les réseaux sociaux pour augmenter la portée et attirer de nouveaux visiteurs.</p>
        
      
    </div>
  </section>
    </div>

    <div >
    <section id="product" className= {layout.sectionReverse} >
    <div className={layout.sectionImgReverse}>
      <video className="rounded-3xl" src={CSW } autoPlay loop muted />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Création  <br className="sm:block hidden" /> Site Web
        
      </h2>
      <p className={`${styles.paragraph}  max-w-[470px] mt-5`}>
        - Choisir une plateforme de création de site (WordPress, Wix, Squarespace, etc.). <br/>
        - Acheter un nom de domaine pertinent et facile à mémoriser. <br/>
        - Sélectionner un hébergeur web fiable pour garantir la disponibilité de votre site. <br />
        - Définir l’architecture du site (structure des pages, navigation, etc.). <br/>
        - Concevoir le design du site en gardant à l'esprit l'expérience utilisateur (UX) et l'interface utilisateur (UI). <br />
        - Développer le contenu initial (pages principales, blog, portfolio, etc.). <br />
        - Optimiser la vitesse de chargement du site pour une meilleure performance.</p>
    </div>
  </section>
    </div>
  
  </div>
  
  
     
   
);

export default Billing;
