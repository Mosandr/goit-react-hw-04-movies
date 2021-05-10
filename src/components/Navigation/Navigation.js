import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";
import routes from "../../routes";

const Navigation = () => {
  return (
    <nav>
      <ul className={styles.navigationList}>
        <li className={styles.navigationItem}>
          <NavLink
            exact
            to={routes.home}
            className={styles.navLink}
            activeClassName={styles.navLinkActive}
          >
            Home
          </NavLink>
        </li>
        <li className={styles.navigationItem}>
          <NavLink
            to={routes.movies}
            className={styles.navLink}
            activeClassName={styles.navLinkActive}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
