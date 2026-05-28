import type { SiteConfig } from '../types';

export const siteConfig: SiteConfig = {
  name: 'Ferretería Dismafer',
  tagline: 'De TODO en Ferretería',
  description:
    'Ferretería con más de 20 años en Zona 9, Ciudad de Guatemala. Herramientas manuales y eléctricas, materiales de construcción, PVC y seguridad industrial.',
  url: 'https://dismafer.shop',
  contact: {
    phone: '+50223390468',
    phoneDisplay: '(502) 2339-0468',
    whatsapp: '+50258330848',
    whatsappUrl:
      'https://wa.me/50258330848?text=Hola%2C%20me%20interesa%20informaci%C3%B3n%20sobre%20sus%20productos',
    address: '2ª Calle 2-73, Zona 9, Ciudad de Guatemala, Guatemala',
    addressShort: '2ª Calle 2-73, Zona 9',
    mapUrl: 'https://maps.google.com/?q=Ferreteria+Dismafer+2a+Calle+2-73+Zona+9+Guatemala',
  },
  hours: {
    weekdays: '07:00 – 17:30',
    saturday: '07:00 – 14:00',
    sunday: 'Cerrado',
  },
  social: {
    facebook: 'https://www.facebook.com/dismaferz9/',
  },
  slogan: 'Si no lo tenemos, te lo conseguimos',
};
