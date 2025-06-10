// portfolio-nextjs/src/components/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
<<<<<<< HEAD
    <header className="[background-color:#034f84] text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <Link href="/"  className="text-2xl font-bold hover:text-[#bd5734] transition-colors">
         Software Engineer
=======
    <header className="bg-brand-primary text-brand-nav-text shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <Link href="/" className="text-2xl font-bold hover:text-brand-accent-amber transition-colors">
          Andrés R. Bucheli
>>>>>>> 99190f338870ac5ad48520c68f21f1a873c4dc28
        </Link>
        {/* Navbar is a separate component, placed below header in Layout */}
      </div>
    </header>
  );
};
export default Header;
