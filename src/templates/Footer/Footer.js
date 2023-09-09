import classes from "./Footer.module.css";

import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <a href="https://github.com/Nich0las2004" target="_blank">
        <BsGithub />
      </a>
      <a href="https://www.linkedin.com/in/nikoloz-oniani/" target="_blank">
        <BsLinkedin />
      </a>
    </footer>
  );
};

export default Footer;
