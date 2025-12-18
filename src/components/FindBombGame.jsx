import React, { useState } from 'react'

export const FindBombGame = () => {

    var gridSize = 5;
    var totalTiles = gridSize * gridSize;
    const [clickedTiles, setClickedTiles] = useState([]);
    const [isGameOver, setisGameOver] = useState(false);
    const [message, setMessage] = useState("Find bomb");






  return (
    <div style={{textAlign:"center"}}>
        <h1>message</h1>

        <div 
            style={{
                marginTop:"50px",
                display:"grid",
                gridTemplateColumns: `repeat(${gridSize},80px)`,
                gap:"10px",
                justifyContent:"center"
            }}>

                {
                    Array.from({ length: totalTiles}).map((tile, index) => {
                        return (
                            <div
                                style={{
                                    width:"80px",
                                    height:"80px",
                                    //display:"flex",
                                    //alignItems:"center",
                                    //justifyContent:"center",
                                    border:"1px solid black",
                                    backgroundColor: clickedTiles.includes(index) ? "gray" : "lightblue",
                                    cursor:"pointer"


                                }}>

                                </div>)
                    })
                }



            </div>



    </div>
  )
}
