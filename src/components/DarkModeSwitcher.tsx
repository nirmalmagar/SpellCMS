
import React, { useContext, useEffect, useState } from "react";
import ReactSwitch from "react-switch";
import { AppColorThemeContext } from "../Context/ColorTheme";

const DarkModeSwitcher = () => {
  const {colorTheme , setColorTheme} = useContext(AppColorThemeContext)
  const [change, setChange] = useState(colorTheme === "dark");
  return (
    <ReactSwitch
    // className={colorTheme === 'dark' ? 'isDark' : undefined}
      onChange={() => {
          setChange(!change)
          setColorTheme(colorTheme === "dark" ? "light" : "dark")
      }}
      checked={change}
    />
  );
};

export default DarkModeSwitcher;