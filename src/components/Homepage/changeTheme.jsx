import React from 'react';
import { ThemeContext } from '../../theme-context';

const HomePage = () => {
  const { theme, toggle, dark } = React.useContext(ThemeContext);
  return (
    <div className="App">
      <header
        className="App-header"
        style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
        data-testid="header"
      >
        <button
          type="button"
          onClick={toggle}
          style={{
            backgroundColor: theme.backgroundColor,
            color: theme.color,
            outline: 'none'
          }}
          data-testid="toggle-theme-btn"
        >
          Toggle to
          {' '}
          {!dark ? 'Dark' : 'Light'}
          {' '}
theme
        </button>
        <p>
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default HomePage;
