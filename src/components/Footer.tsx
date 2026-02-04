import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-chocolate text-cream">
      {/* Wave decoration */}
      <div className="relative">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 md:h-16"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60L48 54C96 48 192 36 288 30C384 24 480 24 576 27C672 30 768 36 864 39C960 42 1056 42 1152 39C1248 36 1344 30 1392 27L1440 24V60H1392C1344 60 1248 60 1152 60C1056 60 960 60 864 60C768 60 672 60 576 60C480 60 384 60 288 60C192 60 96 60 48 60H0Z"
            className="fill-chocolate"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* About Section */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4 text-wheat">
              Despre Noi
            </h3>
            <p className="text-cream/80 text-sm leading-relaxed">
              Fabrica de producere a biscuiților "Daron-Lux" SRL activează din
              anul 2001. Este dotată cu utilaj modern. Capacitatea de producere
              este de 3 tone pe oră. Realizăm produsele pe teritoriul Republicii
              Moldova și în țările Uniunii Europene.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4 text-wheat">
              Contacte
            </h3>
            <div className="space-y-3 text-sm">
              <p className="font-medium">SRL "DARON-LUX"</p>
              <div className="flex items-start gap-2 text-cream/80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  Republica Moldova, mun. Chișinău, str. Varnița 14/1
                </span>
              </div>
              <div className="flex items-center gap-2 text-cream/80">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+37322472270" className="hover:text-wheat transition-colors">
                    +373 (22) 47-22-70
                  </a>
                  <a href="tel:+37322479094" className="hover:text-wheat transition-colors">
                    +373 (22) 47-90-94
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2 text-cream/80">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a
                  href="mailto:daronlux@gmail.com"
                  className="hover:text-wheat transition-colors"
                >
                  daronlux@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Banking Details */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4 text-wheat">
              Rechizite Bancare
            </h3>
            <div className="space-y-2 text-sm text-cream/80">
              <p>BCA "Moldova-Agroindbank",</p>
              <p>Filiala Miron Costin, AGRNMD2X710</p>
              <p className="pt-2">
                <span className="text-wheat">IBAN:</span>{" "}
                MD64AG000002251504014727
              </p>
              <p>
                <span className="text-wheat">C/F:</span> 1003600032623
              </p>
              <p>
                <span className="text-wheat">TVA:</span> 0402127
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-cream/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl font-bold text-wheat">
                DARON-LUX
              </span>
              <span className="text-cream/60 text-xs italic">
                Calitate și bun gust!
              </span>
            </div>
            <nav className="flex gap-6 text-sm">
              <Link to="/" className="text-cream/80 hover:text-wheat transition-colors">
                Acasă
              </Link>
              <Link to="/despre-noi" className="text-cream/80 hover:text-wheat transition-colors">
                Despre Noi
              </Link>
              <Link to="/produse" className="text-cream/80 hover:text-wheat transition-colors">
                Produse
              </Link>
              <Link to="/contacte" className="text-cream/80 hover:text-wheat transition-colors">
                Contacte
              </Link>
            </nav>
          </div>
          <p className="text-center text-cream/50 text-xs mt-6">
            © {new Date().getFullYear()} Daron-Lux. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
