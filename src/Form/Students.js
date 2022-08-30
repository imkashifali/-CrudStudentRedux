import React, { useState } from 'react'
import { Data } from './Data'
import StudentList from './StudentsList'
const Students = () => {
    const [students, setstudents] = useState(Data)

    const [errorMsg, setErrorMsg] = useState("")
    const [name, setname] = useState("")
    const [stdClass, setStdClass] = useState("")
    const [Batch, setBatch] = useState("")
    const [roll, setRoll] = useState("")
    const [flag, setFlag] = useState(false)
    const [updateIndex, setupdateIndex] = useState(0)

    const ctHandler = (e) => {
        setErrorMsg("")
        if (name != "" && Batch != "" && stdClass != "" && roll != "") {

            let student = {
                name,
                batch: Batch,
                class: stdClass,
                roll
            }
            console.log("student", student);

            setstudents([...students, student])

            setname("")
            setStdClass("")
            setBatch("")
            setRoll("")

        } else {
            setErrorMsg("Please Fill in Info")
        }
    }

    const deleteHandler = (index) => {
        console.log("studName", index);

        const newStudents = students.filter((stud, i) => {
            if (i !== index) {
                return stud
            }
        })

        setstudents([...newStudents])
        console.log("newStudents", newStudents);

    }

    //for populate data in input
    const upgradeStudent = (student,index) => {
    console.log("student", student,index);

        setupdateIndex(index)
        setname(student.name)
        setStdClass(student.class)
        setBatch(student.batch)
        setRoll(student.roll)
        setFlag(true)
    }
    //for update record
    const updateStudent = (student,index) =>{

        setErrorMsg("")
        if (name != "" && Batch != "" && stdClass != "" && roll != "") {

            let student = {
                name,
                batch: Batch,
                class: stdClass,
                roll
            }
            console.log("student", student);
            const updateStud = students.map((stud,index)=>{
                if (updateIndex === index) {
                    return student
                }else{
                    return stud
                }
            })
            setstudents([...updateStud])
            
            setname("")
            setStdClass("")
            setBatch("")
            setRoll("")
            setFlag(false)

        } else {
            setErrorMsg("Please Fill in Info")
        }

    }
    return (
        <div>
            <h1>Student Listing</h1>

            <input type="text" onChange={e => setname(e.target.value)} name="name" value={name}></input>
            <input type="text" onChange={e => setStdClass(e.target.value)} name="name" value={stdClass}></input>
            <input type="text" onChange={e => setBatch(e.target.value)} name="name" value={Batch}></input>
            <input type="text" onChange={e => setRoll(e.target.value)} name="name" value={roll}></input>
            {flag ?
                <button onClick={updateStudent}>update</button>
                :
                <button onClick={ctHandler}>Submit</button>

            }
            {/* <button onClick={ctHandler}>Submit</button> */}

            <p style={{ backgroundColor: 'red', color: 'wh' }}>{
                errorMsg
            }</p>

            <hr />
            <table>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>Age</th>
                    <th>Class</th>
                    <th>Roll</th>
                </tr>


                {students.map((e, i) => {
                    return <StudentList student={e} index={i} deleteStudent={deleteHandler} updateStudent={upgradeStudent} />
                })}
            </table>


        </div>
    )
}

export default Students