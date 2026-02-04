import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contacte = () => {
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
              Suntem Aici Pentru Dumneavoastră
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-6">
              Contacte
            </h1>
            <p className="text-lg text-muted-foreground">
              Nu ezitați să ne contactați pentru orice întrebare sau comandă.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8">
                SRL "DARON-LUX"
              </h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Adresa</h3>
                    <p className="text-muted-foreground">
                      Republica Moldova,
                      <br />
                      mun. Chișinău, str. Varnița 14/1
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Telefon</h3>
                    <div className="text-muted-foreground space-y-1">
                      <a
                        href="tel:+37322472270"
                        className="block hover:text-primary transition-colors"
                      >
                        +373 (22) 47-22-70
                      </a>
                      <a
                        href="tel:+37322479094"
                        className="block hover:text-primary transition-colors"
                      >
                        +373 (22) 47-90-94
                      </a>
                    </div>
                    <h3 className="font-semibold mt-3 mb-1">Tel/Fax</h3>
                    <div className="text-muted-foreground space-y-1">
                      <a
                        href="tel:+37322410241"
                        className="block hover:text-primary transition-colors"
                      >
                        +373 (22) 41-02-41
                      </a>
                      <a
                        href="tel:+37322410541"
                        className="block hover:text-primary transition-colors"
                      >
                        +373 (22) 41-05-41
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">E-mail</h3>
                    <a
                      href="mailto:daronlux@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      daronlux@gmail.com
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Program de Lucru</h3>
                    <p className="text-muted-foreground">
                      Luni - Vineri: 08:00 - 17:00
                    </p>
                  </div>
                </div>
              </div>

              {/* Banking Details */}
              <div className="mt-10 p-6 bg-card rounded-2xl shadow-card">
                <h3 className="font-serif text-xl font-semibold mb-4">
                  Rechizite Bancare
                </h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="text-muted-foreground">Cont:</span> BCA
                    "Moldova-Agroindbank", fil. Miron Costin, AGRNMD2X710
                  </p>
                  <p>
                    <span className="text-muted-foreground">IBAN:</span>{" "}
                    MD64AG000002251504014727
                  </p>
                  <p>
                    <span className="text-muted-foreground">C/F:</span>{" "}
                    1003600032623
                  </p>
                  <p>
                    <span className="text-muted-foreground">TVA:</span> 0402127
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-[500px] lg:h-full min-h-[400px]"
            >
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-warm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2720.5!2d28.89!3d47.02!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c3628b769a1%3A0x37d1d6305749dd3c!2sVarni%C8%9Ba%20St%2014%2C%20Chi%C8%99in%C4%83u%2C%20Moldova!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Daron-Lux Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacte;
