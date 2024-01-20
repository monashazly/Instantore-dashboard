import { createContext, useContext, useState } from "react";

const StateContext = createContext();
const intialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(intialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);

  const setMode = (e)=>{
    setCurrentMode(e.target.value)

    localStorage.setItem('themeMode' , e.target.value)
  }
  const setColor = (color)=>{
    setCurrentColor(color)
    
    setThemeSettings(false)

    localStorage.setItem('colorMode' , color)
  } 

  const setColorAndModeFromLocalStorage = ()=>{
    const color =  localStorage.getItem('colorMode') ? localStorage.getItem('colorMode') : currentColor
    const mode =  localStorage.getItem('themeMode') ? localStorage.getItem('themeMode') : currentMode

    setCurrentColor(color)
    setCurrentMode(mode)
  }
  const handleClick = (clicked, val ) => {
    setIsClicked({ ...intialState, [clicked]: val });
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor ,
        currentMode,
        setMode , 
        setColor,
        setThemeSettings,
        themeSettings,
        setColorAndModeFromLocalStorage
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
