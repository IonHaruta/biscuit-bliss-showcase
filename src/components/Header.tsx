import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Acasă", path: "/" },
  { name: "Despre Noi", path: "/despre-noi" },
  { name: "Produse", path: "/produse" },
  { name: "Contacte", path: "/contacte" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col"
            >
              <span className="text-2xl md:text-3xl font-serif font-bold text-primary">
                DARON-LUX
              </span>
              <span className="text-xs md:text-sm text-muted-foreground italic">
                Calitate și bun gust!
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative group"
              >
                <span
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.name}
                </span>
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: location.pathname === link.path ? 1 : 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </Link>
            ))}
          </nav>

          {/* Phone Numbers - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+37322472270"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+373 22 47-22-70</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 text-lg font-medium ${
                      location.pathname === link.path
                        ? "text-primary"
                        : "text-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href="tel:+37322472270"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-2 py-2 text-primary"
              >
                <Phone className="w-5 h-5" />
                <span>+373 22 47-22-70</span>
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
