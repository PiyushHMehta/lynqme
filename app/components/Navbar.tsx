import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar bg-background border-b border-border text-foreground z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-semibold text-primary">
              LYNQ
            </Link>
          </div>

          {/* Links */}
          <div className="hidden sm:flex sm:space-x-8">
            <Link href="/" className="text-foreground hover:text-primary">
              Home
            </Link>
            <Link href="/connect" className="text-foreground hover:text-primary">
              Connect Device
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary">
              About
            </Link>
            <Link href="/pricing" className="text-foreground hover:text-primary">
              Pricing & Products
            </Link>
            <Link href="/misc" className="text-foreground hover:text-primary">
              Miscellaneous
            </Link>
          </div>

          {/* Call to Action (Sign In/Sign Up) */}
          <div className="hidden sm:flex items-center space-x-4">
            <Link href="/login" className="bg-primary text-primary-foreground px-4 py-2 rounded-md ">
              Sign In
            </Link>
            <Link href="/signup" className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md ">
              Sign Up
            </Link>
          </div>

          {/* Hamburger Menu (For mobile) */}
          <div className="sm:hidden flex items-center">
            <button className="text-foreground hover:text-primary focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
