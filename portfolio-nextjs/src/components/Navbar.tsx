// portfolio-nextjs/src/components/Navbar.tsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const navItems = [
  { href: '/', label: 'About Me' },
  { href: '/projects', label: 'Projects' },
  { href: '/customizations', label: 'Customizations' },
  { href: '/skills', label: 'Skills' },
  { href: '/certificates', label: 'Certificates' },
  { href: '/education', label: 'Education' },
  { href: '/resume', label: 'Resume' },
  { href: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <ul className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center items-center h-14 space-x-2 sm:space-x-3 md:space-x-4">
        {navItems.map((item) => (
          <li key={item.href} className="relative">
            <Link
              href={item.href}
              className={`block px-2 py-2 sm:px-3 text-sm font-medium rounded-md transition-colors duration-200 ease-in-out
                ${pathname === item.href ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-400 hover:bg-gray-700'}`}
            >
              {item.label}
            </Link>
            {pathname === item.href && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-400"
                layoutId="underline" // Animates the underline
                initial={false}
                animate={{ opacity: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
