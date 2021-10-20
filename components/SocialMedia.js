import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
const SocialMedia = ({ css }) => {
  return (
    <div className={css}>
      <div className="px-3">
        <FontAwesomeIcon
          className="hover:text-yellow-500 cursor-pointer"
          icon={faGithub}
        />
      </div>
      <div className="px-3">
        <FontAwesomeIcon
          className="hover:text-yellow-500 cursor-pointer"
          icon={faStackOverflow}
        />
      </div>
      <div className="px-3">
        <FontAwesomeIcon
          className="hover:text-yellow-500 cursor-pointer"
          icon={faLinkedin}
        />
      </div>
      <div className="px-3">
        <FontAwesomeIcon
          className="hover:text-yellow-500 cursor-pointer"
          icon={faYoutube}
        />
      </div>
    </div>
  );
};
export default SocialMedia;
