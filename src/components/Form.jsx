import useHooks from "../hooks/useHook"

export default function Form(props) {
    const { password,  handleChange, copyPassword } = useHooks()

    return (
        <div className="shadow-gray-400 bg-gray-100 dark:bg-slate-800 p-6">
            <div className={`p-length ${password.passwordLength < 12 ? 'text-red-600' :
                password.passwordLength < 20 ? 'text-yellow-600' : 'text-green-600'}`}
            >
                <h2 className="pb-4 md:text-4xl md:mb-4">Password Length</h2>

                    {/* password length range input and output */}
                <div>
                    <output htmlFor="length"
                        className="rounded mr-2 md:mr-8 dark:ring-1 dark:bg-inherit bg-gray-200 px-4 py-2 md:px-6 md:py-4
                        text-center drop-shadow-md"
                    >
                        {password.passwordLength}
                    </output>
                    <input type="range"
                        id="length"
                        className="w-2/3 md:w-3/4 mt-5"
                        min={8} max={50}
                        name='passwordLength'
                        value={password.passwordLength}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
            </div>

                   {/* Password strength */}
            <div className="p-strength my-8 border-gray-500 border-l-8 md:grid grid-flow-col border-none items-center md:my-10 md:dark:ring-1 ">
                    {/*strength => weak */}
                <label className={`ml-4 cursor-pointe ${password.strength == 'weak' ? 'text-red-600 text-3xl lg:text-4xl font-extrabold' : ''}`}>
                    <input className="mr-3 "
                        type="radio"
                        name="strength"
                        value='weak'
                        checked={password.strength === 'weak'}
                        onChange={(event) => handleChange(event, 'weak')}
                    />
                        Weak
                </label>
                {/*strenght => meidun */}
                <label className={`my-8 ml-4 block cursor-pointe ${password.strength == 'medium' ? 'text-yellow-300 text-3xl lg:text-4xl font-extrabold' : ''}`}>
                    <input className="mr-3"
                        type="radio"
                        name="strength"
                        value='medium'
                        checked={password.strength === 'medium'}
                        onChange={(event) => handleChange(event, 'medium')}
                    />
                        Medium
                </label>
                {/*strength =>  high */}
                <label className={`m-4 cursor-pointe ${password.strength == 'high' ?
                    'text-green-600 text-3xl lg:text-4xl font-extrabold' : ''}`}
                >
                    <input className="mr-3"
                        type="radio"
                        name="strength"
                        value='high'
                        checked={password.strength === 'high'}
                        onChange={(event) => handleChange(event, 'high')}
                    />
                        High
                </label>
            </div> {/* password strenght ends */}

             <div className="pass-icon s:text-green-400 s:rounded-md s:bg-white md:py-2 relative"> {/* password display  and icons container */}
                {/* display password */}
                <input type="text" value={password.password} readOnly
                    className={`display-pass  ${password.passwordLength < 12 ? 'text-red-600' : password.passwordLength < 20 ? 'text-yellow-600' : 'text-green-600'}`}
                />

                <div className="icon-c "> {/* icons - section start */}
                    <span className="duration-100 peer mr-1 s:m-0"> {/* copy icon */}
                        <button onClick={ copyPassword }
                            className="icons mr-2 peer"
                        >
                           <ion-icon name="copy"></ion-icon>
                        </button>
                        <span className="absolute invisible bottom-2 ml-2 lg:peer-hover:visible bg-gray-100 p-2 text-gray-700 rounded-lg">Copy</span>
                    </span>

                    <span className="ml-1"> {/* generate icon */}
                        <button className="icons peer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" id="generate">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0
                                0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                            </svg>
                        </button>
                        <span className="absolute invisible bottom-2 rigth-2 lg:peer-hover:visible bg-white p-2
                             text-gray-700 rounded-lg">Generate</span>
                    </span>
                </div>
             </div>  {/* password display and icons ends */}
        </div>
    )
}
