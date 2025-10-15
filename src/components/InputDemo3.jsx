import React, { useState } from 'react'

export const InputDemo3 = () => {

    const [selectedDate, setselectedDate]=useState()
    const [isSubbmited, setisSubbmited]=useState(false)

    const getDateLabel = (date) => {
        const today = new Date()
        const choosenDate = new Date(date)

        today.setHours(0,0,0,0)
        choosenDate.setHours(0,0,0,0)

        const diffDays = Math.round((choosenDate.getTime()-today.getTime())/(1000*60*60*24))
        console.log(diffDays)

        switch(diffDays){
            case -2:
                return 'Day before yesterday'
            case -1:
                return 'yesterday'
            case 0:
                return 'Today'
            case 1:
                return 'tomorrow'
            case 2:
                return 'Day after tomorrow'
            default:
                return `gap of ${diffDays}`
        }
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>Input Demo 3</h1>
        <div>
            <label>DATE</label>
            <input type='date' onChange={(event)=>{setselectedDate(event.target.value)}}></input>
            {selectedDate}
        </div>
        <div>
            <button onClick={()=>{setisSubbmited(true)}}>submit</button>
        </div>
        {
            isSubbmited && <div>
                <h1>Date = {selectedDate}</h1>
                <h2>{getDateLabel(selectedDate)}</h2>
            </div>
        }
    </div>
  )
}
