import {FaTimes} from 'react-icons/fa'

const Player = ({player, onDelete, onToggle}) => {
    return (
        <div className='task'>
            <h2>
            {player.name} {player.surname}<FaTimes style={{color:'red', cursor: 'pointer'}} 
            onClick={()=>onDelete(player.id)}/>
            </h2>
            <p>{player.height}cm</p>
            <p>{player.description}</p>
        </div>
    )
}

export default Player
