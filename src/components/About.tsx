import { Calendar, TrendingUp, Award } from "lucide-react";
import { Card } from "./ui/card";

const About = () => {
  const milestones = [
    {
      icon: Calendar,
      year: "1998",
      title: "Fundação",
      description: "Iniciamos como serigrafia e desenhos de projetos arquitetônicos"
    },
    {
      icon: TrendingUp,
      year: "Anos 2000",
      title: "Expansão",
      description: "Investimento em plotter de recorte eletrônico e terceirização de serviços digitais"
    },
    {
      icon: Award,
      year: "2025",
      title: "Inovação",
      description: "Entrada no mercado de painéis ripados para decoração"
    }
  ];

  return (
    <section id="sobre" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Sobre nós</h2>
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
            Em 01 de setembro de 1998, abrimos as portas como serigrafia e desenhos de projetos arquitetônicos. 
            Logo após, investimos em uma plotter de recorte eletrônico em vinil adesivo. Com o passar do tempo, 
            iniciamos a terceirização de adesivos digitais e serviços gráficos em pequeno e grande porte.
          </p>
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed mt-4">
            Também adquirimos uma plotter A0 para projetos de arquitetura e, em 2025, entramos no mercado de 
            revenda e instalação de painéis ripados. Atendemos todos os segmentos de mercado, tanto pessoas 
            físicas quanto jurídicas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {milestones.map((milestone, index) => (
            <Card 
              key={index} 
              className="p-6 card-hover border-t-4 border-t-primary"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <milestone.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-primary">{milestone.year}</h3>
                <h4 className="text-xl font-semibold mb-3">{milestone.title}</h4>
                <p className="text-foreground/70">{milestone.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
