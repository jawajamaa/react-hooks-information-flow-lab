import React from 'react'

function Header({ isDarkMode, onDarkModeClick }) {

  function handleClick(isDarkMode) {
    onDarkModeClick(isDarkMode);
}

  return (
        <header>
          <h2>Shopster</h2>
          <button onClick={ handleClick }>
            {isDarkMode ? "Dark" : "Light"} Mode
          </button>
        </header>

  )
}

export default Header;