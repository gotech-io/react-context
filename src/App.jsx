import React from 'react';
import Button from './ThemedButton';
import ThemeProvider from './themeContext';
import Header from './Header';
import ToggleThemeButton from './ToggleThemeButton';

import './App.css';

const FakeNesting = ({ children }) => <div>{children}</div>;

const App = () => {
  const onButtonClick = (text) => {
    alert(text);
  };

  return (
    <ThemeProvider>
      <div className="App">
        <Header text="Theming with context" />
        <FakeNesting>
          <FakeNesting>
            <Button
              text="I'm a Button"
              onClick={() => onButtonClick('You clicked a Button')}
            />
            <Button
              text="I'm another Button"
              onClick={() => onButtonClick('You clicked another Button')}
            />
          </FakeNesting>
        </FakeNesting>
        <ToggleThemeButton />
      </div>
    </ThemeProvider>
  );
};

export default App;
