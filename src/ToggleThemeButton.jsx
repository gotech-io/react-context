import { useContext } from 'react';
import { ThemeContext } from './themeContext';
import ThemedButton from './ThemedButton';

const ToggleThemeButton = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    changeTheme(theme.name === 'light' ? 'dark' : 'light');
  };

  return <ThemedButton onClick={toggleTheme} text="Toggle Theme" />;
};

export default ToggleThemeButton;
