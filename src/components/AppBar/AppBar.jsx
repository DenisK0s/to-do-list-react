// modules
// import PropTypes from "prop-types";

// styles
import styles from './AppBar.module.css';

// components
import Logo from '../Logo';
import Container from '../Utils/Container';

function AppBar() {
  return (
    <header className={styles.AppBar}>
      <Container>
        <Logo />
      </Container>
    </header>
  );
}

// AppBar.propTypes = {};

export default AppBar;
