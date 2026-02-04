import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const Produse = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Colecția Completă
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-6">
              Produsele Noastre
            </h1>
            <p className="text-lg text-muted-foreground">
              Descoperiți întreaga gamă de biscuiți Daron-Lux, fiecare cu
              propriul caracter și gust unic.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <ProductCard
                  name={product.name}
                  image={product.image}
                  description={product.description}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
              Click pe produs pentru detalii
            </h2>
            <p className="text-muted-foreground">
              Fiecare biscuit este creat cu ingrediente naturale și fără
              conservanți, pentru a vă oferi cea mai autentică experiență
              gustativă.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Produse;
