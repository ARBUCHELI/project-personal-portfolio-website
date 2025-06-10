// portfolio-nextjs/src/app/certificates/page.tsx
'use client';
import Layout from '@/components/Layout';
import Image from 'next/image';
import { motion } from 'framer-motion'; // Import motion

// Define types (ensure these match your actual types)
type CertificateItem = {
  id: string;
  mainCategory: string;
  subCategory?: string;
  title: string;
  imageSrc: string;
  verifyLink: string;
  issuer?: string;
};

type ScholarshipItem = {
  id: string;
  issuer: string;
  title: string;
  imageSrc: string;
  year?: string;
  description?: string;
};

// Sample Data (ensure this matches your actual data)
const educationPlatformIcons = [
  { name: 'Codecademy', src: '/education-icons/codecademy.jpg' },
  { name: 'edX', src: '/education-icons/edx.jpg' },
  // ... more platforms
];

const allCertificatesData: CertificateItem[] = [
  {
    id: 'hr-css',
    mainCategory: 'HACKERRANK SKILL ASSESSMENT CERTIFICATES',
    title: 'CSS Skill Assessment',
    imageSrc: '/certificates/css-hackerrank.jpg',
    verifyLink: 'https://www.hackerrank.com/certificates/7c650a8b2b8e',
    issuer: 'HACKERRANK',
  },
  {
    id: 'cc-learn-c-path',
    mainCategory: 'PROGRAMMING AND CORE COMPUTER SCIENCE',
    subCategory: 'SKILL PATHS AND SKILL TRACKS',
    title: 'Learn C Skill Path',
    imageSrc: '/certificates/learn-c-skill-path.jpg',
    verifyLink: 'https://www.codecademy.com/profiles/ANDRES.R.BUCHELI/certificates/9dba9d9b6bf64cf58b2b416ef9cd0912',
    issuer: 'CODECADEMY',
  },
  // ... more certificates
];

const allScholarshipsData: ScholarshipItem[] = [
  {
    id: 'google-fend-udacity',
    issuer: 'GOOGLE / UDACITY',
    title: 'Front-End Web Developer',
    imageSrc: '/scholarships/google.jpg',
    year: '2017 - 2018',
  },
  // ... more scholarships
];

