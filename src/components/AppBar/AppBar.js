import Container from "../Container";
import Navigation from "../Navigation";
import styles from "./AppBar.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <Navigation />
      </Container>
    </header>
  );
};

export default Header;
