"use client";

import { useState } from "react";

export default function PasswordGenerator() {
    const [includeUppercase, setIncludeUppercase] = useState<boolean>(true);
    const [includeSpecialChars, setIncludeSpecialChars] = useState<boolean>(false);
    const [includeNumbers, setIncludeNumbers] = useState<boolean>(false);
    const [passwordLength, setPasswordLength] = useState<number>(12);

const generatePassword = () =>{

}
return (
    <>
    <div>
        <form onSubmit={generatePassword}>
            
        </form>
    </div>
    </>
)

}