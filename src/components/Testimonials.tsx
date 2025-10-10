import { Card } from "./ui/card";
import { Quote } from "lucide-react";
import feedbackImage from "@/assets/feedback-cliente.png";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Pedimos um feedback para nossos clientes do @escritoriocontabilzeni sobre como foi nosso atendimento e instalação da parte interna dos letreiros e adesivos nas portas do escritório. Muito obrigado pelas palavras @zenijr87. 👏🏻 É esse reconhecimento que nos motiva a continuar dando o nosso melhor.",
      author: "Escritório Contábil Zeni",
      info: "Cliente desde 2023"
    },
    {
      text: "A Kartaz sempre foi uma parceira de longa data para nós. Desde o início, demonstrou extrema confiança, seriedade e, acima de tudo, um profissionalismo admirável. Essa postura, aliada à excelente qualidade de seus produtos e serviços, faz com que a Kartaz seja uma referência em seu segmento e uma escolha certa para quem busca resultados de excelência.",
      author: "Cliente Satisfeito",
      info: "Parceiro de longa data",
      image: feedbackImage
    }
  ];

  return (
    <section id="depoimentos" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">O que dizem nossos clientes</h2>
          <p className="text-lg md:text-xl text-foreground/70">
            Depoimentos de quem confia em nosso trabalho
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-8 relative overflow-hidden card-hover flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="h-16 w-16 text-primary" />
              </div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-primary fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>

                <blockquote className="text-base md:text-lg text-foreground/80 leading-relaxed mb-6 flex-grow">
                  "{testimonial.text}"
                </blockquote>

                {testimonial.image && (
                  <div className="mb-6">
                    <img 
                      src={testimonial.image} 
                      alt="Feedback do cliente" 
                      className="w-full rounded-lg shadow-md"
                    />
                  </div>
                )}

                <div className="flex items-center gap-4 mt-auto">
                  <div>
                    <p className="font-semibold text-lg">{testimonial.author}</p>
                    <p className="text-foreground/60">{testimonial.info}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
