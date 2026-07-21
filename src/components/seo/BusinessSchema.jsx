import siteContent from '@/content/site.json';
import { site } from '@/constants/site';

export default function BusinessSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: site.name,
    description: siteContent.description,
    areaServed: siteContent.areaServed,
    telephone: `+${site.whatsapp}`,
  };
  return <script type="application/ld+json">{JSON.stringify(data)}</script>;
}
