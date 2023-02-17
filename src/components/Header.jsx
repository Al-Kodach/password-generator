import { useContext } from "react"
import { ThemeContext } from "./ThemeContex,"

export default function Header() {
    const { theme, toggleTheme } = useContext( ThemeContext )

    return (
        <div className=" min-w-full flex justify-space-around">
            <h1 className="uppercase font-mono font-extrabold text-lg
                s:text-2xl md:text-4xl container"
            >
                Password Generator
            </h1>
            <button onClick={() => toggleTheme(theme === 'dark' ? 'light' : 'dark') }
                className="text-3xl text-sky-600 md:text-6xl"
            >
                {theme === 'dark' ? <ion-icon name='moon'></ion-icon> :  <ion-icon name='sunny'></ion-icon> }
            </button>

        </div>
    )
}
