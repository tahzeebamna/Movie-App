import React,{useContext} from 'react'
import { NewsContext } from '../NewsContext'
import '../App.css';



const Category = () => {
    const{category,setCategory}=useContext(NewsContext)

    return (
        <div>
           <div className="nav">
               {/* business entertainment general health science  sports technology */}
               <p className="btn" onClick={()=>setCategory("technology")}>Technologies</p>
               <p className="btn" onClick={()=>setCategory("entertainment")}>Entertainment</p>
               <p className="btn" onClick={()=>setCategory("general")}>Politics</p>
               <p className="btn" onClick={()=>setCategory("sports")}>Sports</p>
               <p className="btn" onClick={()=>setCategory("business")}>Business</p>
               <p className="btn" onClick={()=>setCategory("science")}>Science</p>


           </div>
          {/* here the data will be render */}
           
        </div>
    )
}

export default Category