const mainCertificateCategories = Array.from(new Set(allCertificatesData.map(c => c.mainCategory)));

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function CertificatesPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <motion.h1
          className="text-4xl font-bold text-center text-brand-primary mb-6" // Updated
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Certificates and Scholarships
        </motion.h1>

        <motion.section
          className="mb-12 bg-brand-light-bg p-6 rounded-lg shadow-md" // Updated background
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold text-brand-primary mb-4 text-center">My Learning Platforms</h2> {/* Updated text color */}
          <p className="text-brand-text-primary mb-6 text-center max-w-lg mx-auto"> {/* Updated text color */}
            One of my biggest motivations as a Software Engineer is constant learning, and that is why I frequently use different
            virtual educational platforms to keep my knowledge up to date.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 items-center">
            {educationPlatformIcons.map(icon => (
              <div key={icon.name} className="flex flex-col items-center p-2 transition-transform hover:scale-110">
                <div className="relative w-20 h-20 mb-1">
                    <Image src={icon.src} alt={icon.name} width={80} height={80} className="object-contain rounded-lg" />
                </div>
                <p className="text-xs text-brand-text-secondary">{icon.name}</p> {/* Updated */}
              </div>
            ))}
          </div>
        </motion.section>

        {mainCertificateCategories.map(mainCat => {
          const certsInMainCat = allCertificatesData.filter(c => c.mainCategory === mainCat);
          const subCategories = Array.from(new Set(certsInMainCat.map(c => c.subCategory).filter(sc => sc)));

          return (
            <section key={mainCat} className="mb-16">
              <motion.h2
                className="text-3xl font-bold text-center text-brand-primary bg-brand-medium-light-bg py-4 my-8 rounded-md shadow-sm" // Updated
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
              >
                {mainCat}
              </motion.h2>

              {subCategories.length > 0 ? subCategories.map(subCat => {
                const certsInSubCat = certsInMainCat.filter(c => c.subCategory === subCat);
                if (certsInSubCat.length === 0) return null;
                return (
                  <div key={subCat} className="mb-10">
                    <motion.h3
                      className="text-2xl font-semibold text-brand-secondary mb-6 border-b-2 border-brand-accent-lightblue pb-2" // Updated
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      {subCat}
                    </motion.h3>
                    <motion.div
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.1 }}
                    >
                      {certsInSubCat.map((cert) => (
                        <motion.div
                          key={cert.id}
                          className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group"
                          variants={cardVariants}
                        >
                          <div className="relative w-full h-52 bg-white group-hover:bg-brand-lightest-bg transition-colors duration-300"> {/* Updated */}
                            <Image src={cert.imageSrc} alt={cert.title} layout="fill" objectFit="contain" className="p-3"/>
                          </div>
                          <div className="p-5 flex flex-col flex-grow">
                            <h4 className="text-base font-semibold text-brand-primary mb-2 flex-grow group-hover:text-brand-secondary transition-colors duration-300" title={cert.title}> {/* Updated */}
                              {cert.title.length > 70 ? cert.title.substring(0, 70) + '...' : cert.title}
                            </h4>
                            {cert.issuer && <p className="text-xs text-brand-accent-terracotta mb-2">Issuer: {cert.issuer}</p>} {/* Updated */}
                            <a href={cert.verifyLink} target="_blank" rel="noopener noreferrer" className="mt-auto w-full text-center bg-brand-primary text-white px-4 py-2 rounded-md hover:bg-brand-link-hover transition-colors text-sm font-medium"> {/* Updated */}
                              View Certificate
                            </a>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                );
              }) : (
                 <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                  >
                    {certsInMainCat.map((cert) => (
                       <motion.div
                          key={cert.id}
                          className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group"
                          variants={cardVariants}
                        >
                        <div className="relative w-full h-52 bg-white group-hover:bg-brand-lightest-bg transition-colors duration-300"> {/* Updated */}
                            <Image src={cert.imageSrc} alt={cert.title} layout="fill" objectFit="contain" className="p-3"/>
                        </div>
                        <div className="p-5 flex flex-col flex-grow">
                            <h4 className="text-base font-semibold text-brand-primary mb-2 flex-grow group-hover:text-brand-secondary transition-colors duration-300" title={cert.title}> {/* Updated */}
                              {cert.title.length > 70 ? cert.title.substring(0, 70) + '...' : cert.title}
                            </h4>
                            {cert.issuer && <p className="text-xs text-brand-accent-terracotta mb-2">Issuer: {cert.issuer}</p>} {/* Updated */}
                            <a href={cert.verifyLink} target="_blank" rel="noopener noreferrer" className="mt-auto w-full text-center bg-brand-primary text-white px-4 py-2 rounded-md hover:bg-brand-link-hover transition-colors text-sm font-medium"> {/* Updated */}
                            View Certificate
                            </a>
                        </div>
                      </motion.div>
                    ))}
                </motion.div>
              )}
            </section>
          );
        })}

        <section id="scholarships" className="mb-16">
          <motion.h2
            className="text-3xl font-bold text-center text-brand-primary bg-brand-medium-light-bg py-4 my-8 rounded-md shadow-sm" // Updated
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            Scholarships
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {allScholarshipsData.map((scholarship) => (
              <motion.div
                key={scholarship.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group"
                variants={cardVariants}
              >
                <div className="relative w-full h-52 bg-white group-hover:bg-brand-lightest-bg transition-colors duration-300"> {/* Updated */}
                    <Image src={scholarship.imageSrc} alt={scholarship.title} layout="fill" objectFit="contain" className="p-3"/>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-brand-primary mb-1 group-hover:text-brand-secondary transition-colors duration-300">{scholarship.title}</h3>
                  <p className="text-sm text-brand-accent-amber font-medium mb-1">{scholarship.issuer}</p>
                  {scholarship.year && <p className="text-xs text-brand-text-secondary mb-2">{scholarship.year}</p>} {/* Updated */}
                  {scholarship.description && <p className="text-xs text-brand-text-primary mb-3 flex-grow">{scholarship.description}</p>}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </Layout>
  );
}
