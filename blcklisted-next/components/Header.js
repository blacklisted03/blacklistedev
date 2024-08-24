// components/Header.js
import Link from 'next/link';
import Button from './Button';

const handleClick = () => {
    alert('Button clicked!');
  };

const Header = () => {
  return (
    <header className="text-white py-4 fixed z-30 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
            <Link href="/">
                <img src="/images/web-logo.png" alt="Logo" className="h-8" />   
            </Link>
        </div>
        <nav>
          <ul className="flex space-x-6 uppercase">
            <li>
              <Link href="/about" className="hover:text-gray-200">About</Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-gray-200">Portfolio</Link>
            </li>
            <li>
              <Link href="/reviews" className="hover:text-gray-200">Reviews</Link>
            </li>
            <li>
              <Link href="/contact" className='hover:text-gray-200'>Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="text-2xl font-bold">
            <Button label="Connect" onClick={handleClick} />
        </div>
      </div>
    </header>
  );
};

export default Header;
