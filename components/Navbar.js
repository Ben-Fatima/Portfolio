import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <nav className="flex sticky top-0 z-10 w-full p-4 bg-slate-800">
      <div className="flex-grow">
        <h1 className="font-mono px-4 text-white text-lg font-semibold">
          Portfolio
        </h1>
      </div>
      <div>
        <Link href="/home">
          <a
            className={
              currentRoute === "/home"
                ? "mx-4 text-lg text-slate-900 bg-yellow-400 font-black px-8 py-2 rounded shadow"
                : "mx-4 text-lg text-white hover:gray-200 hover:bg-gray-100 hover:text-slate-900 hover:shadow-white hover:shadow px-8 py-2 rounded"
            }
          >
            Home
          </a>
        </Link>
        <Link href="/about">
          <a
            className={
              currentRoute === "/about"
                ? "mx-4 text-lg text-slate-900 bg-yellow-400 font-black px-8 py-2 rounded shadow"
                : "mx-4 text-lg text-white hover:gray-200 hover:bg-gray-100 hover:text-slate-900 hover:shadow-white hover:shadow px-8 py-2 rounded"
            }
          >
            About
          </a>
        </Link>
        <Link href="/skills">
          <a
            className={
              currentRoute === "/skills"
                ? "mx-4 text-lg text-slate-900 bg-yellow-400 font-black px-8 py-2 rounded shadow"
                : "mx-4 text-lg text-white hover:gray-200 hover:bg-gray-100 hover:text-slate-900 hover:shadow-white hover:shadow px-8 py-2 rounded"
            }
          >
            Skills
          </a>
        </Link>
        <Link href="/project">
          <a
            className={
              currentRoute === "/project"
                ? "mx-4 text-lg text-slate-900 bg-yellow-400 font-black px-8 py-2 rounded shadow"
                : "mx-4 text-lg text-white hover:gray-200 hover:bg-gray-100 hover:text-slate-900 hover:shadow-white hover:shadow px-8 py-2 rounded"
            }
          >
            Projects
          </a>
        </Link>
        <Link href="/contact">
          <a
            className={
              currentRoute === "/contact"
                ? "mx-4 text-lg text-slate-900 bg-yellow-400 font-black px-8 py-2 rounded shadow"
                : "mx-4 text-lg text-white hover:gray-200 hover:bg-gray-100 hover:text-slate-900 hover:shadow-white hover:shadow px-8 py-2 rounded"
            }
          >
            Contact me
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
