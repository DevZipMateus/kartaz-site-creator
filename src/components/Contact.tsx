import { Mail, Phone, MapPin, Clock, Instagram } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(54) 99177-2608",
      link: "https://wa.me/5554991772608"
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "kartazito@gmail.com",
      link: "mailto:kartazito@gmail.com"
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua Serafim Fagundes, 532"
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Segunda a sexta 8:00 às 12:00 | 13:30 às 18:00 - Sábados com hora marcada"
    }
  ];

  return (
    <section id="contato" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Entre em contato</h2>
          <p className="text-lg md:text-xl text-foreground/70">
            Estamos prontos para transformar suas ideias em realidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {contactInfo.map((info, index) => (
            <Card 
              key={index} 
              className="p-6 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <info.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                  {info.link ? (
                    <a 
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/70 hover:text-primary transition-colors duration-300"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-foreground/70">{info.content}</p>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            asChild
            className="btn-primary text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl"
          >
            <a href="https://wa.me/5554991772608" target="_blank" rel="noopener noreferrer">
              <Phone className="mr-2 h-5 w-5" />
              WhatsApp
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            asChild
            className="btn-outline-light text-lg px-8 py-6 rounded-xl"
          >
            <a href="https://www.instagram.com/kartazito" target="_blank" rel="noopener noreferrer">
              <Instagram className="mr-2 h-5 w-5" />
              Instagram
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            asChild
            className="btn-outline-light text-lg px-8 py-6 rounded-xl"
          >
            <a href="mailto:kartazito@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              E-mail
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
