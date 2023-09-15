import classes from "./Header.module.css";

import Title from "./Title/Title";

const Header = () => {
  return (
    <header className={classes.header}>
      <Title />
    </header>
  );
};

export default Header;
