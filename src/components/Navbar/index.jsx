import { FormattedMessage } from 'react-intl';
import classes from './style.module.scss';

const Navbar = () => {
  return (
    <div className={classes.navbarWrapper} data-testid="navbar">
      <FormattedMessage id="app_navbar_text" />
    </div>
  );
};

export default Navbar;
