import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 w-full p-4 bg-sky-600">
      <div className="flex space-x-4 lg:mx-auto w-1/4">
        <Link href="/home">
          <a className="lg:px-6 mont inline-block fuchsia hover:text-blue-100">
            Home
          </a>
        </Link>
        <Link href="/about">
          <a className="lg:px-6 mont inline-block fuchsia hover:text-blue-100">
            About
          </a>
        </Link>
        <Link href="/skills">
          <a className="lg:px-6 mont inline-block fuchsia hover:text-blue-100">
            Skills
          </a>
        </Link>
        <Link href="/project">
          <a className="lg:px-6 mont inline-block fuchsia hover:text-blue-100">
            Project
          </a>
        </Link>
        <Link href="/contact">
          <a className="lg:px-6 mont inline-block fuchsia hover:text-blue-100">
            Contact
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
