import Link from "next/link";
import Image from "next/image";
import home from "../public/images/home2.svg";
import Header from "../components/Header";
import Quote from "../components/Quote";
import Navbar from "../components/Navbar";
import SocialMedia from "../components/SocialMedia";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const Leading = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="indigo-900 h-screen"
    >
      <Navbar
        css="sticky top-0 z-10 w-full p-4 bg-sky-600"
        items="px-6 mont inline-block fuchsia hover:text-blue-100"
      />
      <div className="w-full pb-10">
        <div className="w-10/12 flex mx-auto mt-14">
          <div className="w-1/2">
            <Header />
            <Quote />
            <SocialMedia css="flex mt-8 text-lg sky-600" />
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgb(255, 255, 255)",
                color: "white",
                backgroundColor: "rgba(218, 167, 0, 0.904)",
              }}
              className="bg-gold py-2 px-4 rounded-3xl sky-600 mont mt-12 focus:outline-none"
            >
              <Link href="/contact">
                <a>
                  <p className="px-1 inline-block">Contact me</p>
                  <FontAwesomeIcon icon={faComments} />
                </a>
              </Link>
            </motion.button>
          </div>
          <motion.div
            className="w-1/2 text-white mt-24 hidden lg:block"
            animate={{ y: ["5%", "-5%"] }}
            transition={{
              repeatType: "reverse",
              duration: 1.3,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            <Image
              src={home}
              alt="Illustration of the developer"
              className="w-full"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
export default Leading;
