import Image from "next/image";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import about from "../public/images/me.jpeg";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const About = () => {
  const global = {
    hidden: {
      opacity: 0,
      transition: { staggerChildren: 0.5 },
    },
    show: {
      opacity: 1,
      transition: { duration: 0.2, staggerChildren: 0.5 },
    },
  };
  const moveUp = {
    hidden: {
      opacity: 0,
      y: "10%",
    },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };
  return (
    <motion.div
      variants={global}
      initial="hidden"
      animate="show"
      className="h-screen indigo-900"
    >
      <Navbar
        css="sticky top-0 z-10 w-full p-4 bg-sky-600"
        items="px-6 mont inline-block fuchsia hover:text-blue-100"
      />
      <div className="w-11/12 mt-6 lg:w-10/12 mx-auto lg:mt-24" id="about">
        <Title>About me</Title>
        <motion.div
          variants={moveUp}
          initial="hidden"
          animate="show"
          className="lg:flex"
        >
          <div className="mx-auto px-4">
            <Image src={about} alt="about me" />
          </div>
          <div className="lg:w-3/5">
            <p className="block mont border border-gray-100 rounded-xl p-8 leading-10 text-lg text-justify">
              Hello again!
              <motion.div
                className="inline-block cursor-pointer px-2"
                animate={{
                  scale: [1, 2, 1],
                  rotate: [0, 0, 70, 70, 0],
                }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  repeatDelay: 1,
                }}
                whileHover={{
                  scale: [1, 2, 1],
                  rotate: [0, 0, 70, 70, 0],
                }}
              >
                👋
              </motion.div>
              <br />I am Fatima Zahra a computer science engineering student at
              <a
                href="http://ensias.um5.ac.ma/"
                className="font-semibold sky-200"
              >
                {" "}
                ENSIAS
              </a>{" "}
              in Morocco.
              <br />I am interested in learning and developing everything
              related to computer science, with a passion for creating clean
              code.
              <br /> Other than coding, I spend most of my free time doing video
              animation on my youtube channel. 📚 I have also been trying to
              read more so feel free to reach out to me with any book
              recommendations!
            </p>
            <div className="">
              <a href="/resume.pdf" download>
                <motion.button
                  whileHover={{
                    boxShadow: "0px 0px 12px rgb(255,255,255)",
                    backgroundColor: "rgb(17, 46, 58)",
                  }}
                  className="w-full lg:w-1/2 mb-4 bg-sky-600 py-2 px-4 rounded-3xl text-white mont mt-12 focus:outline-none"
                >
                  <p className="inline-block">Download resume</p>
                  <div className="px-1 inline-block">
                    <FontAwesomeIcon icon={faDownload} />
                  </div>
                </motion.button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
export default About;
