import classes from '@components/MobileNavbar/style.module.scss';
import { FormattedMessage } from 'react-intl';

const MobileNavbar = () => {
  return (
    <div className={`${classes.MobileNavbar}`} data-testid="navbar">
      <FormattedMessage id="app_mobile_navbar_text" />
    </div>
  );
};

export default MobileNavbar;
