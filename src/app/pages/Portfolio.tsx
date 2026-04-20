import { useLanguage } from '../context/LanguageContext';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Portfolio() {
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1732690113224-e4230dd9a549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjYXIlMjBzdGlja2VycyUyMHZpbnlsJTIwd3JhcHxlbnwxfHx8fDE3NzY2ODMxMjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Anime Design Wrap',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1716237923864-2efdf3de13d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxjYXIlMjBzdGlja2VycyUyMHZpbnlsJTIwd3JhcHxlbnwxfHx8fDE3NzY2ODMxMjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Color Change Project',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1708216823931-7562c2868c40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxjYXIlMjBzdGlja2VycyUyMHZpbnlsJTIwd3JhcHxlbnwxfHx8fDE3NzY2ODMxMjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Custom Graphics',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1748156522250-b598353b54a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxjYXIlMjBzdGlja2VycyUyMHZpbnlsJTIwd3JhcHxlbnwxfHx8fDE3NzY2ODMxMjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Camouflage Wrap',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1743278765047-28ed7d67d682?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxjYXIlMjBzdGlja2VycyUyMHZpbnlsJTIwd3JhcHxlbnwxfHx8fDE3NzY2ODMxMjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Geometric Design',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1761325684393-18292fd90690?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxjYXIlMjBzdGlja2VycyUyMHZpbnlsJTIwd3JhcHxlbnwxfHx8fDE3NzY2ODMxMjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Comic Wrap',
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1716237922640-9e1748b63ee1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxjYXIlMjBzdGlja2VycyUyMHZpbnlsJTIwd3JhcHxlbnwxfHx8fDE3NzY2ODMxMjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Hearts Design',
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1696720401393-afec97667cfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxjYXIlMjBzdGlja2VycyUyMHZpbnlsJTIwd3JhcHxlbnwxfHx8fDE3NzY2ODMxMjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Matte Black Finish',
    },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl text-center mb-6">{t('portfolioTitle')}</h1>
        <p className="text-xl text-center text-muted-foreground mb-12">
          {t('portfolioDesc')}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
