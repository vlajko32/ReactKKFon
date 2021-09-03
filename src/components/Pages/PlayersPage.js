import '../Pages/PlayerPage.css';
import Header from '../Header';
import React from 'react';
import Players from '../Players';
import AddPlayer from '../AddPlayer';
import { useState } from "react"
import DenseAppBar from '../AppBar';

function PlayersPage() {

  const [showAddPlayer, setShowAddPlayer] = useState(false)
  const [players, setPlayers] = useState([{
    id: 1,
    name: 'Vladislav',
    surname: 'Stojkovic',
    height: 186,
    description:'23 years old, Point Guard',
},
{
  id: 2,
  name: 'Marko',
  surname: 'Sinik',
  height: 188,
  description:'23 years old, Point Guard',
},
{
  id: 3,
  name: 'Luka',
  surname: 'Vuksanovic',
  height: 198,
  description:'26 years old, Small Forward',
}])

  const addPlayer = (player) =>
  {
    const id = Math.floor(Math.random() * 1000) +1
    const newPlayer = {id, ...player}
    setPlayers([...players,newPlayer])
  }


  const deletePlayer = (id) => {
    setPlayers(players.filter((player)=>player.id !== id))
  }

 

  return (
      <>
      <DenseAppBar/>
    <div className='container'> 
      <Header onAdd={()=>setShowAddPlayer(!showAddPlayer)} showAdd={showAddPlayer}
      />
      {showAddPlayer && <AddPlayer onAdd={addPlayer}/>}
      {players.length > 0 ?<Players players={players} onDelete={deletePlayer}/> : 'No Players to Show'}
      </div>
   </>
  );
}

export default PlayersPage;
