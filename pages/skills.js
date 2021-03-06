import Title from "../components/Title";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

function Skills() {
  const global = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: { duration: 0.2, staggerChildren: 0.5 },
    },
  };
  const moyen = {
    begin: {
      width: "0%",
    },
    end: {
      width: "60%",
      transition: { duration: 1, type: "spring", stiffness: 100 },
    },
  };
  const good = {
    begin: {
      width: "0%",
    },
    end: {
      width: "80%",
      transition: { duration: 1, type: "spring", stiffness: 100 },
    },
  };
  return (
    <motion.div
      className="indigo-900"
      variants={global}
      initial="hidden"
      animate="show"
    >
      <Navbar />
      <div className="w-11/12 lg:w-10/12 mx-auto mt-6 font-mono" id="skills">
        <Title value="skills">My skills</Title>
        <div className="pb-4 grid xl:grid-cols-4 md:grid-cols-2 mx-auto mt-4 w-11/12 lg:gap-8">
          <div className="mx-auto mb-4 mont border border-gray-100 rounded-xl shadow w-11/12 h-96">
            <div className="w-24 container mx-auto py-4">
              <div className="php w-24 h-24" />
            </div>
            <div>
              <ul className=" w-full px-4 mx-auto mont">
                <div className="">
                  <li className="flex-grow">PHP</li>
                  <motion.div
                    variants={good}
                    initial="begin"
                    animate="end"
                    className="block bg-sky-600 w-24 h-4 my-2 mx-4 rounded-xl"
                  />
                </div>
                <div className="">
                  <li className="flex-grow">Laravel 8</li>
                  <motion.div
                    variants={good}
                    initial="begin"
                    animate="end"
                    className="block bg-sky-600 w-24 h-4 my-2 mx-4 rounded-xl"
                  />
                </div>
                <div className="">
                  <li className="flex-grow">Symfony 5</li>
                  <motion.div
                    variants={moyen}
                    initial="begin"
                    animate="end"
                    className="block bg-yellow-400 w-24 h-4 my-2 mx-4 rounded-xl"
                  />
                </div>
              </ul>
            </div>
          </div>
          <div className="mx-auto mb-4 mont border border-gray-100 rounded-xl shadow w-11/12 h-96">
            <div className="w-24 container mx-auto py-4">
              <div className="node w-24 h-24" />
            </div>
            <div>
              <ul className=" w-full px-4 mx-auto mont">
                <div className="">
                  <li className="flex-grow">Reactjs</li>
                  <motion.div
                    variants={good}
                    initial="begin"
                    animate="end"
                    className="block bg-sky-600 w-32 h-4 my-2 mx-4 rounded-xl"
                  />
                </div>
                <div className="">
                  <li className="flex-grow">Expressjs</li>
                  <motion.div
                    variants={moyen}
                    initial="begin"
                    animate="end"
                    className="block bg-yellow-400 w-24 h-4 my-2 mx-4 rounded-xl"
                  />
                </div>
                <div className="">
                  <li className="flex-grow">Nextjs</li>
                  <motion.div
                    variants={moyen}
                    initial="begin"
                    animate="end"
                    className="block bg-yellow-400 w-24 h-4 my-2 mx-4 rounded-xl"
                  />
                </div>
              </ul>
            </div>
          </div>
          <div className="mx-auto mb-4 mont border border-gray-100 rounded-xl shadow w-11/12 h-96">
            <div className="w-24 container mx-auto py-4">
              <div className="py w-24 h-24" />
            </div>
            <div>
              <ul className=" w-full px-4 mx-auto mont">
                <div className="">
                  <li className="flex-grow">Python 3</li>
                  <motion.div
                    variants={good}
                    initial="begin"
                    animate="end"
                    className="block bg-sky-600 w-32 h-4 my-2 mx-4 rounded-xl"
                  />
                </div>
                <div className="">
                  <li className="flex-grow">Flask</li>
                  <motion.div
                    variants={moyen}
                    initial="begin"
                    animate="end"
                    className="block bg-yellow-400 w-24 h-4 my-2 mx-4 rounded-xl"
                  />
                </div>
              </ul>
            </div>
          </div>
          <div className="mx-auto mb-4 mont border border-gray-100 rounded-xl shadow w-11/12 h-96">
            <div className="w-24 container mx-auto py-4">
              <div className="js w-24 h-24" />
            </div>
            <div>
              <ul className=" w-full px-4 mx-auto mont">
                <div className="">
                  <li className="flex-grow">Javascript</li>
                  <motion.div
                    variants={good}
                    initial="begin"
                    animate="end"
                    className="block bg-sky-600 w-32 h-4 my-2 mx-4 rounded-xl"
                  />
                </div>
                <div className="">
                  <li className="flex-grow">Typescript</li>
                  <motion.div
                    variants={moyen}
                    initial="begin"
                    animate="end"
                    className="block bg-yellow-400 w-32 h-4 my-2 mx-4 rounded-xl"
                  />
                </div>
              </ul>
            </div>
          </div>
          <div className="mx-auto mb-4 mont border border-gray-100 rounded-xl shadow w-11/12 h-96">
            <div className="w-24 container mx-auto py-4">
              <div className="html w-24 h-24" />
            </div>
            <div>
              <ul className=" w-full px-4 mx-auto mont">
                <div className="">
                  <li className="flex-grow">HTML5</li>
                  <motion.div
                    variants={good}
                    initial="begin"
                    animate="end"
                    className="block bg-sky-600 w-32 h-4 my-2 mx-4 rounded-xl"
                  />
                </div>
                <div className="">
                  <li className="flex-grow">Blade</li>
                  <motion.div
                    variants={good}
                    initial="begin"
                    animate="end"
                    className="block bg-sky-600 w-32 h-4 my-2 mx-4 rounded-xl"
                  />
                </div>
                <div className="">
                  <li className="flex-grow">Twing</li>
                  <motion.div
                    variants={moyen}
                    initial="begin"
                    animate="end"
                    className="block bg-yellow-400 w-32 h-4 my-2 mx-4 rounded-xl"
                  />
                </div>
              </ul>
            </div>
          </div>
          <div className="mx-auto mb-4 mont border border-gray-100 rounded-xl shadow w-11/12 h-96">
            <div className="w-24 container mx-auto py-4">
              <div className="css w-24 h-24" />
            </div>
            <div>
              <ul className=" w-full px-4 mx-auto mont">
                <div className="">
                  <li className="flex-grow">CSS3</li>
                  <motion.div
                    variants={good}
                    initial="begin"
                    animate="end"
                    className="block bg-sky-600 w-32 h-4 my-2 mx-4 rounded-xl"
                  />
                </div>
                <div className="">
                  <li className="flex-grow">Tailwindcss</li>
                  <motion.div
                    variants={good}
                    initial="begin"
                    animate="end"
                    className="block bg-sky-600 w-32 h-4 my-2 mx-4 rounded-xl"
                  />
                </div>
              </ul>
            </div>
          </div>
          <div className="mx-auto mb-4 mont border border-gray-100 rounded-xl shadow w-11/12 h-96">
            <div className="w-24 container mx-auto py-4">
              <div className="sql w-24 h-24" />
            </div>
            <div>
              <ul className=" w-full px-4 mx-auto mont">
                <div className="">
                  <li className="flex-grow">MySql</li>
                  <motion.div
                    variants={good}
                    initial="begin"
                    animate="end"
                    className="block bg-sky-600 w-32 h-4 my-2 mx-4 rounded-xl"
                  />
                </div>
                <div className="">
                  <li className="flex-grow">Sqlite</li>
                  <motion.div
                    variants={good}
                    initial="begin"
                    animate="end"
                    className="block bg-sky-600 w-32 h-4 my-2 mx-4 rounded-xl"
                  />
                </div>
              </ul>
            </div>
          </div>
          <div className="mx-auto mb-4 mont border border-gray-100 rounded-xl shadow w-11/12 h-96">
            <div className="w-24 container mx-auto py-4">
              <div className="git w-24 h-24" />
            </div>
            <div>
              <ul className=" w-full px-4 mx-auto mont">
                <div className="">
                  <li className="flex-grow">Git</li>
                  <motion.div
                    variants={good}
                    initial="begin"
                    animate="end"
                    className="block bg-sky-600 w-24 h-4 my-2 mx-4 rounded-xl"
                  />
                </div>
                <div className="">
                  <li className="flex-grow">Docker</li>
                  <motion.div
                    variants={moyen}
                    initial="begin"
                    animate="end"
                    className="block bg-yellow-400 w-24 h-4 my-2 mx-4 rounded-xl"
                  />
                </div>
                <div className="">
                  <li className="flex-grow">Vercel</li>
                  <motion.div
                    variants={moyen}
                    initial="begin"
                    animate="end"
                    className="block bg-yellow-400 w-24 h-4 my-2 mx-4 rounded-xl"
                  />
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
