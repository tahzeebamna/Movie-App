import React,{useContext} from 'react'
import { NewsContext } from '../NewsContext';
import '../App.css'

const Input = () => {
   const{inputText,setInputText}=useContext(NewsContext)
   const handleChange=(e)=>{
            setInputText(e.target.value)
    }
    return (

        <div>

            <input
                type="text"
                onChange={handleChange}
                value={inputText}
                placeholder="Search"/>
        </div>

    )
}

export default Input