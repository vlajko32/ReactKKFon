import { useState } from "react"


const AddPlayer = ({onAdd}) => {
    const[name,setName] = useState('')
    const[surname,setSurname] = useState('')
    const[height,setHeight] = useState()
    const[description,setDescription] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!name) {
            alert('Please add a player')
            return
        }

        onAdd({name,surname,height,description})
        setName('')
        setSurname('')
        setDescription('')
        setHeight(0)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Player name</label>
                <input type='text' placeholder='Add Player' value={name}
                onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Surname</label>
                <input type='text' placeholder='Surname'
                value={surname}
                onChange={(e)=>setSurname(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Height</label>
                <input type='number' placeholder='Height'
                value={height}
                onChange={(e)=>setHeight(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Description</label>
                <input type='text' placeholder='About player'
                value={description}
                onChange={(e)=>setDescription(e.target.value)}/>
            </div>
            <input type='submit' value='Save Player' className='btn btn-block'/>

        </form>
    )
}

export default AddPlayer
