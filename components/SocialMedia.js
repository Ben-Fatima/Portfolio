import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faHackerrank } from "@fortawesome/free-brands-svg-icons";
const SocialMedia = ({ css }) => {
  return (
    <div className={css}>
      <div className="px-10 xl:px-4">
        <a href="https://github.com/Ben-Fatima">
          <FontAwesomeIcon
            className="hover:text-yellow-500 cursor-pointer"
            icon={faGithub}
          />
        </a>
      </div>
      <div className="px-10 xl:px-4">
        <a href="https://stackoverflow.com/users/13309802/fatima-zahra-ben-hammou">
          <FontAwesomeIcon
            className="hover:text-yellow-500 cursor-pointer"
            icon={faStackOverflow}
          />
        </a>
      </div>
      <div className="px-10 xl:px-4">
        <a href="https://www.linkedin.com/in/fatima-zahra-ben-hammou-a24414198/">
          <FontAwesomeIcon
            className="hover:text-yellow-500 cursor-pointer"
            icon={faLinkedin}
          />
        </a>
      </div>
      <div className="px-10 xl:px-4">
        <a href="https://www.hackerrank.com/Oresama">
          <FontAwesomeIcon
            className="hover:text-yellow-500 cursor-pointer"
            icon={faHackerrank}
          />
        </a>
      </div>
      <div className="px-10 xl:px-4">
        <a href="https://www.youtube.com/channel/UCYMaJf_c6tb8Di7dGS5nXOg">
          <FontAwesomeIcon
            className="hover:text-yellow-500 cursor-pointer"
            icon={faYoutube}
          />
        </a>
      </div>
    </div>
  );
};
export default SocialMedia;
