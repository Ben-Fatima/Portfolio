import Image from "next/image";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import about from "../public/images/me.jpg";
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
          <div className="mx-auto px-4 w-1/3">
            <Image
              src={about}
              alt="Fatima zahra benhammou"
              className="rounded-xl"
            />
          </div>
          <div className="lg:w-3/5">
            <p className="block mont border border-gray-100 rounded-xl p-8 leading-10 text-lg text-justify">
              <p className="text-2xl font-bold text-gray-900 py-4 leading-loose">
                I&apos;m Fatima zahra, a software engineer graduated from{" "}
                <a
                  href="http://ensias.um5.ac.ma/"
                  className="font-semibold text-sky-600"
                >
                  ENSIAS
                </a>
                .
              </p>
              I am interested in learning and developing everything related to
              computer science, with a passion for clean code. I also
              participate in many competitive programming contests with the
              passion to be a champion one day 😜.
              <p className="pt-6">
                Other than coding, I like to spend my free time learning video
                editing and creating animations, I also like to play{" "}
                <a
                  href="https://www.chess.com/member/oressama"
                  className="font-semibold text-sky-600"
                >
                  Chess♛
                </a>
                .
              </p>
              <p className="pt-6">
                I have also been trying to read more 📚 so feel free to reach
                out to me with any book recommendations!
              </p>
            </p>
            <div className="w-full">
              <a className="w-full" href="/resume.pdf" download>
                <motion.button
                  whileHover={{
                    boxShadow: "0px 0px 12px rgb(255,255,255)",
                    backgroundColor: "rgb(17, 46, 58)",
                  }}
                  className="w-full lg:w-1/2 bg-yellow-400 py-2 px-4 rounded-3xl text-slate-800 mont mt-12 focus:outline-none hover:text-gray-100"
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
