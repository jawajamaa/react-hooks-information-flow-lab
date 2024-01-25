import React from 'react'

function Header({ isDarkMode, onChangeDarkMode }) {

  function handleClick(isDarkMode) {
    onChangeDarkMode(isDarkMode);
}

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
        <header>
          <h2>Shopster</h2>
          <button onClick={ handleClick }>
            {isDarkMode ? "Dark" : "Light"} Mode
          </button>
        </header>
    </div>
  )
}

export default Header;