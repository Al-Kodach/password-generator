import Header from "./components/Header";
import Form from "./components/Form";
import useHooks from "./hooks/useHook";  

function App() {
  const { password, handleChange, copyPassword, generateNewPassword } = useHooks()

  return (
    <div className="w-screen min-h-screen dark:bg-slate-900 
      dark:text-gray-100 text-gray-600 duration-100 font-mono font-bold p-5
        text-2xl md:p-8 md:text-3xl lg:p-12 
      ">
      <Header />
      <div className=" container">
          <h1 className="font-bold pt-10 text-4xl leading-10  lg:text-5xl">Generate a  
            <span className="text-green-600 block pb-3 lg:text-5xl">random password</span>
          </h1>
          <p className="text-gray-400 text-md leading-7 lg:text-2xl">never use an insecure password again</p>
      </div>
      <div className="pt-10 container">
        <Form 
          password={password}
          handleChange={handleChange}
          copyPassword={copyPassword}
          generate={generateNewPassword}
        />
      </div>
    </div>
  )
}

export default App
