


export default function Form(props) {
    const {password, passwordLength, strength } = props.password
    return (
        <div className="shadow-gray-400 bg-gray-100 dark:bg-slate-800 p-6"
        >
            
            <div className={`p-length ${passwordLength < 12 ? 'text-red-600' : passwordLength < 20 ? 'text-yellow-600' : 'text-green-600'}`}>
                <h2 className="pb-4 md:text-4xl md:mb-4">Password Length</h2>
                {/* display password length */}
                <label >
                    <span  className="rounded mr-2 md:mr-8 dark:ring-1 dark:bg-inherit bg-gray-200 px-4 py-2 md:px-6 md:py-4
                    text-center drop-shadow-md "
                    >
                        {passwordLength}
                    </span>
                    {/* password length setter */}
                    <input type="range" 
                        className="w-2/3 md:w-3/4 mt-5"
                        min={8} max={50}
                        name='passwordLength'
                        value={passwordLength}
                        onChange={(event) => props.handleChange(event)}
                    />
                </label>
            </div>
                   {/* Password strength */}
            <div className="p-strength my-8 border-gray-500 border-l-8 md:grid grid-flow-col border-none items-center md:my-10 md:ring-1 "> 
                    {/*strength => weak */}
                <label className={`ml-4 cursor-pointe ${strength == 'weak' ? 'text-red-600 text-3xl lg:text-4xl font-extrabold' : ''}`}>
                    <input className="mr-3 " 
                        type="radio"
                        name="strength"
                        value='weak'
                        checked={strength === 'weak'}
                        onChange={(event) => props.handleChange(event, 'weak')}
                    />
                        Weak
                </label>
                {/*strenght => meidun */}
                <label className={`my-8 ml-4 block cursor-pointe ${strength == 'medium' ? 'text-yellow-300 text-3xl lg:text-4xl font-extrabold' : ''}`}>
                    <input className="mr-3"
                        type="radio"
                        name="strength"
                        value='medium'
                        checked={strength === 'medium'}
                        onChange={(event) => props.handleChange(event, 'medium')}
                    />
                        Medium
                </label>
                {/*strength =>  high */}
                <label className={`m-4 cursor-pointe ${strength == 'high' ? 'text-green-600 text-3xl lg:text-4xl font-extrabold' : ''}`}>
                    <input className="mr-3"
                        type="radio"
                        name="strength"
                        value='high'
                        checked={strength === 'high'}
                        onChange={(event) => props.handleChange(event, 'high')}
                    />
                        High
                </label>
            </div> {/* password strenght ends */}
                {/* password display  and icons container */}
             <div className="pass-icon s:text-green-400 s:rounded-md relative"> 
                {/* display password */}
                <input type="text" value={password} readOnly
                    className={`display-pass  ${passwordLength < 12 ? 'text-red-600' : passwordLength < 20 ? 'text-yellow-600' : 'text-green-600'}`}
                /> 
                
                        {/* icons - section start */}
                <div className="flex pt-4 justify-end icon-c ">
                    {/* copy icon */}
                    <span className="duration-100 peer mr-1 s:m-0">                   
                        <button onClick={ props.copyPassword }
                            className="icons mr-2 peer"
                        >
                           <ion-icon name="copy"></ion-icon>
                        </button>
                        <span className="absolute invisible bottom-2 ml-2 lg:peer-hover:visible bg-gray-100 p-2 text-gray-700 rounded-lg">Copy</span>
                    </span>
                    {/* generate icon */}
                    <span className="ml-1"> 
                        <button className="icons md:w-14 peer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" id="generate">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 
                                0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                            </svg> 
                        </button>                  
                        <span className="absolute invisible bottom-2 rigth-2 lg:peer-hover:visible bg-gray-100 p-2
                             text-gray-700 rounded-lg">Generate</span>
                    </span>    
                </div>
             </div>  {/* password display and icons ends */}
        </div>
    )
}
