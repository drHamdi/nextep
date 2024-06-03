import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import Online from '../assets/videoshop.mp4'

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      DropShipping<br className="sm:block hidden" />
        
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      En Tunisie, le dropshipping permet aux entrepreneurs de vendre des produits sans stock. 
      Les fournisseurs internationaux expédient directement aux clients tunisiens, offrant une opportunité de commerce en ligne avec un investissement initial minimal.
      </p>
      <div className={layout.sectionImgReverse}>
      <video className="rounded-3xl" src={ Online } autoPlay loop muted />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

      
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
   
  </section>
  
);

export default CardDeal;
