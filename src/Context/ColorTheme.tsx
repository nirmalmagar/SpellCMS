
import { createContext, ReactNode, useEffect, useState } from "react"


interface AppColorThemeProviderContextProps { 
    colorTheme : string,
    setColorTheme : (value : string) => void
}

interface AppColorThemeProviderProps {
    children : ReactNode
}  

const AppColorThemeContext = createContext<AppColorThemeProviderContextProps>({
    colorTheme : 'light',
    setColorTheme : () => {}
})

const AppColorThemeProvider: React.FC<AppColorThemeProviderProps> = ({children}) => {
    const [colorTheme , setColorTheme] = useState('') 
    

    useEffect(() => {
        const colorTheme = window.localStorage.getItem('color-theme')
        if(colorTheme) {
            setColorTheme(colorTheme)
            const htmlElement = document.querySelector('html'); // Get the <html> element
            if (colorTheme === "dark") {
                htmlElement?.classList.add('dark');
            }else{
                htmlElement?.classList.remove('dark')
            }
        }
    },[])

    useEffect(() => {
        const className = 'dark';
        const htmlElement = document.querySelector('html'); // Get the <html> element
        if (htmlElement) {
          if (colorTheme === "dark") {
            htmlElement.classList.add(className);
          } else {
            htmlElement.classList.remove(className);
          }
        }
        window.localStorage.setItem('color-theme',colorTheme)
    },[colorTheme])

    return(
        <AppColorThemeContext.Provider
            value={{
                colorTheme,
                setColorTheme
            }}
        >
            {children}
        </AppColorThemeContext.Provider>
    )
}

export { AppColorThemeContext , AppColorThemeProvider }
