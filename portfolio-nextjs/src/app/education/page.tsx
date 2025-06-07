// portfolio-nextjs/src/app/education/page.tsx
'use client';
import Layout from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link'; // Keep Link import even if not explicitly used in provided snippet for consistency
import { motion } from 'framer-motion';

type EducationItem = {
  id: string;
  degreeType: string;
  title: string;
  institution: string;
  institutionLink?: string;
  institutionLogo?: string;
  diplomaImage: string;
  verifyLink?: string;
  details?: string;
};

// Data should be the same as defined in subtask 7 for this page
const educationData: EducationItem[] = [
  {
    id: 'bachelor',
    degreeType: "Bachelor's Degree",
    title: 'Electronics Engineer',
    institution: 'Pontifical Xavierian University',
    institutionLink: 'https://www.youtube.com/watch?v=GX1kfHUGp-k',
    institutionLogo: '/images/images-education/javeriana.svg.png',
    diplomaImage: '/images/images-education/diploma.jpg',
    details: 'Founded in 1623',
  },
  {
    id: 'specialization',
    degreeType: "Specialization - Industrial Master's Degree",
    title: 'Specialist in Project Management of Telecommunications Engineering',
    institution: 'Saint Thomas Aquinas University',
    institutionLink: 'https://www.youtube.com/watch?v=muIv2Koppu4',
    institutionLogo: '/images/images-education/santo-tomas.png',
    diplomaImage: '/images/images-education/especializacion.jpg',
    details: 'Founded in 1580',
  },
  {
    id: 'master',
    degreeType: "Master's Degree",
    title: 'Master in Management of Business and Financial Institutions',
    institution: 'Lobachevsky State University Of Nizhny Novgorod UNN',
    institutionLink: 'https://www.youtube.com/watch?v=XPKybGveEq4',
    institutionLogo: '/images/images-education/lobachevsky.png',
    diplomaImage: '/images/images-education/russian-master.jpg',
    details: 'Established in 1916',
  },
  {
    id: 'nd-fend',
    degreeType: 'Nanodegree - Front End Developer',
    title: 'Front End Developer',
    institution: 'Udacity - Bertelsmann',
    institutionLink: 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011',
    institutionLogo: '/images/images-education/udacity-logo.png',
    diplomaImage: '/images/images-education/front-end-developer-nanodegree.jpg',
    verifyLink: 'https://graduation.udacity.com/confirm/e/6df43132-c38c-11ed-a594-4bdd575da368',
    details: 'Verified Certificate',
  },
  {
    id: 'nd-ai',
    degreeType: 'Nanodegree - Artificial Intelligence',
    title: 'Edge AI For IoT Developers',
    institution: 'Udacity - Intel',
    institutionLink: 'https://www.youtube.com/watch?v=GQxOC_Mx0ww',
    institutionLogo: '/images/images-education/udacity-logo.png',
    diplomaImage: '/images/images-education/edgeainanodegree.jpg',
    verifyLink: 'https://graduation.udacity.com/api/graduation/certificate/GDA3RGZK/download',
    details: 'Verified Certificate',
  },
  {
    id: 'nd-cloud',
    degreeType: 'Nanodegree - Cloud Computing',
    title: 'Hybrid Cloud Engineer',
    institution: 'Udacity - Nutanix',
    institutionLink: 'https://www.youtube.com/watch?v=PGd36HhKDuI',
    institutionLogo: '/images/images-education/udacity-logo.png',
    diplomaImage: '/images/images-education/nutanixnanodegree.jpg',
    verifyLink: 'https://graduation.udacity.com/api/graduation/certificate/RMPKKDA6/download',
    details: 'Verified Certificate',
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function EducationPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <motion.h1
          className="text-4xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Education
        </motion.h1>
        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <motion.section
              key={edu.id}
              className="bg-white p-6 md:p-8 rounded-xl shadow-xl hover:shadow-purple-300/40 transition-shadow duration-300 group" // Added group for hover effect on logo
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }} // Stagger appearance of education cards
            >
              <h2 className="text-2xl md:text-3xl font-bold text-purple-700 mb-3">{edu.degreeType}</h2>
              <div className="md:flex md:space-x-6 items-start">
                <div className="md:w-2/3">
                  <h3 className="text-xl lg:text-2xl font-semibold text-gray-800">{edu.title}</h3>
                  <a
                    href={edu.institutionLink || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors text-lg block mt-1 mb-2"
                  >
                    {edu.institution}
                  </a>
                  {edu.details && <p className="text-sm text-gray-500 mb-4">{edu.details}</p>}
                  {edu.verifyLink && (
                    <a
                      href={edu.verifyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-green-500 text-white px-5 py-2 rounded-md hover:bg-green-600 transition-colors text-sm font-medium mb-4 shadow-sm hover:shadow-md"
                    >
                      Verify Certificate
                    </a>
                  )}
                </div>
                <div className="md:w-1/3 mt-4 md:mt-0 flex flex-col items-center space-y-4">
                  {edu.institutionLogo && (
                    <div className="relative w-32 h-16 mb-3 self-center opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                       <Image src={edu.institutionLogo} alt={`${edu.institution} logo`} layout="fill" objectFit="contain" />
                    </div>
                  )}
                   <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md h-56 sm:h-64 md:h-72 border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                     <Image src={edu.diplomaImage} alt={`${edu.title} diploma`} layout="fill" objectFit="contain" className="p-2 bg-gray-50" />
                   </div>
                </div>
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </Layout>
  );
}
