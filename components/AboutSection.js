import Image from "next/image";
import Title from "./Title";
import about from "../public/images/about.svg";
import Button from "./Button";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const AboutSection = () => {
  return (
    <div>
      <div className="w-10/12 mx-auto mt-24" id="about">
        <Title>About me</Title>
        <div className="flex">
          <Image src={about} />
          <div className="w-3/5">
            <p className="leading-relaxed text-lg text-justify text-black">
              Hello again! Thank you for your time, I am Fatima Zahra a computer
              science engineering student at
              <a
                href="http://ensias.um5.ac.ma/"
                className="font-semibold text-red-400"
              >
                {" "}
                ENSIAS
              </a>{" "}
              in Morocco.
              <br />I am interested in learning and developing everything
              related to computer science, with a passion for creating clean and
              useful code.
              <br /> Other than coding, I spend most of my free time doing video
              animation on my youtube channel. 📚 I've also been trying to read
              more so feel free to reach out to me with any book
              recommendations!
            </p>
            <Button className="bg-gray-600 py-2 px-4 rounded-3xl mt-24 hover:bg-gray-800">
              Download resume
              <div className="px-1 inline-block">
                <FontAwesomeIcon icon={faDownload} />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutSection;
