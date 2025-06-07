// portfolio-nextjs/src/components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-brand-primary text-brand-nav-text p-6 text-center text-sm">
      {/* Using brand-nav-text for lighter text on dark bg, can be adjusted to a lighter gray if needed */}
      <p>BUCHELI © WEB DEVELOPMENT {new Date().getFullYear()}</p>
      <p className="mt-1">Built with Next.js & Tailwind CSS</p>
    </footer>
  );
};
export default Footer;
