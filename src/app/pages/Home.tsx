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

      {/* HERO SECTION */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">

        {/* صورة الديسكتوب */}
        <div className="absolute inset-0 hidden md:block">
          <ImageWithFallback
            src="https://i.im.ge/eBImbD/WhatsApp_Image_2026-04-20_at_2.58.00_PM.jpg"
            alt="Hero Desktop"
            className="w-full h-full object-cover"
          />
        </div>

        {/* صورة الموبايل */}
        <div className="absolute inset-0 block md:hidden">
          <ImageWithFallback
            src="https://scontent.famm5-1.fna.fbcdn.net/v/t39.30808-6/494425291_1327151918989004_5955096494584582702_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=13d280&_nc_ohc=O1p6TSX61v4Q7kNvwGIh8Pk&_nc_oc=AdpcTmVq2r7Nw9Pvzi6cs3Iy5iRkLIiu4JPP1jSopG687KlF5ORPJ24tClZ7pyjO-ZnlAJ_dqVZ1BlZWZEylL6KU&_nc_zt=23&_nc_ht=scontent.famm5-1.fna&_nc_gid=QaQRBgDvJj7e_GyEWJCfzg&_nc_ss=7a3a8&oh=00_Af2T9HDc90rRRDDvAy8bH0ex2FRcbZFzuOVkVla047Esig&oe=69EBDF98"
            alt="Hero Mobile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* طبقة تغبيش */}
        <div className="absolute inset-0 bg-black/50" />

        {/* المحتوى */}
        <div className="relative z-10 text-center text-white px-4 flex flex-col items-center">

  {/* الشعار */}
  <img
    src="https://i.im.ge/eBIjhY/Untitled_design_2_.png"
    alt="Octopus Logo"
    className="w-28 md:w-36 mb-4 drop-shadow-lg"
  />

  {/* العنوان */}
  <h1 className="text-4xl md:text-5xl mb-4">
    {t('welcomeTitle')}
  </h1>

  {/* النص */}
  <p className="text-xl md:text-2xl">
    {t('welcomeSubtitle')}
  </p>

  {/* زر الاتصال */}
  <a
    href="tel:0799010111"
    className="mt-6 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition"
  >
    اتصل بنا
  </a>

</div>
      </section>

      {/* SERVICES */}
      <section className="py-20 container mx-auto px-4">

        <h2 className="text-4xl text-center mb-12">
          {t('ourServices')}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
            >

              <div className="flex justify-center mb-4 text-primary">
                {service.icon}
              </div>

              <h3 className="mb-4">
                {service.title}
              </h3>

              <p className="text-muted-foreground">
                {service.description}
              </p>

            </div>
          ))}

        </div>
      </section>

      {/* FEATURES */}
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
