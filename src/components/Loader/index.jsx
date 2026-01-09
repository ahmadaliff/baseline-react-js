import PropTypes from 'prop-types';
import classNames from 'classnames';

import classes from './style.module.scss';

const Loader = ({ isLoading }) => (
  <div
    data-testid="Loading"
    className={classNames(classes.loaderComponent, {
      [classes.showLoader]: isLoading,
    })}
  >
    <img src="" alt="Loading" className={classes.img} />
  </div>
);

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
export default Loader;
