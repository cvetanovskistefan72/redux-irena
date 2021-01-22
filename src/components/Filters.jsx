import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { handleText } from '../actions/filtersActions'
export const Filters = () => {
    const dispatch = useDispatch()
    const [book, setbook] = useState("")
    const handleSubmit = (e) =>{
        e.preventDefault()
        
        dispatch(handleText(book))
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={(e)=>setbook(e.target.value)} type="text"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
