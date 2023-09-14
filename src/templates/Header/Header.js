import classes from "./Header.module.css";

import Title from "./Title/Title";
import Mode from "./Mode/Mode";

const Header = () => {
  return (
    <header className={classes.header}>
      <Title />
      <Mode />
    </header>
  );
};

export default Header;
