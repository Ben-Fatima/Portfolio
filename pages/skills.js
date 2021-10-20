import Title from "../components/Title";
import Navbar from "../components/Navbar";
import skills from "../public/images/competence.png";
import Image from "next/image";
import { motion } from "framer-motion";

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="indigo-900"
    >
      {" "}
      <Navbar
        css="sticky top-0 z-10 w-full p-4 bg-sky-600"
        items="px-6 mont inline-block fuchsia hover:text-blue-100"
      />
      <div className="w-10/12 mx-auto mt-8 indigo-900" id="skills">
        <Title value="skills">My skills</Title>
        <div className="grid grid-cols-4 grid-rows-2 mx-auto w-10/12 gap-8">
          <div className="mont border border-gray-100 rounded-xl shadow w-11/12 h-72">
            <div className="w-24 container mx-auto py-4">
              <div className="php w-24 h-24" />
            </div>
            <div>
              <ul className="leading-10 w-full px-4 mx-auto mont">
                <div className="flex">
                  <li className="flex-grow">PHP</li>
                  <div className="bg-gold w-24 h-4 my-2 mx-4 rounded-xl" />
                </div>
                <div className="flex">
                  <li className="flex-grow">Laravel 8</li>
                  <div className="bg-gold w-24 h-4 my-2 mx-4 rounded-xl" />
                </div>
              </ul>
            </div>
          </div>
          <div className="mont border border-gray-100 rounded-xl shadow w-11/12 h-72">
            <div className="w-24 container mx-auto py-4">
              <div className="node w-24 h-24" />
            </div>
            <div>
              <ul className="leading-10 w-full px-4 mx-auto mont">
                <div className="flex">
                  <li className="flex-grow">Reactjs</li>
                  <div className="bg-sky-100 w-28 h-4 my-2 mx-4 rounded-xl" />
                </div>
                <div className="flex">
                  <li className="flex-grow">Expressjs</li>
                  <div className="bg-gold w-24 h-4 my-2 mx-4 rounded-xl" />
                </div>
                <div className="flex">
                  <li className="flex-grow">Nextjs</li>
                  <div className="bg-gold w-24 h-4 my-2 mx-4 rounded-xl" />
                </div>
              </ul>
            </div>
          </div>
          <div className="mont border border-gray-100 rounded-xl shadow w-11/12 h-72">
            <div className="w-24 container mx-auto py-4">
              <div className="py w-24 h-24" />
            </div>
            <div>
              <ul className="leading-10 w-full px-4 mx-auto mont">
                <div className="flex">
                  <li className="flex-grow">Python 3</li>
                  <div className="bg-sky-100 w-28 h-4 my-2 mx-4 rounded-xl" />
                </div>
                <div className="flex">
                  <li className="flex-grow">Flask</li>
                  <div className="bg-gold w-24 h-4 my-2 mx-4 rounded-xl" />
                </div>
              </ul>
            </div>
          </div>
          <div className="mont border border-gray-100 rounded-xl shadow w-11/12 h-72">
            <div className="w-24 container mx-auto py-4">
              <div className="js w-24 h-24" />
            </div>
            <div>
              <ul className="leading-10 w-full px-4 mx-auto mont">
                <div className="flex">
                  <li className="flex-grow">Javascript</li>
                  <div className="bg-sky-100 w-28 h-4 my-2 mx-4 rounded-xl" />
                </div>
                <div className="flex">
                  <li className="flex-grow">Jquery</li>
                  <div className="bg-gold w-24 h-4 my-2 mx-4 rounded-xl" />
                </div>
              </ul>
            </div>
          </div>
          <div className="mont border border-gray-100 rounded-xl shadow w-11/12 h-72">
            <div className="w-24 container mx-auto py-4">
              <div className="html w-24 h-24" />
            </div>
            <div>
              <ul className="leading-10 w-full px-4 mx-auto mont">
                <div className="flex">
                  <li className="flex-grow">HTML5</li>
                  <div className="bg-sky-100 w-28 h-4 my-2 mx-4 rounded-xl" />
                </div>
              </ul>
            </div>
          </div>
          <div className="mont border border-gray-100 rounded-xl shadow w-11/12 h-72">
            <div className="w-24 container mx-auto py-4">
              <div className="css w-24 h-24" />
            </div>
            <div>
              <ul className="leading-10 w-full px-4 mx-auto mont">
                <div className="flex">
                  <li className="flex-grow">Tailwindcss</li>
                  <div className="bg-sky-100 w-28 h-4 my-2 mx-4 rounded-xl" />
                </div>
                <div className="flex">
                  <li className="flex-grow">Bootstrap 5</li>
                  <div className="bg-gold w-24 h-4 my-2 mx-4 rounded-xl" />
                </div>
              </ul>
            </div>
          </div>
          <div className="mont border border-gray-100 rounded-xl shadow w-11/12 h-72">
            <div className="w-24 container mx-auto py-4">
              <div className="sql w-24 h-24" />
            </div>
            <div>
              <ul className="leading-10 w-full px-4 mx-auto mont">
                <div className="flex">
                  <li className="flex-grow">MySql</li>
                  <div className="bg-sky-100 w-28 h-4 my-2 mx-4 rounded-xl" />
                </div>
                <div className="flex">
                  <li className="flex-grow">Sqlite</li>
                  <div className="bg-sky-100 w-28 h-4 my-2 mx-4 rounded-xl" />
                </div>
              </ul>
            </div>
          </div>
          <div className="mont border border-gray-100 rounded-xl shadow w-11/12 h-72">
            <div className="w-24 container mx-auto py-4">
              <div className="git w-24 h-24" />
            </div>
            <div>
              <ul className="leading-10 w-full px-4 mx-auto mont">
                <div className="flex">
                  <li className="flex-grow">Git</li>
                  <div className="bg-gold w-24 h-4 my-2 mx-4 rounded-xl" />
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
