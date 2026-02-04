import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Leaf, Heart } from "lucide-react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-biscuits.jpg";

const Index = () => {
  const featuredProducts = products.slice(0, 6);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Biscuiți Daron-Lux"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                Din 2001 - Calitate și Tradiție
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
            >
              Începe dimineața
              <br />
              <span className="text-primary">cu Noi</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              Fie că folosiți ca supliment la înghețată, sau pur și simplu în
              fiecare dimineață la ceai, biscuiții Daron-Lux sunt alegerea
              perfectă pentru a da start unei zile reușite!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild size="lg" className="group">
                <Link to="/produse">
                  Vezi Produsele
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/despre-noi">Despre Noi</Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute bottom-10 right-10 hidden lg:block"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-24 h-24 rounded-full bg-primary/20 blur-2xl" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: "Ingrediente Naturale",
                description:
                  "Folosim doar ingrediente de calitate superioară, fără conservanți artificiali.",
              },
              {
                icon: Award,
                title: "Calitate Premium",
                description:
                  "Peste 20 de ani de experiență în producerea biscuiților de cea mai înaltă calitate.",
              },
              {
                icon: Heart,
                title: "Făcuți cu Dragoste",
                description:
                  "Fiecare biscuit este creat cu pasiune și atenție la detalii.",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Colecția Noastră
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2">
              Produse Populare
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard
                  name={product.name}
                  image={product.image}
                  description={product.description}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button asChild variant="outline" size="lg">
              <Link to="/produse">
                Vezi Toate Produsele
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-biscuit">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Lăsați-vă seduși de gustul autentic!
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Conceputți din produse naturale, de calitate superioară și fără
              conservanți, biscuiții Daron-Lux poate fi alintul ideal.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-primary hover:text-primary"
            >
              <Link to="/contacte">Contactează-ne</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
