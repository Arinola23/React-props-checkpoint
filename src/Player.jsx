import React from 'react'
import  Card from 'react-bootstrap/Card'

const Player = ({ Name, Team, Nationality, JerseyNumber, Image, age }) => {
  return (
    <div className='player'>
       <Card className ='card' style ={{width: '280px', margin: '30px'}}>
            <Card.Img src={Image} alt = {Name} />
            <Card.Title>{Name}</Card.Title> 
            <Card.Text>
                Team: {Team} <br />
                Nationality: {Nationality} <br />
                JerseyNumber: {JerseyNumber} <br />
                Age: {age} <br/>
            </Card.Text>
       </Card>
       </div>
   
  )
}
    Player.defaultProps = {
        //default
    }

export default Player;