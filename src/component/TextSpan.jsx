import { motion, transform } from "framer-motion";

const TextSpan = ({ children }) => {
  return <motion.span whileHover={{ scale: 1.2 }}>{children}</motion.span>;
};

export default TextSpan;
