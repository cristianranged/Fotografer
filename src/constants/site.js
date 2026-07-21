import siteContent from '@/content/site.json';

export const site = {
  name: siteContent.name,
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER || '573142380831',
};
export const whatsappUrl = (message) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
export const navItems = siteContent.navigation;
