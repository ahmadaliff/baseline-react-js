import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { IntlProvider } from 'react-intl';

import { selectMessages } from '@containers/Language/selectors';

const Language = ({ children }) => {
  const messages = useSelector(selectMessages);
  return (
    <IntlProvider key="id" locale="id" messages={messages['id']}>
      {children}
    </IntlProvider>
  );
};

Language.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Language;
