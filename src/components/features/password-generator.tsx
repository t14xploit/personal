"use client";

import { useRef, useState } from "react";

export default function PasswordGenerator() {
    const [includeUppercase, setIncludeUppercase] = useState<boolean>(true);
    const [includeSpecialChars, setIncludeSpecialChars] = useState<boolean>(false);
    const [includeNumbers, setIncludeNumbers] = useState<boolean>(false);
    const [passwordLength, setPasswordLength] = useState<number>(12);
const [password,setPassword]= useState<string>("");
    const successBox = useRef<HTMLElement>(null);
const generatePassword = (e: React.FormEvent<HTMLFormElement>): void =>{
e.preventDefault();
const lowercase:string = "abcdefghijklmnopqrstuvwxyz";
const uppercase:string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const specialChars:string = "!@#$%^&*()_+-=[]{}|;':,./<>?";
const numbers:string = "0123456789";

const chars:string = lowercase + (includeUppercase ? uppercase : "") + (includeSpecialChars ? specialChars : "") + (includeNumbers ? numbers : "");
let pw: string ="";
for (let i = 0; i < passwordLength; i++) {
    
    pw += chars[ Math.floor(Math.random() * chars.length)];
}
setPassword(pw);
};

const copyPassword = (e: React.MouseEvent<HTMLButtonElement>) =>{
    e.preventDefault();
    if(password.length === 0) return;
    navigator.clipboard.writeText(password);
    successBox.current?.classList.add("show");
    setTimeout(() => {
        successBox.current?.classList.remove("show");
    }, 2000);
}
return (
    <>
    <div>
        <form onSubmit={generatePassword}>
            <h1>Password Generator</h1>
            <div>
                <label htmlFor="include-uppercase">Include Uppercase</label>
                <input type="checkbox" id="include-uppercase" name="include-uppercase" checked={includeUppercase} onChange={() => setIncludeUppercase(!includeUppercase)} />
            </div>
              <div>
                <label htmlFor="include-special-chars">Include Special Characters</label>
                <input type="checkbox" id="include-special-chars" name="include-special-chars" checked={includeSpecialChars} onChange={() => setIncludeSpecialChars(!includeSpecialChars)} />
            </div>
                <div>
                <label htmlFor="include-numbers">Include Numbers</label>
                <input type="checkbox" id="include-numbers" name="include-numbers" checked={includeNumbers} onChange={() => setIncludeNumbers(!includeNumbers)} />
            </div>
            <label htmlFor="password-length">Password Length</label>
            <input type="range" id="password-length" name="password-length" min="5" max="25" value={passwordLength} onChange={(e) => setPasswordLength(Number(e.target.value))} />
            <p>{passwordLength}</p>

            <div>{password}</div>
            <div>
                <button type="submit">Generate</button>

                <button type="button" onClick={copyPassword}>Copy</button>
            </div>

            <div ref={successBox}>
               <p>Password copied</p> 
            </div>
        </form>
    </div>
    </>
)

}