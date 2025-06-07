// portfolio-nextjs/src/components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 p-6 text-center text-sm">
      <p>BUCHELI © WEB DEVELOPMENT {new Date().getFullYear()}</p>
      <p className="mt-1">Built with Next.js & Tailwind CSS</p>
    </footer>
  );
};
export default Footer;
