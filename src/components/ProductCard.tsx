import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface ProductCardProps {
  name: string;
  image: string;
  description?: string;
}

const ProductCard = ({ name, image, description }: ProductCardProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          whileHover={{ y: -8, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group cursor-pointer"
        >
          <div className="relative overflow-hidden rounded-2xl bg-card shadow-card hover:shadow-warm transition-all duration-300">
            {/* Image */}
            <div className="aspect-square overflow-hidden">
              <motion.img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
            </div>

            {/* Name Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-chocolate/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-serif text-lg font-semibold text-cream text-center">
                  {name}
                </h3>
              </div>
            </div>

            {/* Static Name Badge */}
            <div className="p-4 bg-gradient-to-r from-secondary to-card">
              <h3 className="font-serif text-lg font-semibold text-foreground text-center">
                {name}
              </h3>
            </div>
          </div>
        </motion.div>
      </DialogTrigger>

      <DialogContent className="max-w-lg p-0 overflow-hidden rounded-2xl border-0 bg-card">
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-full aspect-square object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-chocolate/90 to-transparent p-6">
            <h2 className="font-serif text-2xl font-bold text-cream">
              {name}
            </h2>
            {description && (
              <p className="mt-2 text-cream/80 text-sm">{description}</p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductCard;
