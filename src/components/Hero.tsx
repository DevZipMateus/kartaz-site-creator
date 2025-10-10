import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95" />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" 
        style={{
          backgroundImage: "radial-gradient(circle, hsl(48 100% 50% / 0.3) 1px, transparent 1px)",
          backgroundSize: "30px 30px"
        }}
      />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          <div className="mb-8 flex justify-center">
            <img 
              src="/logo.png" 
              alt="KARTAZ Gráfica - Logo" 
              className="h-32 md:h-40 lg:h-48 animate-fade-in"
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            KARTAZ Gráfica
          </h1>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-foreground/80 mb-8 font-medium">
            Adesivos e ripados
          </h2>
          
          <p className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transformamos suas ideias em realidade com serviços gráficos, adesivos personalizados e painéis ripados de alta qualidade
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("servicos")}
              className="btn-primary group text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl"
            >
              Nossos serviços
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              asChild
              className="btn-outline-light text-lg px-8 py-6 rounded-xl"
            >
              <a href="https://wa.me/5554991772608" target="_blank" rel="noopener noreferrer">
                Fale conosco
              </a>
            </Button>
          </div>
          
          <p className="mt-12 text-2xl md:text-3xl font-semibold gradient-text">
            Sua ideia, nossa forma.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
