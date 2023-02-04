import { useContext } from "react"
import { ThemeContext } from "./ThemeContex,"

export default function Header() {
    const { theme, toggleTheme } = useContext( ThemeContext )
   
    return (
        <div className=" min-w-full flex ">
            <h1 className="uppercase font-mono font-extrabold text-lg 
                s:text-2xl md:text-3xl container"
            >
                Password Generator
            </h1>
            <div className="duration-200 bg-gray-100 dark:bg-gray-800  rounded ring-2">                   
                <button onClick={() => toggleTheme(theme === 'dark' ? 'light' : 'dark') }
                    className="w-8 h-8 m-1 md:w-10 md:h-10  leading-9 text-xl md:text-3xl rounded-full text-sky-600"
                >
                    {theme === 'dark' ? <ion-icon name='moon'></ion-icon> :  <ion-icon name='sunny'></ion-icon> }  
                </button>  
            </div>
           
        </div>
    )
}

