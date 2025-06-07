// portfolio-nextjs/src/app/customizations/page.tsx
'use client';
import Layout from '@/components/Layout';
import Image from 'next/image';
import { motion } from 'framer-motion'; // Import motion

// Define a type for individual customizations
type Customization = {
  id: string;
  category: string;
  title: string;
  imageSrc: string | string[]; // Single image or array of images
  description: string; // This was the link text in the original
  liveLink: string;
};

// Sample customization data (ensure this matches your actual data structure)
const allCustomizations: Customization[] = [
  // W3.CSS Templates
  {
    id: 'w3css-band',
    category: 'Components built with HTML, CSS, and JavaScript - W3.CSS Templates',
    title: 'Band Template',
    imageSrc: '/customizations/w3css-band-template.jpg',
    description: 'Please take a look at the live example!',
    liveLink: 'https://bucheli-web-catalog-templates-rock-band.netlify.app/#',
  },
  {
    id: 'w3css-catering',
    category: 'Components built with HTML, CSS, and JavaScript - W3.CSS Templates',
    title: 'Catering Service Template',
    imageSrc: '/customizations/catering-service.jpg',
    description: 'Please take a look at the live example!',
    liveLink: 'https://catering-service-template.netlify.app/',
  },
  // Collection
  {
    id: 'collection-fullscreen-video',
    category: 'Components built with HTML, CSS, and JavaScript - Collection',
    title: 'Fullscreen Video',
    imageSrc: '/customizations/fullscreen-video.jpg',
    description: 'Please take a look at the live example!',
    liveLink: 'https://bucheli-fullscrean-video.netlify.app/',
  },
  {
    id: 'collection-custom-modal',
    category: 'Components built with HTML, CSS, and JavaScript - Collection',
    title: 'Custom Modal',
    imageSrc: ['/customizations/modal1.jpg', '/customizations/modal2.jpg'],
    description: 'Please take a look at the live example!',
    liveLink: 'https://custom-modal-refactored.netlify.app/',
  },
  // Custom Menus (example)
   {
    id: 'menu-horizontal-icon',
    category: 'Components built with HTML, CSS, and JavaScript - Custom Menus',
    title: 'Menu with horizontal icon bar',
    imageSrc: '/customizations/menu-with-horizontal-icon-bar.jpg',
    description: 'Please take a look at the live example!',
    liveLink: 'https://horizontal-icon-bar-refactored.netlify.app/',
  },
  // Custom Images (example)
  {
    id: 'image-simple-slideshow',
    category: 'Components built with HTML, CSS, and JavaScript - Custom Images',
    title: 'Custom Simple Slideshow',
    imageSrc: '/customizations/custom-simple-slider.jpg',
    description: 'Please take a look at the live example!',
    liveLink: 'https://custom-slider-bucheli-web-development.netlify.app/',
  },
];

// Get unique categories, ensuring specific order if possible or sort alphabetically
const categories = [
    "Components built with HTML, CSS, and JavaScript - W3.CSS Templates",
    "Components built with HTML, CSS, and JavaScript - Collection",
    "Components built with HTML, CSS, and JavaScript - Custom Menus",
    "Components built with HTML, CSS, and JavaScript - Custom Images"
];


const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function CustomizationsPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <motion.h1
          className="text-4xl font-bold text-center text-gray-800 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Customizations
        </motion.h1>
        <motion.p
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Here you can find different kinds of components, functionalities, and templates that you can add to your web pages, web platforms and web applications.
          Do not hesitate to contact me to request the best service, and please remember that the satisfaction of my clients is my main motivation to continue improving.
        </motion.p>

        {categories.map(category => {
          const itemsInCategory = allCustomizations.filter(item => item.category === category);
          if (itemsInCategory.length === 0) return null;

          return (
            <section key={category} className="mb-16">
              <motion.h2
                className="text-3xl font-semibold text-purple-700 mb-8 border-b-2 border-purple-300 pb-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
              >
                {category.replace('Components built with HTML, CSS, and JavaScript - ', '')}
              </motion.h2>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                {itemsInCategory.map((item) => (
                  <motion.div
                    key={item.id}
                    className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col group"
                    variants={cardVariants}
                  >
                    <div className="relative w-full h-56 bg-gray-200 overflow-hidden">
                      <Image
                        src={Array.isArray(item.imageSrc) ? item.imageSrc[0] : item.imageSrc}
                        alt={item.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
                      />
                      {Array.isArray(item.imageSrc) && item.imageSrc.length > 1 && (
                        <span className="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded-md shadow">
                          +{item.imageSrc.length - 1} more
                        </span>
                      )}
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-300">{item.title}</h3>
                      <div className="mt-auto">
                        <a
                          href={item.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 text-sm font-medium"
                        >
                          {item.description}
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </section>
          );
        })}
      </div>
    </Layout>
  );
}
