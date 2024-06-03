import React from 'react'
import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import Drop from '../assets/dropshipp.mp4'


const Dropship = () => {
  return (
    
      <section  className= {layout.sectionReverse} >
       <div className={layout.sectionImgReverse}>
      <video className="rounded-3xl" src={ Drop } autoPlay loop muted />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
     Votre Gain Est <br className="sm:block hidden" /> 
      </h2>
      <p className={`${styles.paragraph}  max-w-[470px] mt-5`}>
        - Faible investissement initial <br/>
        - Pas de gestion d'inventaire <br/>
        - Risque financier réduit <br />
        - Flexibilité géographique <br />
        - Large gamme de produits <br />
        - Test facile de nouveaux produits <br />
        - Mise sur le marché rapide</p>
    </div>
  </section>
    
  )
}

export default Dropship
