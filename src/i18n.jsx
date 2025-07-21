import i18next from "i18next";
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation:{
            pageHeader: "Stay ahead of the game: track market growth and follow the most-played titles — all in one streamlined dashboard!",
            pageSubtitle: "Gaming at Glance",

            lineGraphTitle: "Video Game Market Growth",
            lineGraphDescription: "January 2017 - June 2024",
            lineGraphSelectTitle: "Currency",
            lineGraphFooterTop: "Retrieved from",
            lineGraphFooterBottom: "Showing the market growth of different video game platforms over time. Expressed in",
            lineGraphFooterBolded: "billions of dollars.",
        }
    },

    fr: {
        translation: {
            pageHeader: "Gardez une longueur d'avance : suivez la croissance du marché et suivez les titres les plus joués, le tout dans un tableau de bord simplifié !",
            pageSubtitle: "Aperçu des jeux vidéo",

            lineGraphTitle: "Croissance du marché des jeux vidéo",
            lineGraphDescription: "Janvier 2017 - Juin 2024",
            lineGraphSelectTitle: "Devise",
            lineGraphFooterTop: "Récupéré de",
            lineGraphFooterBottom: "Représente la croissance du marché des différentes plateformes de jeux vidéo au fil du temps. Exprimée en",
            lineGraphFooterBolded: "des milliards de dollars."
        }
    }


};

i18next
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    }
  });