// portfolio-nextjs/src/app/page.tsx
'use client';
import Layout from '@/components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const companyLogos = [
  { src: '/company-logos/company-logo-1.jpg', alt: 'Company Logo 1' },
  { src: '/company-logos/company-logo-2.jpg', alt: 'Company Logo 2' },
  { src: '/company-logos/company-logo-3.jpg', alt: 'Company Logo 3' },
  { src: '/company-logos/company-logo-4.jpg', alt: 'Company Logo 4' },
  { src: '/company-logos/company-logo-5.jpg', alt: 'Company Logo 5' },
  { src: '/company-logos/company-logo-6.png', alt: 'Company Logo 6' },
];

const sampleProjects = [
  {
    title: 'The Books that I Love',
    imageSrc: '/images/images-main-page/the-books-that-i-love.jpg',
    description: 'Organize your books digitally and remember the books you want to read in the future.',
    link: 'https://the-books-that-i-love-bucheli-web.netlify.app/',
    tech: 'Single page app powered by React, and Redux!',
  },
  {
    title: 'Would You Rather',
    imageSrc: '/images/images-main-page/would-you-rather.jpg',
    description: 'A social network that allows you to get to know your friends better.',
    link: 'https://would-you-rather-social-network.netlify.app/',
    tech: 'Single page app powered by React, and Redux!',
  },
  {
    title: 'PetBook',
    imageSrc: '/images/images-main-page/pet-book.jpg',
    description: 'Fun social network for pets that you will love.',
    link: 'https://bucheli-petbook.netlify.app/',
    tech: 'Single page app powered by React, and Redux!',
  },
  {
    title: 'My Favorite Sci-Fi Movies',
    imageSrc: '/images/images-projects/my-favorite-sci-fi-movies.jpg',
    description: 'Interactive List with your Favorite Sci-Fi Movies',
    link: 'https://bucheli-sci-fi-movies.netlify.app/',
    tech: 'Single page app powered by React, and Redux!',
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const HomePage = () => {
  const [timeCoding, setTimeCoding] = useState(0);
  const STARTING_DAY = "01-01-2008";

  useEffect(() => {
    const STARTING_DAY_DATE = new Date(STARTING_DAY);
    const interval = setInterval(() => {
      const now = new Date();
      const difference = Math.floor((now.getTime() - STARTING_DAY_DATE.getTime()) / 1000);
      setTimeCoding(difference);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <motion.section
        id="about-me"
        className="py-10 md:py-16 bg-brand-light-bg shadow-xl rounded-lg mb-12" // Updated background
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl font-bold text-center text-brand-primary mb-10">Andrés R. Bucheli</h2> {/* Updated text color */}
          <div className="prose prose-lg max-w-3xl mx-auto text-brand-text-primary space-y-5"> {/* Updated default text color */}
            <p>
              <span className="font-semibold text-brand-secondary">Hey there!</span> I'm <a {/* Updated span color */}
                href="https://www.linkedin.com/in/andresregaladobucheli/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-primary hover:text-brand-link-hover transition-colors" // Updated link colors
              >
                Andrés R. Bucheli
              </a>, and with over fifteen years of rich experience as a Software Engineer, I've passionately contributed to various domains related to
              Software Development, including Front-End Web Development, Back-End Web Development, Full-Stack Web Development, IoT Development, Computer Vision, Edge AI Development, Hybrid Cloud Engineering, UI/UX Design,
              React Development, Mobile Application Development with React Native, and Data Science.
            </p>
            <p>
              As the proud founder of <a href="https://bucheli-web.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:text-brand-link-hover transition-colors">Bucheli Software Development</a> I've spearheaded numerous successful projects for very important American, European, and Russian companies.
            </p>
            <p>
              My <Link href="/education" className="text-brand-primary hover:text-brand-link-hover transition-colors">academic journey</Link> comprises a <a href="/images/images-education/diploma.jpg" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:text-brand-link-hover transition-colors">Bachelor's Degree</a> in Electronics Engineering with a focus on Automatic Control and Telecommunications, complemented by a <a href="/images/images-education/especializacion.jpg" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:text-brand-link-hover transition-colors">Specialist's Degree</a> in Telecommunications Engineering Project Management, and a <a href="/images/images-education/russian-master.jpg" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:text-brand-link-hover transition-colors">Master's Degree</a> in Management of Business and Financial Institutions.
            </p>
            <p>
              Holding certifications from esteemed institutions such as <a href="https://www.bertelsmann.com/company/company-profile/" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:text-brand-link-hover transition-colors">Bertelsmann</a>, <a href="https://www.intel.com/content/www/us/en/support/ru-banner-inside.html" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:text-brand-link-hover transition-colors">Intel</a>, <a href="https://www.nutanix.com/" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:text-brand-link-hover transition-colors">Nutanix</a>, and <a href="https://www.udacity.com/" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:text-brand-link-hover transition-colors">Udacity</a>, I'm proficient in <span className="font-semibold">Full-Stack Web Development</span>, <span className="font-semibold">Edge AI For IoT Development</span>, and <span className="font-semibold">Hybrid Cloud Engineering</span>.
            </p>
            <p>
              With a blend of engineering, computer science, software development, and business management acumen, honed through engagements with
              top-tier multinational corporations, I possess a keen ability to decipher client needs effectively and craft
              solutions that align with their business objectives.
            </p>
            <p>
              Beyond the professional realm, I find solace in <a href="https://www.youtube.com/watch?v=adOx5Hme-6Q" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:text-brand-link-hover transition-colors">strumming the guitar</a>, crafting <a href="https://www.youtube.com/watch?v=LPDFTO6uKQo" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:text-brand-link-hover transition-colors">custom effects</a> for electric guitars, delving into historical, economic, and political literature, and sharing insights on
              coding through my <a href="https://my-tech-blog-bucheli-web.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:text-brand-link-hover transition-colors">dedicated blog</a>.
            </p>
            <p className="mt-8 text-xl text-center">
              I've spent
              <span className="font-bold text-brand-secondary mx-2 text-2xl"> {/* Updated text color */}
                {new Intl.NumberFormat("en-US").format(timeCoding)}
              </span>
              seconds coding websites.
            </p>
          </div>

          <motion.div
            className="mt-16"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-3xl font-semibold text-brand-primary text-center mb-10">Worked With / For</h3> {/* Updated text color */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
              {companyLogos.map((logo, index) => (
                <motion.div
                  key={logo.src}
                  className="flex justify-center p-2 grayscale hover:grayscale-0 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }} // Changed from whileInView for direct animation
                  transition={{ delay: index * 0.1 }}
                >
                  <Image src={logo.src} alt={logo.alt} width={120} height={60} className="object-contain h-14" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="projects-home"
        className="py-10 md:py-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-brand-primary text-center mb-10">Sample Projects</h2> {/* Updated */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Simplified to 2 columns for homepage */}
            {sampleProjects.slice(0, 2).map((project) => ( // Show only first 2 projects for brevity on home
              <motion.div
                key={project.title}
                className="bg-white shadow-xl rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative h-56">
                    <Image src={project.imageSrc} alt={project.title} layout="fill" objectFit="cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-brand-secondary mb-2">{project.title}</h3> {/* Updated text color */}
                  <p className="text-brand-text-primary text-sm mb-3">{project.description}</p> {/* Updated text color */}
                  <p className="text-brand-accent-red font-bold text-sm mb-4">{project.tech}</p> {/* Updated text color */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-brand-primary text-white px-4 py-2 rounded hover:bg-brand-secondary transition-colors" // Updated button colors
                  >
                    View Project
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
           <div className="text-center mt-10">
                <Link href="/projects" className="inline-block bg-brand-secondary text-white px-6 py-3 rounded-lg hover:bg-brand-primary transition-colors font-semibold"> {/* Updated button colors */}
                    View All Projects
                </Link>
            </div>
        </div>
      </motion.section>

      <motion.section
        id="skills-home"
        className="py-10 md:py-16 bg-brand-medium-light-bg rounded-lg my-12 shadow-inner" // Updated background
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <h3 className="text-3xl font-semibold text-brand-primary text-center mb-10">Core Technologies</h3> {/* Updated text color */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-5xl text-brand-text-secondary"> {/* Updated icon color */}
            {/* Using text for icons for simplicity, assuming Font Awesome is globally available via layout.tsx's <link> */}
            <i className="fab fa-html5 hover:text-brand-secondary transition-colors" title="HTML5"></i> {/* Updated hover color */}
            <i className="fab fa-css3-alt hover:text-brand-secondary transition-colors" title="CSS3"></i> {/* Updated hover color */}
            <i className="fab fa-js-square hover:text-brand-secondary transition-colors" title="JavaScript"></i> {/* Updated hover color */}
            <i className="fab fa-react hover:text-brand-secondary transition-colors" title="React"></i> {/* Updated hover color */}
            <i className="fab fa-node hover:text-brand-secondary transition-colors" title="Node.js"></i> {/* Updated hover color */}
            <i className="fab fa-aws hover:text-brand-secondary transition-colors" title="AWS"></i> {/* Updated hover color */}
            <i className="fab fa-git-alt hover:text-brand-secondary transition-colors" title="Git"></i> {/* Updated hover color */}
            <i className="fab fa-python hover:text-brand-secondary transition-colors" title="Python"></i> {/* Updated hover color */}
          </div>
           <div className="text-center mt-10">
                <Link href="/skills" className="inline-block bg-brand-text-secondary text-white px-6 py-3 rounded-lg hover:bg-brand-primary transition-colors font-semibold"> {/* Updated button colors */}
                    Explore All Skills
                </Link>
            </div>
        </div>
      </motion.section>
    </Layout>
  );
};
export default HomePage;
