import React from 'react'
import Players from './players'
import Player from './Player'

const playerList = () => {
  return (
   <div style={{ display: 'flex'}}>
    {Players.map((player, index)=> (
      <Player key = {index} {...player}/>
    ))}
   </div>
  )
}

export default playerList;