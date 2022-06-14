import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Title from "../components/Title";

const Project = () => {
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
      <div className="grid pb-12 w-11/12 lg:w-10/12 mx-auto lg:mt-4">
        <Title>Projects</Title>
        <motion.div
          variants={moveUp}
          initial="hidden"
          animate="show"
          className="block mt-4 mont border border-gray-200 rounded-xl p-4 leading-10 text-lg text-justify"
        >
          <h1 className="sky-600 text-lg font-bold mont w-full uppercase">
            Transport Managment System (TMS)
          </h1>
          <p className="px-2 italic text-gray-500">
            Conception and development of a web application for transport
            planning and transport cost optimization.
          </p>
          <div className="flex space-x-6">
            <p className="font-light text-gray-800 italic bg-yellow-300 text-base px-4 rounded-2xl">
              Laravel
            </p>
            <p className="font-light text-gray-800 italic bg-yellow-300 text-base px-4 rounded-2xl">
              Typescript
            </p>
            <p className="font-light text-gray-800 italic bg-yellow-300 text-base px-4 rounded-2xl">
              Tailwindcss
            </p>
          </div>
          <h1 className="text-sky-500 mont">Github repositorie:</h1>
          <a
            href="https://github.com/Ben-Fatima/tradSys"
            className="px-2 hover:underline"
          >
            https://github.com/Ben-Fatima/shipIt
          </a>
        </motion.div>
        <motion.div
          variants={moveUp}
          initial="hidden"
          animate="show"
          className="block mt-4 mont border border-gray-200 rounded-xl p-4 leading-10 text-lg text-justify"
        >
          <h1 className="sky-600 text-lg font-bold mont w-full uppercase">
            Meal Planner
          </h1>
          <p className="px-2 italic text-gray-500">
            Conception and development of a meal planning web application based
            on ingredients and preferences of each user.
          </p>
          <div className="flex space-x-6">
            <p className="font-light text-gray-800 italic bg-yellow-300 text-base px-4 rounded-2xl">
              Laravel
            </p>
            <p className="font-light text-gray-800 italic bg-yellow-300 text-base px-4 rounded-2xl">
              MySql
            </p>
            <p className="font-light text-gray-800 italic bg-yellow-300 text-base px-4 rounded-2xl">
              Tailwindcss
            </p>
          </div>
          <h1 className="text-sky-500 mont">Github repositorie:</h1>
          <a
            href="https://github.com/Ben-Fatima/Planner"
            className="px-2 hover:underline"
          >
            https://github.com/Ben-Fatima/Planner
          </a>
        </motion.div>
        <motion.div
          variants={moveUp}
          initial="hidden"
          animate="show"
          className="block mt-4 mont border border-gray-200 rounded-xl p-4 leading-10 text-lg text-justify"
        >
          <h1 className="sky-600 text-lg font-bold mont w-full uppercase">
            H-mza(E-commerce website)
          </h1>
          <p className="px-2 italic text-gray-500">
            Development of an e-commerce website for the sale and purchase of
            second-hand products between students.
          </p>
          <div className="flex space-x-6">
            <p className="font-light text-gray-800 italic bg-yellow-300 text-base px-4 rounded-2xl">
              Laravel
            </p>
            <p className="font-light text-gray-800 italic bg-yellow-300 text-base px-4 rounded-2xl">
              MySql
            </p>
            <p className="font-light text-gray-800 italic bg-yellow-300 text-base px-4 rounded-2xl">
              Tailwindcss
            </p>
          </div>
          <h1 className="text-sky-500 mont">Github repositorie:</h1>
          <a
            href="https://github.com/Ben-Fatima/H-mza"
            className="px-2 hover:underline"
          >
            https://github.com/Ben-Fatima/H-mza
          </a>
        </motion.div>
        <motion.div
          variants={moveUp}
          initial="hidden"
          animate="show"
          className="block mt-4 mont border border-gray-200 rounded-xl p-4 leading-10 text-lg text-justify"
        >
          <h1 className="sky-600 text-lg font-bold mont w-full uppercase">
            TradSys
          </h1>
          <p className="px-2 italic text-gray-500">
            application to predict the evolution of the stock of a given company
            as an input, and to help users making decisions about whether to
            sell or buy products in the future. We consider two of the most used
            architectures in the literature, those are: the LSTM and GRU. As an
            addition, we will try to implement some financial indicators on the
            data to experience with the data a little.
          </p>
          <div className="flex space-x-6">
            <p className="font-light text-gray-800 italic bg-yellow-300 text-base px-4 rounded-2xl">
              Python
            </p>
            <p className="font-light text-gray-800 italic bg-yellow-300 text-base px-4 rounded-2xl">
              Reactjs
            </p>
            <p className="font-light text-gray-800 italic bg-yellow-300 text-base px-4 rounded-2xl">
              Expressjs
            </p>
          </div>
          <h1 className="text-sky-500 mont">Github repositorie:</h1>
          <a
            href="https://github.com/Ben-Fatima/tradSys"
            className="px-2 hover:underline"
          >
            https://github.com/Ben-Fatima/tradSys
          </a>
        </motion.div>
        <motion.div
          variants={moveUp}
          initial="hidden"
          animate="show"
          className="block mt-12 mont border border-gray-200 rounded-xl p-4 leading-10 text-lg text-justify"
        >
          <h1 className="sky-600 text-lg font-bold mont w-full uppercase">
            Job shop scheduling
          </h1>
          <p className="px-2 italic text-gray-500">
            An application that solves the problem of Job Shop Scheduling, which
            is a problem of scheduling tasks: we have a list of things to do,
            some need to be done before others, and the goal is to do all of
            theme in one line.
          </p>
          <div className="flex space-x-6">
            <p className="font-light text-gray-800 italic bg-yellow-300 text-base px-4 rounded-2xl">
              Python
            </p>
            <p className="font-light text-gray-800 italic bg-yellow-300 text-base px-4 rounded-2xl">
              HTML
            </p>
            <p className="font-light text-gray-800 italic bg-yellow-300 text-base px-4 rounded-2xl">
              CSS
            </p>
          </div>
          <h1 className="text-sky-500 mont">Github repositorie:</h1>
          <a
            href="https://github.com/Ben-Fatima/jobShopScheduling"
            className="px-2 hover:underline"
          >
            https://github.com/Ben-Fatima/jobShopScheduling
          </a>
        </motion.div>
        <motion.div
          variants={moveUp}
          initial="hidden"
          animate="show"
          className="block mt-12 mont border border-gray-200 rounded-xl p-4 leading-10 text-lg text-justify"
        >
          <h1 className="sky-600 text-lg font-bold mont w-full uppercase">
            Portfolio
          </h1>
          <p className="px-2 italic text-gray-500">
            The same application that you are in now, and its purpose is to
            display the completed projects.
          </p>
          <div className="flex space-x-6">
            <p className="font-light text-gray-800 italic bg-yellow-300 text-base px-4 rounded-2xl">
              Nextjs
            </p>
            <p className="font-light text-gray-800 italic bg-yellow-300 text-base px-4 rounded-2xl">
              TailwindCss
            </p>
          </div>
          <h1 className="text-sky-500 mont">Github repositorie:</h1>
          <a
            href="https://github.com/Ben-Fatima/Portfolio"
            className="px-2 hover:underline"
          >
            https://github.com/Ben-Fatima/Portfolio
          </a>
        </motion.div>
        <motion.div
          variants={moveUp}
          initial="hidden"
          animate="show"
          className="block mt-12 mont border border-gray-200 rounded-xl p-4 leading-10 text-lg text-justify"
        >
          <h1 className="sky-600 text-lg font-bold mont w-full uppercase">
            Single-page
          </h1>
          <p className="px-2 italic text-gray-500">
            A conversion of an adobe xd file to a reactjs single page
            application.
          </p>
          <div className="flex space-x-6">
            <p className="font-light text-gray-800 italic bg-yellow-300 text-base px-4 rounded-2xl">
              Reactjs
            </p>
            <p className="font-light text-gray-800 italic bg-yellow-300 text-base px-4 rounded-2xl">
              TailwindCss
            </p>
          </div>
          <h1 className="text-sky-500 mont">Github repositorie:</h1>
          <a
            href="https://github.com/Ben-Fatima/Single-page"
            className="px-2 hover:underline"
          >
            https://github.com/Ben-Fatima/Single-page
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};
export default Project;
