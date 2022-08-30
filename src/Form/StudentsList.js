import React from 'react'

const StudentsList = ({student,index,deleteStudent,updateStudent}) => {


  return (
      <tr>
        <td>{index}</td>
        <td>{student.name}</td>
        <td>{student.batch}</td>
        <td>{student.roll}</td>
        <td>{student.class}</td>
        <td><button onClick={()=>deleteStudent(index)}>Delete</button></td>
        <td><button onClick={()=>updateStudent(student,index)}>update</button></td>

      </tr>
  )
}

export default StudentsList