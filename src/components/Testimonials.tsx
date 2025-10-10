import { Card } from "./ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">O que dizem nossos clientes</h2>
          <p className="text-lg md:text-xl text-foreground/70">
            Depoimentos de quem confia em nosso trabalho
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 relative overflow-hidden card-hover">
            <div className="absolute top-6 right-6 opacity-10">
              <Quote className="h-24 w-24 text-primary" />
            </div>
            
            <div className="relative z-10">
              <div className="mb-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-primary fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>

              <blockquote className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-6">
                "Pedimos um feedback para nossos clientes do @escritoriocontabilzeni sobre como foi nosso 
                atendimento e instalação da parte interna dos letreiros e adesivos nas portas do escritório. 
                Muito obrigado pelas palavras @zenijr87. 👏🏻
                <br /><br />
                É esse reconhecimento que nos motiva a continuar dando o nosso melhor."
              </blockquote>

              <div className="flex items-center gap-4">
                <div>
                  <p className="font-semibold text-lg">Escritório Contábil Zeni</p>
                  <p className="text-foreground/60">Cliente desde 2023</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
