// portfolio-nextjs/src/app/projects/page.tsx
'use client';
import Layout from '@/components/Layout';
import Image from 'next/image';
import { motion } from 'framer-motion'; // Import motion

// Define a type for individual projects for better type checking
type Project = {
  id: string;
  category: string;
  title: string;
  imageSrc: string;
  description: string;
  liveLink?: string; // Optional live link
  repoLink?: string; // Optional repo link
  techStack: string;
};

// Sample project data (more can be added, and this can be moved to a separate JSON file later)
const allProjects: Project[] = [
  // MERN Stack
  {
    id: 'mern-bookstore',
    category: 'Full-Stack Projects - MERN Stack',
    title: 'Bookstore App',
    imageSrc: '/projects/mern-book-store-app.jpg', // Ensure this path is correct in public folder
    description: 'Book Store MERN Full-Stack App.',
    liveLink: 'https://bookstore-ecommerce-mern-app-1.onrender.com/',
    repoLink: 'https://github.com/ARBUCHELI/BOOKSTORE-ECOMMERCE-MERN-APP',
    techStack: 'MongoDB, Express, React, Node.js',
  },
  {
    id: 'mern-soccer',
    category: 'Full-Stack Projects - MERN Stack',
    title: 'Bucheli Soccer Management App',
    imageSrc: '/projects/bucheli-soccer-management-app.jpg',
    description: 'Soccer Management MERN Full Stack App.',
    repoLink: 'https://github.com/ARBUCHELI/MERN-ESSENTIAL-TRAINING-SOCCER',
    techStack: 'MERN Stack',
  },
  // React & Redux
  {
    id: 'react-restaurants',
    category: 'Front-End Projects - React & Redux',
    title: 'Bucheli Restaurants Search App',
    imageSrc: '/projects/bucheli-restaurants.jpg',
    description: 'Bucheli Restaurants Search App Powered by React and Yelp API.',
    liveLink: 'https://bucheli-web-development-restaurants-search-app.netlify.app/',
    techStack: 'React, Yelp API',
  },
  {
    id: 'react-sci-fi-books',
    category: 'Front-End Projects - React & Redux',
    title: '30 Scientific Divulgation Books You Must Read',
    imageSrc: '/projects/30-divulgation-books.jpg',
    description: 'App Powered by React, Redux, React-Redux, and Redux Toolkit.',
    liveLink: '#', // Placeholder link
    techStack: 'React, Redux, Redux Toolkit',
  },
  // AI Projects
  {
    id: 'ai-pointer-controller',
    category: 'Artificial Intelligence - Edge AI for IoT',
    title: 'Computer Pointer Controller',
    imageSrc: '/projects/computer-pointer.jpg',
    description: 'AI application that allows a user to control the computer pointer with the eyes, using computer vision.',
    repoLink: 'https://github.com/ARBUCHELI/COMPUTER-POINTER-CONTROLLER',
    liveLink: 'https://www.youtube.com/watch?v=qy7uZli2U3w',
    techStack: 'Computer Vision, Python, OpenVino',
  },
  // Add more projects here...
];

// Get unique categories
const categories = Array.from(new Set(allProjects.map(p => p.category))).sort();


const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1 // Stagger animation for each card
    }
  }
};

export default function ProjectsPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <motion.h1
          className="text-4xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h1>

        {categories.map(category => (
          <section key={category} className="mb-16">
            <motion.h2
              className="text-3xl font-semibold text-purple-700 mb-8 border-b-2 border-purple-300 pb-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              {category}
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible" // Animate when the container is in view
              viewport={{ once: true, amount: 0.1 }} // Adjust amount to control when animation triggers
            >
              {allProjects.filter(project => project.category === category).map((project) => (
                <motion.div
                  key={project.id}
                  className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col group" // Added group for hover effects
                  variants={cardVariants}
                  // `initial` and `animate` will be handled by containerVariants' staggerChildren
                >
                  <div className="relative w-full h-56 overflow-hidden">
                    <Image
                      src={project.imageSrc}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg transform group-hover:scale-110 transition-transform duration-300 ease-in-out" // Zoom effect on hover
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-300">{project.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 flex-grow">{project.description}</p>
                    <p className="text-xs text-purple-500 font-semibold mb-4">
                      Technologies: {project.techStack}
                    </p>
                    <div className="mt-auto flex flex-wrap gap-3">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 text-sm font-medium"
                        >
                          Live Demo
                        </a>
                      )}
                      {project.repoLink && (
                        <a
                          href={project.repoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors duration-300 text-sm font-medium"
                        >
                          View Code
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>
        ))}
      </div>
    </Layout>
  );
}
