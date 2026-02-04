import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Award, Users, Factory, Globe } from "lucide-react";

const DespreNoi = () => {
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
              Povestea Noastră
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-6">
              Despre Daron-Lux
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Din 2001, creăm biscuiți care aduc bucurie și savoare în casele
              oamenilor din Moldova și din întreaga Europă.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Începe dimineața cu Noi
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Fie că folosiți ca supliment la înghețată, sau pur și simplu
                  în fiecare dimineață la ceai, orice amator de prăjiturele, fie
                  că este copil sau matur, își poate găsi varietatea perfectă în
                  larga gamă de biscuiți „Daron-Lux" pentru a da start unei zile
                  reușite!
                </p>
                <p>
                  Artizan în fabricarea produselor de calitate, Compania noastră
                  vă asigură că doar savurînd un biscuit Daron puteți descoperi
                  plăcerea gustului!
                </p>
                <p>
                  Concepuți din produse naturale, de calitate superioară și{" "}
                  <strong className="text-foreground">fără conservanți</strong>,
                  biscuiții Daron-Lux poate fi alintul ideal.
                </p>
                <p className="text-primary font-medium">
                  Lăsați-vă seduși de senzația intensă a Biscuiților Daron-Lux!
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                {
                  icon: Factory,
                  value: "2001",
                  label: "Anul Fondării",
                },
                {
                  icon: Award,
                  value: "3 tone",
                  label: "Capacitate/Oră",
                },
                {
                  icon: Users,
                  value: "20+",
                  label: "Ani Experiență",
                },
                {
                  icon: Globe,
                  value: "UE",
                  label: "Export",
                },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 text-center shadow-card hover:shadow-warm transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="font-serif text-2xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              Valorile Noastre
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Calitate",
                description:
                  "Fiecare ingredient este selectat cu grijă pentru a asigura cel mai bun gust și calitate.",
              },
              {
                title: "Tradiție",
                description:
                  "Păstrăm rețetele tradiționale transmise din generație în generație.",
              },
              {
                title: "Inovație",
                description:
                  "Utilizăm tehnologii moderne pentru a produce biscuiți consistenți și delicioși.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-card"
              >
                <div className="w-12 h-1 bg-primary rounded-full mb-4" />
                <h3 className="font-serif text-xl font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-card rounded-2xl p-8 shadow-warm">
              <h3 className="font-serif text-2xl font-bold mb-6 text-center">
                Informații Companie
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <p className="text-muted-foreground mb-2">Denumire:</p>
                  <p className="font-medium">SRL "DARON-LUX"</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-2">Fondată:</p>
                  <p className="font-medium">2001</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-2">Capacitate:</p>
                  <p className="font-medium">3 tone pe oră</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-2">Piețe:</p>
                  <p className="font-medium">Moldova, Uniunea Europeană</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default DespreNoi;
