import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';

import classes from './style.module.scss';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.contentWrapper} data-testid="not-found">
      <div className={classes.title}>
        <FormattedMessage id="app_not_found" />
      </div>
      <div className={classes.desc}>
        <FormattedMessage id="app_not_found_desc" />
      </div>
      <button className={classes.backButton} type="button" onClick={() => navigate('/')} data-testid="button-home">
        <FormattedMessage id="app_back_to_home" />
      </button>
    </div>
  );
};

export default NotFound;
