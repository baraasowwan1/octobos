import { useLanguage } from '../context/LanguageContext';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Palette, Sparkles, Car } from 'lucide-react';

export function Home() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Palette className="w-12 h-12" />,
      title: t('service1Title'),
      description: t('service1Desc'),
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: t('service2Title'),
      description: t('service2Desc'),
    },
    {
      icon: <Car className="w-12 h-12" />,
      title: t('service3Title'),
      description: t('service3Desc'),
    },
  ];

  return (
    <div>
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://i.im.ge/eBImbD/WhatsApp_Image_2026-04-20_at_2.58.00_PM.jpg"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl mb-4">{t('welcomeTitle')}</h1>
          <p className="text-2xl">{t('welcomeSubtitle')}</p>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4">
        <h2 className="text-4xl text-center mb-12">{t('ourServices')}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-center mb-4 text-primary">
                {service.icon}
              </div>
              <h3 className="mb-4">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h3 className="mb-2">✓ {t('qualityGuarantee')}</h3>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h3 className="mb-2">✓ {t('uniqueDesigns')}</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
