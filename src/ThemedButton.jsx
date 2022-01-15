import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ThemeContext } from './themeContext';

const ThemedButton = ({ onClick, text }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      onClick={onClick}
      style={{ color: theme.textColor, backgroundColor: theme.primaryColor }}
    >
      {text}
    </button>
  );
};

ThemedButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default ThemedButton;
