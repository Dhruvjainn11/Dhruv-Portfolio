import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef ,useState } from "react";




const containerVariants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1, duration: 0.6 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export default function Contact() {

  const [statusMessage, setStatusMessage] = useState(null); // success or error
const [statusType, setStatusType] = useState("success");  // "success" or "error"
  const formRef = useRef();

 const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_crd132i",
      "template_5umkkiy",
      formRef.current,
      "f4zc1DHL2AuF8nmWi"
    )
    .then(
      () => {
        setStatusType("success");
        setStatusMessage("✅ Your message was sent successfully!");
        formRef.current.reset();

        setTimeout(() => setStatusMessage(null), 5000); // hide after 5s
      },
      (error) => {
        setStatusType("error");
        setStatusMessage("❌ Something went wrong. Please try again.");
        console.error(error.text);

        setTimeout(() => setStatusMessage(null), 5000); // hide after 5s
      }
    );
};

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6 max-w-6xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {/* Left: Contact Form */}
      <motion.form
        ref={formRef}
        onSubmit={sendEmail}
        className="space-y-4"
        variants={itemVariants}
      >
        {statusMessage && (
  <motion.div
    className={`p-3 rounded-md text-sm font-medium ${
      statusType === "success"
        ? "bg-green-600 text-white"
        : "bg-red-600 text-white"
    }`}
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.4 }}
  >
    {statusMessage}
  </motion.div>
)}

        <h2 className="text-2xl font-bold text-blue-400">📬 Let’s Connect</h2>

        <motion.input
          type="text"
          name="user_name" // 🧠 required by EmailJS
          placeholder="Your Name"
          required
          className="w-full px-4 py-2 rounded-md bg-white/10 backdrop-blur text-white placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-blue-500"
          variants={itemVariants}
        />
        <motion.input
          type="email"
          name="user_email" // 🧠 required by EmailJS
          placeholder="Your Email"
          required
          className="w-full px-4 py-2 rounded-md bg-white/10 backdrop-blur text-white placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-blue-500"
          variants={itemVariants}
        />
        <motion.textarea
          name="message" // 🧠 required by EmailJS
          rows={5}
          placeholder="Your Message"
          required
          className="w-full px-4 py-2 rounded-md bg-white/10 backdrop-blur text-white placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-blue-500"
          variants={itemVariants}
        />
        <motion.button
          type="submit"
          className="px-6 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-medium transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>

      {/* Right: Social Links */}
      <motion.div
        className="flex flex-col justify-center gap-6 items-center md:items-start text-lg text-gray-300"
        variants={itemVariants}
      >
        <p className="text-sm text-gray-400">Or find me here:</p>

        <a
          href="https://github.com/Dhruvjainn11"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-white transition-colors"
        >
          <FaGithub className="text-xl" /> GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/dhruv-jain-683029285"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-white transition-colors"
        >
          <FaLinkedin className="text-xl text-blue-400" /> LinkedIn
        </a>

        <a
          href="mailto:dhruvjainn25@gmail.com"
          className="flex items-center gap-2 hover:text-white transition-colors"
        >
          <FaEnvelope className="text-xl text-red-400" /> Email
        </a>

        <a
          href="/CV.pdf"
          download
          className="flex items-center gap-2 hover:text-white transition-colors"
        >
          <FaDownload className="text-xl text-green-400" /> Download CV
        </a>
      </motion.div>
      
    </motion.div>

    
  );
}
