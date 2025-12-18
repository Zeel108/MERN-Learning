import React, { useMemo, useState } from 'react'

export const UseMemoDemo1 = () => {

    const [data, setData]=useState([1,2,3,4,5,6,7,8,9,10])
    const [data2, setData2]=useState([100,200,300,400,500,600])

    const addPerson = () => {
        setData([...data,11])
    }
    const adddata = () => {
        setData2([...data2,111])
    }

    const randomNo = useMemo(()=>{
        return Math.floor(Math.random()*1000)
    },[data2])

    return (
    <div style={{textAlign:"center"}}>
        <h1>memo demo 1</h1>
        <h2>{randomNo}</h2>
        {
            data.map((d)=>{
                return <li>{d}</li>
            })
        }
        {
            data2.map((d2)=>{
                return <li>{d2}</li>
            })
        }

        <button onClick={addPerson}>add</button>
        <button onClick={adddata}>add2</button>

    </div>
  )
}
