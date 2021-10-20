import SocialMedia from "../components/SocialMedia";
import Title from "../components/Title";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { useState } from "react";

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email,
      subject,
      message,
    };
    const res = await fetch(`/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const resJSON = await res.json();
    console.log("The response is:", resJSON);
    setSubmitted(true);
    setSubject("");
    setEmail("");
    setMessage("");
    console.log(data);
  };
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="indigo-900"
      >
        <Navbar
          css="sticky top-0 z-10 w-full p-4 bg-sky-600"
          items="px-6 mont inline-block fuchsia hover:text-blue-100"
        />
        <div className="w-10/12 mx-auto mt-20">
          <Title>get in touch</Title>
          <div className="flex shadow-lg rounded-xl border border-gray-100 mont">
            <div className="w-1/3 bg-sky-600 rounded-l-xl text-white pb-6">
              <h2 className="fuchsia text-2xl mont  w-full text-center mt-10">
                Contact informations
              </h2>
              <div className="w-2/3 mx-auto mt-16">
                <p className="leading-10">
                  <FontAwesomeIcon icon={faPhone} /> +212 628785646
                  <br />
                  <FontAwesomeIcon icon={faMailBulk} /> fatimazahranit@gmail.com
                </p>
                <SocialMedia css="flex mt-8 text-lg text-white" />
              </div>
            </div>
            <div className="w-2/3 rounded-r-xl pb-6">
              <h2 className="text-2xl mont w-full sky-600 text-center mt-10">
                Send me message
              </h2>
              <div className="w-1/2 mx-auto leading-10 mont mt-4">
                <label className="block">Email</label>
                <input
                  value={email}
                  type="text"
                  className="w-full px-4 border rounded"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <label className="block">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 border rounded"
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                />
                <label className="block">Message</label>
                <textarea
                  value={message}
                  type="text"
                  className="block w-full px-4 border rounded"
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 0px 8px rgb(255, 255, 255)",
                    color: "white",
                    backgroundColor: "rgba(218, 167, 0, 0.904)",
                  }}
                  className="bg-gold rounded-3xl px-8 sky-600 mont mt-12 focus:outline-none"
                  type="submit"
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                >
                  <p className="px-1 inline-block">Send</p>
                  <FontAwesomeIcon icon={faPaperPlane} />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Contact;
