import {people01 , people02, people03,  facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star,  } from "../assets";
import people04 from '../assets/people04.png'
import { Link } from 'react-router-dom';



export const navLinks = [

  {
    id: "home",
    title: "Acceuil",
  },
  {
    id: "features",
    title: "A Propos",
  },
  {
    id: "product",
    title: "Service",
    
  },

  {
    id: "clients",
    title: "Contact",
  },
 
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Récompenses",
    content:
      "Notre service digital offre une visibilité accrue, une portée élargie et une croissance exponentielle. Révolutionnez votre entreprise avec des résultats mesurables et une expérience utilisateur optimale."
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Securiser",
    content:
      "Nous prenons des mesures proactives pour garantir la sécurité de vos informations et de vos transactions.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Service de Messagerie",
    content:
      "Notre service de messagerie assure une communication instantanée, une collaboration fluide et une réponse rapide. Simplifiez vos échanges et restez connectés avec vos clients en tout temps.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "l'objectif est de maintenir l'intérêt et d'encourager l'interaction des utilisateurs. Cela inclut la gestion des réseaux sociaux, l'email marketing.",
    name: "Engagement Visuelle",
    title: "Publicité display et native",
    img: people04 ,
  },
  {
    id: "feedback-2",
    content:
      "L'objectif ici est d'attirer des visiteurs sur les plateformes en ligne d'une entreprise, telles que le site web.",
    name: "L'acquisition de trafic",
    title: "Marketing de contenu",
    img: people04,
  },
  {
    id: "feedback-3",
    content:
      "Le but final est de convertir les visiteurs en clients payants et de les fidéliser. Les stratégies incluent les offres promotionnelles, les campagnes de remarketing.",
    name: "fidélisation",
    title: "collaborations ",
    img: people04,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "UTILISATEUR ACTIF",
    value: "800+",
  },
  {
    id: "stats-2",
    title: "Approuvé par l'entreprise",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "NEXTEP a redéfini le paysage numérique",
    value: "Depuis 2018", 
  },
];

export const footerLinks = [
  {
    title: "Liens utiles",
    links: [
      {
        name: "Contenu",
        link: "https://www.facebook.com/profile.php?id=61559917217925",
      },
      {
        name: "Comment ça fonctionne",
        link: "https://www.facebook.com/profile.php?id=61559917217925",
      },
      {
        name: "Créer",
        link: "https://www.facebook.com/profile.php?id=61559917217925",
      },
      {
        name: "Explorer",
        link: "https://www.facebook.com/profile.php?id=61559917217925",
      },
      {
        name: "Conditions et services",
        link: "https://www.facebook.com/profile.php?id=61559917217925",
      },
    ],
  },
  {
    title: "Communauté",
    links: [
      {
        name: "Centre d'aide",
        link: "https://www.facebook.com/profile.php?id=61559917217925",
      },
      {
        name: "Les partenaires",
        link: "https://www.facebook.com/profile.php?id=61559917217925",
      },
      {
        name: "Suggestions",
        link: "https://www.facebook.com/profile.php?id=61559917217925",
      },
      {
        name: "Blog",
        link: "https://www.facebook.com/profile.php?id=61559917217925",
      },
      {
        name: "bulletins d'information",
        link: "https://www.facebook.com/profile.php?id=61559917217925",
      },
    ],
  },
  {
    title: "Les partenaires",
    links: [
      {
        name: "Notre partenaire",
        link: "https://www.facebook.com/profile.php?id=61559917217925",
      },
      {
        name: "Devenir un partenaire",
        link: "https://www.facebook.com/profile.php?id=61559917217925",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/profile.php?id=61559917217925",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },

  {
    id: "client-4",
    logo: dropbox,
  },
];


