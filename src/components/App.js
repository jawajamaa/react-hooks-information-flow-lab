import React, { useState } from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    // <div className={"App " + (isDarkMode ? "dark" : "light")}>
    //   <header>
    //     <h2>Shopster</h2>
    //     <button onClick={onDarkModeClick}>
    //       {isDarkMode ? "Dark" : "Light"} Mode
    //     </button>
    //   </header>
    <div>
      <Header 
      isDarkMode = { isDarkMode } 
      onChangeDarkMode = { onDarkModeClick } 
      />
      <ShoppingList 
      items={ itemData } 
      isDarkMode = { isDarkMode } 
      onChangeDarkMode = { onDarkModeClick }
      />
    </div>
  );
}

export default App;
