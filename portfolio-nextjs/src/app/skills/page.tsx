// portfolio-nextjs/src/app/skills/page.tsx
'use client';
import Layout from '@/components/Layout';
import { FaCode, FaPaintBrush, FaDatabase, FaCloud, FaShieldAlt, FaMobileAlt, FaBrain, FaProjectDiagram, FaServer, FaTools, FaLanguage, FaLightbulb } from 'react-icons/fa';
import { motion } from 'framer-motion';

type SkillCategory = {
  name: string;
  icon?: React.ElementType;
  skills: string[];
};

// Data should be the same as defined in subtask 6 for this page
const skillsData: SkillCategory[] = [
  {
    name: 'Front-End Web Development',
    icon: FaPaintBrush,
    skills: [
      'JavaScript Unit Testing', 'Build Tools', 'Browser Compatibility and Transpilation', 'Babel', 'React Router',
      'Emotion/React', 'Emotion/React styled components', 'Expo', 'Expo GO', 'Expo Snack', 'Expo CLI', 'Formik',
      'Redux', 'MobX (Intermediate Level)', 'ReactJS', 'Handlebars.js', 'JSX', 'Material-UI', 'React Testing LIbrary',
      'Mocha', 'Jest', 'Webpack', 'Webpack Dev Server', 'Esbuild', 'Parcel.js', 'Vite.js', 'HTML 5', 'SEMANTIC HTML',
      'HTML5 Layout', 'CSS 3', 'CSS in JS', 'CSS Modules for React', 'Semantic CSS', 'OOCSS (Object-Oriented CSS)',
      'Tailwind (Intermediate Level)', '@font-face', 'SMACSS', 'SASS', 'BEM', 'Bootstrap 4', '960 Grid System',
      'Javascript', 'ES6', 'Asynchronous JavaScript', 'JavaScript Debugging', 'TypeScript', 'DOM Manipulation', 'jQuery',
      'Web Design', 'Git, GitHub and Version Control', 'Balsamic', 'XCode', 'Adobe Color', 'Cloudflare Design',
      'Color Design', 'Ajax', 'Fetch API', 'Axios API', 'Responsive Web Design', 'MVC Framework', 'WordPress', 'Wix',
      'Component Based Architecture', 'Entity Relationship Modelling, Object Relational Mapping', 'W3.CSS', 'Ant Design',
      'Refine (Beginner Level)', 'React-Query (Beginner Level)', 'LESS (Beginner Level)', 'Redux-Thunk',
      'Mock Service Worker', 'Vue.js', 'Visual Studio Code', 'React Developer Tools', 'Sublime Text', 'ESLint',
      'React Starter Kits', 'Custom Hooks', 'Nuxt.js', 'Vuex', 'Next.js', 'D3', 'Beautiful Soup', 'Lodash', 'Vuetify',
      'Web Scrapping', 'Velo by Wix (Beginner Level)', 'Jekyll', 'P5.JS', 'Zustand', 'Wretch', 'Linaria', 'Sanitize.css',
      'Mantine', 'ECharts', 'React Hook Form', 'Luxon', 'JWT Decode', 'Papaparse', 'UI/UX'
    ],
  },
  {
    name: 'Back-End Web Development',
    icon: FaDatabase,
    skills: [
      'Node.js', 'NPM', 'Express.js', 'Nodemon', 'Body Parser', 'EJS', 'REST', 'APIs', 'REST API Endpoints', 'PHP',
      'MySQL', 'Supabase', 'PostgreSQL', 'Node-Postgres', 'Python 3', 'Databases', 'SQL', 'JSON', 'MongoDB', 'Mongoose',
      'GitHub Pages', 'Apache', 'Server Side JavaScript', 'CRUD', 'Mongo Atlas', 'Robo 3T', 'Mailchimp', 'bcrypt',
      'OAuth 2.0', 'Advanced CLI', 'Bash Command Line', 'Bash Shell Scripting', 'Heroku', 'MongoDB Atlas', 'Netlify',
      'Deployment with Render.com', 'Node-SQLite', 'Flask', 'GraphQL', 'RESTful APIs', 'Laravel', 'MERN Stack',
      'Python Requests', 'Moleculer', 'Prisma', 'TsConfig Paths', 'Moleculer Web', 'Development of APIs in Python'
    ],
  },
  {
    name: 'Data Science, Machine Learning, and Artificial Intelligence',
    icon: FaBrain,
    skills: [
      'OpenVino', 'TensorFlow', 'Pytorch', 'OpenCV', 'Numpy', 'Pandas', 'Matplotlib', 'Transact-SQL', 'R',
      'Hugging Face', 'Statistics in Python', 'Data Manipulation with pandas', 'Joining Data with pandas',
      'Python Data Manipulation'
    ],
  },
  {
    name: 'Generative Artificial Intelligence',
    icon: FaLightbulb,
    skills: [
        'MidJourney', 'OpenAI API', 'Advanced Prompt Engineering', 'AIOps', 'Gemini', 'Explainable AI (XAI)',
        'Microsoft 365 Copilot', 'Microsoft Bing Chat', 'ChatGPT', 'LLMS', 'GitHub Copilot',
        'Pair Programming with AI', 'Claude AI', 'Claude Artifacts', 'Ethical AI'
    ]
  },
  {
    name: 'Cloud Computing',
    icon: FaCloud,
    skills: ['AWS', 'Azure', 'DevOps', 'Nutanix Hypervisor', 'Nutanix Prism'],
  },
  {
    name: 'Cybersecurity',
    icon: FaShieldAlt,
    skills: ['OWASP', 'Penetration Testing (Beginner Level)', 'Personal Digital Security (Beginner Level)', 'Ethical Hacking (Beginner Level)'],
  },
  {
    name: 'Cloud Native Architecture',
    icon: FaServer,
    skills: ['Docker', 'Kubernetes', 'Docker Compose', 'Containerization and Virtualization of Applications'],
  },
  {
    name: 'Core Software Development and Programming Languages',
    icon: FaCode,
    skills: ['JavaScript', 'TypeScript', 'Python', 'C', 'Go', 'C++', 'C# (Beginner Level)', 'Software Design', 'Design Thinking applied to Software Design', 'Software Architecture'],
  },
  {
    name: 'Servers',
    icon: FaServer,
    skills: ['Windows Server', 'Linux/Unix', 'Apache'],
  },
  {
    name: 'Code Reviewing Tools',
    icon: FaTools,
    skills: ['GitHub', 'Bitbucket', 'ReviewBoard', 'GitLab'],
  },
  {
    name: 'Project Management',
    icon: FaProjectDiagram,
    skills: ['Asana', 'Jira', 'Scrum', 'PMI', 'Agile', 'Extreme Programming (XP)', 'Kanban'],
  },
  {
    name: 'Deployment and Development Platforms',
    icon: FaCloud,
    skills: ['Heroku', 'Render', 'Netlify'],
  },
  {
    name: 'Mobile Development Skills',
    icon: FaMobileAlt,
    skills: ['React Native', 'App Inventor'],
  },
  {
    name: 'Information Technology Industry',
    icon: FaCode,
    skills: ['CompTIA IT - Software Development', 'Assembly Language', 'Instruction Set Architecture', 'Computer Architecture'],
  }
];


const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const tagContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } } // Faster stagger for tags
};

const tagVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

export default function SkillsPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <motion.h1
          className="text-4xl font-bold text-center text-gray-800 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h1>
        <motion.p
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          If you have an interesting project and you are looking for a Professional Web Developer with strong engineering background,
          take a look at my <a href="https://github.com/ARBUCHELI" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub Profile</a>,
          my <a href="https://www.codecademy.com/profiles/ANDRES.R.BUCHELI" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Codecademy Profile</a>,
          where I constantly spend my free time sharpening my technological tools, and feel free to contact me.
          Below you can see the different technologies I have worked with during my professional life.
        </motion.p>

        <div className="space-y-12">
          {skillsData.map((category) => (
            <motion.section
              key={category.name}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-3xl font-semibold text-purple-700 mb-6 flex items-center">
                {category.icon && <category.icon className="mr-3 text-2xl text-purple-500" />}
                {category.name}
              </h2>
              <motion.div
                className="flex flex-wrap gap-3"
                variants={tagContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }} // amount to trigger when 10% of div is visible
              >
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-purple-200 hover:text-purple-700 transition-all duration-200 cursor-default"
                    variants={tagVariants}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.section>
          ))}
        </div>
      </div>
    </Layout>
  );
}
