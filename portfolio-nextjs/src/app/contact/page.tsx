// portfolio-nextjs/src/app/contact/page.tsx
'use client';
import Layout from '@/components/Layout';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaCodepen, FaSkype } from 'react-icons/fa'; // Added FaSkype
import { SiCodecademy, SiCoursera, SiHackerrank } from 'react-icons/si'; // Kept for consistency
import { motion } from 'framer-motion';

type ContactLink = {
  id: string;
  name: string;
  url: string;
  Icon?: React.ElementType;
  customIconSrc?: string;
  altText: string;
};

// Data should be the same as defined in subtask 9 for this page
const contactLinks: ContactLink[] = [
  { id: 'github', name: 'GitHub', url: 'https://github.com/ARBUCHELI', Icon: FaGithub, altText: 'GitHub Profile' },
  { id: 'linkedin', name: 'LinkedIn', url: 'https://www.linkedin.com/in/andresregaladobucheli/?locale=en_US', Icon: FaLinkedin, altText: 'LinkedIn Profile' },
  { id: 'email', name: 'Email', url: 'mailto:radio_seattle@hotmail.com', Icon: FaEnvelope, altText: 'Send an Email' },
  { id: 'phone', name: 'Phone', url: 'tel:+79601847870', Icon: FaPhone, altText: 'Call Me' },
  { id: 'hhr', name: 'HeadHunter.ru', url: 'https://bryansk.hh.ru/resume/09b1a902ff072c9db30039ed1f334279355174', customIconSrc: '/contact-icons/hhr.png', altText: 'HeadHunter.ru Profile' },
  { id: 'codecademy', name: 'Codecademy', url: 'https://www.codecademy.com/profiles/ANDRES.R.BUCHELI', customIconSrc: '/education-icons/codecademy.jpg', altText: 'Codecademy Profile' },
  { id: 'coderwarriors', name: 'CoderWarriors', url: 'https://coderwarriors.wordpress.com/about/', customIconSrc: '/contact-icons/coderwarriors.jpg', altText: 'CoderWarriors Blog' },
  { id: 'codepen', name: 'Codepen', url: 'https://codepen.io/rothwulf', Icon: FaCodepen, altText: 'Codepen Profile' },
  { id: 'codeply', name: 'Codeply', url: 'https://www.codeply.com/u/arbucheli', customIconSrc: '/contact-icons/codeply.png', altText: 'Codeply Profile' },
  { id: 'replit', name: 'Replit', url: 'https://replit.com/@ARBUCHELI', customIconSrc: '/contact-icons/replit.png', altText: 'Replit Profile' },
  { id: 'expo', name: 'Expo Snacks', url: 'https://expo.dev/@andresrbucheli?tab=snacks', customIconSrc: '/contact-icons/expo.png', altText: 'Expo Snacks' },
  { id: 'coursera', name: 'Coursera', url: 'https://www.coursera.org/user/b79c4e7f912c5ab4a03b34b36f1f9d4b', customIconSrc: '/education-icons/coursera.jpg', altText: 'Coursera Profile' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.3 } } // delayChildren ensures title animates first
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 100 } }
};

export default function ContactPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 text-center">
        <motion.h1
          className="text-4xl lg:text-5xl font-bold text-brand-primary mb-6" // Updated
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h1>
        <motion.p
          className="text-lg text-brand-text-primary mb-12 max-w-xl mx-auto" // Updated
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Have an interesting project or opportunity? I would love to hear about it!
        </motion.p>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {contactLinks.map((link) => (
            <motion.a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-xl shadow-lg hover:shadow-brand-secondary/40 transition-all duration-300 ease-in-out flex flex-col items-center justify-center space-y-2 aspect-square group" // Updated shadow
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -5, boxShadow: "0px 10px 20px rgba(107, 91, 149, 0.2)" }} // Updated shadow (brand-secondary with opacity)
              whileTap={{ scale: 0.95 }}
            >
              {link.Icon && <link.Icon className="text-4xl md:text-5xl text-brand-secondary group-hover:text-brand-link-hover transition-colors" />} {/* Updated icon colors */}
              {link.customIconSrc && (
                <div className="relative w-12 h-12 md:w-14 md:h-14 group-hover:scale-110 transition-transform">
                  <Image src={link.customIconSrc} alt={link.altText} layout="fill" objectFit="contain" />
                </div>
              )}
              <span className="text-xs md:text-sm font-medium text-brand-text-primary group-hover:text-brand-secondary transition-colors">{link.name}</span> {/* Updated text colors */}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </Layout>
  );
}
