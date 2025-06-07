// portfolio-nextjs/src/components/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <Link href="/" className="text-2xl font-bold hover:text-yellow-300 transition-colors">
          Andrés R. Bucheli
        </Link>
        {/* Navbar is a separate component, placed below header in Layout */}
      </div>
    </header>
  );
};
export default Header;
