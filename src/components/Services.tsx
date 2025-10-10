import { Printer, Sticker, Layout } from "lucide-react";
import { Card } from "./ui/card";

const Services = () => {
  const services = [
    {
      icon: Printer,
      title: "Gráfica",
      description: "Impressos gráficos em pequenas e grandes quantidades",
      items: [
        "Cartões de visita",
        "Comandas e ordens",
        "Receituários",
        "Fichas de controle",
        "Pastas personalizadas",
        "Diversos outros impressos"
      ],
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Sticker,
      title: "Adesivos",
      description: "Adesivos personalizados para todas as necessidades",
      items: [
        "Adesivos de recorte eletrônico",
        "Adesivos digitais",
        "Recorte especial",
        "Campanhas e divulgações",
        "Sinalizações",
        "Decoração de vitrines"
      ],
      color: "bg-accent/10 text-accent"
    },
    {
      icon: Layout,
      title: "Painéis ripados",
      description: "Soluções modernas para decoração de ambientes",
      items: [
        "Painéis decorativos",
        "Projetos personalizados",
        "Orçamento sob medida",
        "Instalação profissional",
        "Diversos acabamentos",
        "Revenda de materiais"
      ],
      color: "bg-secondary/10 text-secondary"
    }
  ];

  return (
    <section id="servicos" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Nossos serviços</h2>
          <p className="text-lg md:text-xl text-foreground/70">
            Oferecemos uma ampla gama de serviços gráficos e decorativos para atender suas necessidades
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-8 card-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col h-full">
                <div className={`w-20 h-20 rounded-2xl ${service.color} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                  <service.icon className="h-10 w-10" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-foreground/70 mb-6">{service.description}</p>
                
                <ul className="space-y-2 flex-grow">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 mt-1 text-primary">•</span>
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-foreground/60">
                    {index === 0 && "Instalação dos adesivos produzidos quando necessário"}
                    {index === 1 && "Tudo personalizado conforme o gosto do cliente"}
                    {index === 2 && "Instalação profissional incluída"}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
