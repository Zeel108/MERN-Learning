import React from 'react'
import { StudentList } from './StudentList'

export const Student = () => {

    const student = [
        {
            id:1001,
            name:'Sita',
            std:10,
            division:'A',
            roll_number:21,
            gender:'female'
        },
        {
            id:1002,
            name:'Radhe',
            std:9,
            division:'C',
            roll_number:1,
            gender:'male'
        },
        {
            id:1003,
            name:'Raj',
            std:10,
            division:'B',
            roll_number:20,
            gender:'male'
        },
        {
            id:1004,
            name:'Riya',
            std:9,
            division:'C',
            roll_number:51,
            gender:'female'
        }
    ]

    const info = (id) => {
        alert("student id is "+id)
    }

  return (
    <div style={{textAlign:'center'}}>
        <h1>Student</h1>

        <StudentList student = {student} info = {info}></StudentList>
    </div>
  )
}
