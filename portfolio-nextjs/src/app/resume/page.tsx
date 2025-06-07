// portfolio-nextjs/src/app/resume/page.tsx
import Layout from '@/components/Layout';
import { FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ResumePage() {
  const resumePdfPath = '/Andres_R_Bucheli_Resume.pdf';
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 text-center">
        <motion.h1
          className="text-4xl lg:text-5xl font-bold text-brand-primary mb-8" // Updated
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Resume
        </motion.h1>
        <motion.p
          className="text-lg text-brand-text-primary mb-12 max-w-xl mx-auto" // Updated
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          For a detailed look at my professional experience, skills, and educational background, please download my resume.
        </motion.p>
        <motion.a
          href={resumePdfPath}
          download
          className="inline-flex items-center bg-brand-secondary text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-opacity-80 hover:bg-brand-secondary transition-all duration-300 text-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:ring-opacity-50" // Updated
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 120 }}
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(107, 91, 149, 0.5)" }} // Updated shadow color (using brand-secondary #6b5b95)
          whileTap={{ scale: 0.95 }}
        >
          <FaDownload className="mr-3 h-5 w-5" />
          Download Resume (PDF)
        </motion.a>
      </div>
    </Layout>
  );
}
