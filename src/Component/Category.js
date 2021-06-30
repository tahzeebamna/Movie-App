import React,{useContext} from 'react'
import { NewsContext } from '../NewsContext'
import '../App.css';



const Category = () => {
    const{category,setCategory}=useContext(NewsContext)

    return (
        <div>
           <div className="nav">
               {/* business entertainment general health science  sports technology */}
               <button className="btn" onClick={()=>setCategory("technology")}>Technologies</button>
               <button className="btn" onClick={()=>setCategory("entertainment")}>Entertainment</button>
               <button className="btn" onClick={()=>setCategory("general")}>Politics</button>
               <button className="btn" onClick={()=>setCategory("sports")}>Sports</button>
               <button className="btn" onClick={()=>setCategory("business")}>Business</button>
               <button className="btn" onClick={()=>setCategory("science")}>Science</button>


           </div>
          {/* here the data will be render */}
           
        </div>
    )
}

export default Category
