import React, { useState } from 'react'

const Forms = () => {
    const [name, setname] = useState("")
    const [password, setPassword] = useState("")
    const [stdClass, setStdClass] = useState("")
    const [batch, setBatch] = useState("")
    const [roll, setRoll] = useState("")


    const submitHndler = () => {
        let stud = {
            name:name,
            password: password,
            class: stdClass,
            batch,
            rollnum: roll

        }

        console.log("stud", stud);
    }

    return (
        <div>
            <input type="text" onChange={e => setname(e.target.value)} name="name"></input>
    
            <input type="text" onChange={e => setPassword(e.target.value)} name="name"></input>

            <input type="text" onChange={e => setStdClass(e.target.value)} name="name"></input>
            <input type="text" onChange={e => setBatch(e.target.value)} name="name"></input>
            <input type="text" onChange={e => setRoll(e.target.value)} name="name"></input>

            <button onClick={submitHndler}>clicks</button>

            <p>{name}</p>
            <p>{password}</p>
            <p>{stdClass}</p>
            <p>{batch}</p>
            <p>{roll}</p>


        </div>
    )
}

export default Forms