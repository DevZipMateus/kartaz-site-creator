import { Card } from "./ui/card";
import placasObra from "@/assets/produtos/placas-obra.png";
import banners from "@/assets/produtos/banners.png";
import adesivoMicroperfurado from "@/assets/produtos/adesivo-microperfurado.png";
import adesivos from "@/assets/produtos/adesivos.png";
import envelopamento from "@/assets/produtos/envelopamento.png";
import comandas from "@/assets/produtos/comandas.png";
import receituarios from "@/assets/produtos/receituarios.png";
import fichas from "@/assets/produtos/fichas.png";
import pastas from "@/assets/produtos/pastas.png";
import rifas from "@/assets/produtos/rifas.png";

const Products = () => {
  const products = [
    {
      title: "Placas de obra e sinalização",
      image: placasObra,
      description: "Placas personalizadas para obras, imóveis e sinalização em geral"
    },
    {
      title: "Banners",
      image: banners,
      description: "Banners para eventos, promoções e divulgação"
    },
    {
      title: "Adesivo microperfurado",
      image: adesivoMicroperfurado,
      description: "Adesivos para veículos e vitrines com aplicação profissional"
    },
    {
      title: "Adesivos personalizados",
      image: adesivos,
      description: "Etiquetas, adesivos decorativos e identificação"
    },
    {
      title: "Envelopamento",
      image: envelopamento,
      description: "Envelopamento de geladeiras, cervejeiras e frigobar"
    },
    {
      title: "Comandas e ordens",
      image: comandas,
      description: "Comandas personalizadas para seu estabelecimento"
    },
    {
      title: "Receituários",
      image: receituarios,
      description: "Receituários personalizados para profissionais da saúde"
    },
    {
      title: "Fichas",
      image: fichas,
      description: "Fichas para eventos e controle"
    },
    {
      title: "Pastas",
      image: pastas,
      description: "Pastas personalizadas para sua empresa"
    },
    {
      title: "Rifas",
      image: rifas,
      description: "Rifas numeradas e personalizadas"
    }
  ];

  return (
    <section id="produtos" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Nossos produtos</h2>
          <p className="text-lg md:text-xl text-foreground/70">
            Confira nossa linha completa de produtos gráficos e adesivos personalizados
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="overflow-hidden card-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-foreground/70">{product.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
