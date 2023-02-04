import { useState, useEffect } from "react"
import characters from "../passwordCharacters"

function useHooks() {
    const [password, setPassword] = useState({password: '', passwordLength: 8, strength: 'high'})
    const [generate, setGenerate ] = useState(false)

    function handleChange(event) {
        const {name, value} = event.target
        setPassword(prev => ( {...prev, [name]: value} ))
      } 
      
      // generate random characters from regular expression array
      function generatePassword(char) {
        let randomChar = '' 
        for(let i = 0; i < password.passwordLength; i++) {
          let random = Math.floor(Math.random() * char.length)
          randomChar += char[random]
        }
        setPassword(prev => ( {...prev, password: randomChar} ))
      }
      
      // regular expression for password
      useEffect(() => {
        if(password.strength === 'high') {
          generatePassword( characters.join('').match(/\S/gi) )
        }
         else if(password.strength === 'medium') {
          generatePassword( characters.join('').match(/[a-zA-Z0-9]/g) )
        } 
        else {
          generatePassword( characters.join('').match(/[a-zA-Z]/g) )
        }
      }, [password.strength, password.passwordLength, generate])
      
      // regenetrate password state settter
      const generateNewPassword = () => setGenerate(prev => !prev)
      
      // all anition to DOM elements
      useEffect(() => {
        const generateIcon = document.getElementById("generate");
        generateIcon.addEventListener('click', e => {
          generateNewPassword()
          generateIcon.classList.add('animate-spin-fast')
      
          setTimeout(() => {
            generateIcon.classList.remove('animate-spin-fast')
          }, 250);
        }) 
      }, [])
       
      // copy to clipboard
      async function copyPassword() {
        try {
          await navigator.clipboard.writeText(password.password);
          alert('Password copied to clipboard');
        } catch (err) {
          alert('Failed to copy: ', err);
        }
      }
      
      return { password, handleChange, generate, generatePassword, copyPassword }
}

export default useHooks