import { FormattedMessage } from 'react-intl';

import classes from '@components/Footer/style.module.scss';

const Footer = () => (
  <footer className={classes.footer} data-testid="footer">
    <FormattedMessage id="app_footer_text" />
  </footer>
);

export default Footer;
