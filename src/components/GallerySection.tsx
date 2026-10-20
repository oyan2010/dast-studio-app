import { motion } from 'framer-motion';

const MOCK_DESIGNS = [
    { id: 1, name: 'Emerald Satin', price: '$1,850', image: '/screen.png' }, // Using screen.png which is the shoe
    { id: 2, name: 'Ruby Velvet', price: '$2,100', image: '/mock1.png' },    // Using the other uploaded image
    { id: 3, name: 'Midnight Leather', price: '$1,950', image: '/screen.png' }, // Reuse for now
];

export const GallerySection = () => {
    return (
        <section className="py-20 px-6 md:px-16 w-full">
            <h2 className="text-3xl font-light uppercase tracking-[0.2em] mb-12 text-center text-[#181112]">
                Curated <span className="text-primary font-bold">Inspirations</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {MOCK_DESIGNS.map((design, i) => (
                    <motion.div
                        key={design.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className="group relative h-[400px] glass-panel rounded-2xl overflow-hidden cursor-pointer"
                    >
                        {/* Image Container */}
                        <div className="absolute inset-0 flex items-center justify-center p-8 transition-transform duration-700 group-hover:scale-105">
                            <img src={design.image} alt={design.name} className="w-full h-full object-contain drop-shadow-xl" />
                        </div>

                        {/* Overlay Info */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex justify-between items-end">
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-widest">{design.name}</h3>
                                <p className="text-xs text-rose-gold mt-1">{design.price}</p>
                            </div>
                            <button className="size-10 rounded-full bg-[#181112] text-white flex items-center justify-center hover:bg-primary transition-colors">
                                <span className="material-symbols-outlined text-sm">+</span>
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
