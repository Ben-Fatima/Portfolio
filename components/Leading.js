import Link from "next/link";
import Image from "next/image";
import home from "../public/images/home.svg";
import Button from "./Button";
import Header from "./Header";
import Quote from "./Quote";
import SocialMedia from "./SocialMedia";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Leading = () => {
  return (
    <div className="w-full indigo-900 pb-10" id="home">
      <div className="w-10/12 flex mx-auto">
        <div className="w-2/3">
          <Header />
          <Quote />
          <SocialMedia />
          <Button>
            <Link href="#contact">
              <>
                <p className="px-1 inline-block">Contact me</p>
                <FontAwesomeIcon icon={faComments} />
              </>
            </Link>
          </Button>
        </div>
        <div className="w-1/3 text-white mt-24">
          <Image
            src={home}
            alt="Illustration of the developer"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};
export default Leading;
