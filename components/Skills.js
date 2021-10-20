import Image from "next/image";
import php from "../public/images/php.png";
import nodejs from "../public/images/nodejs.svg";
import python from "../public/images/python.png";
import javascript from "../public/images/javascript.png";
import html from "../public/images/html-5.png";
import css from "../public/images/css.png";
import sql from "../public/images/sql.png";
import github from "../public/images/github.png";
import gnu from "../public/images/gnu-bash.svg";
import Title from "./Title";

function Skills() {
  return (
    <div className="w-10/12 mx-auto mt-20" id="skills">
      <Title value="skills">My skills</Title>
      <div className="grid grid-cols-3 grid-rows-3 mt-8 mx-auto w-10/12">
        <div className="w-24 container mx-auto py-4">
          <Image src={php} className="w-12 mt-10 mx-auto" />
        </div>
        <div className="w-24 container mx-auto py-4">
          <Image src={nodejs} className="w-12 mt-10 mx-auto" />
        </div>
        <div className="w-24 container mx-auto py-4">
          <Image src={python} className="w-12 mt-10 mx-auto" />
        </div>
        <div className="w-24 container mx-auto py-4">
          <Image src={javascript} className="w-12 mt-10 mx-auto" />
        </div>
        <div className="w-24 container mx-auto py-4">
          <Image src={html} className="w-12 mt-10 mx-auto" />
        </div>
        <div className="w-24 container mx-auto py-4">
          <Image src={css} className="w-12 mt-10 mx-auto" />
        </div>
        <div className="w-24 container mx-auto py-4">
          <Image src={gnu} className="w-12 mt-10 mx-auto" />
        </div>
        <div className="w-24 container mx-auto py-4">
          <Image src={sql} className="w-12 mt-10 mx-auto" />
        </div>
        <div className="w-24 container mx-auto py-4">
          <Image src={github} className="w-12 mt-10 mx-auto" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
