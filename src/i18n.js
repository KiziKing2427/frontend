import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
    resources: {
      en: { 
        translation: {
          home: "Home",
          tours: "Tour",
          transportation: "Transportation",
          contactUs: "Contact Us",
          cart: "Cart",
          logoText: "Ytri Travels",
          footerText: "@copy 2024 My Trip Maker. All rights reserved."
        },
      }, 
      fr: {
        translation: {
          home: "Accueil",
          addProducts: "Ajouter des Produits",
          showProducts: "Afficher les Produits",
          createAccount: "créer un compte",
          logoText: "Voyages Ytri",
          footerText: "@copy; 2024 Ytri Travels. Tous droits réservés."
        },
      }, // Added comma here
    },
    
  });

export default i18n;
