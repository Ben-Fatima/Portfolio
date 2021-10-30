import Link from "next/link";

const Navbar = ({ css, items }) => {
  return (
    <nav className={css}>
      <div className="flex mx-auto w-1/4">
        <Link href="/home">
          <a className={items}>Home</a>
        </Link>
        <Link href="/about">
          <a className={items}>About</a>
        </Link>
        <Link href="/skills">
          <a className={items}>Skills</a>
        </Link>
        <Link href="/project">
          <a className={items}>Project</a>
        </Link>
        <Link href="/contact">
          <a className={items}>Contact</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
