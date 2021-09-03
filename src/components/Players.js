import Player from "./Player"

const Players = ({players, onDelete, onToggle}) => {
    
    return (
        <>
        {players.map((player)=>
        (<Player key={player.id} player={player} onDelete={onDelete} onToggle={onToggle}/>))}
        </>
    )
}

export default Players
