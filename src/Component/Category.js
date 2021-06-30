import React,{useContext} from 'react'
import { NewsContext } from '../NewsContext'



const Category = () => {
    const{category,setCategory}=useContext(NewsContext)

    // const apiKey = "ab9c37abbbb84bb88c56fb1eb3cfc2e7"
    // const [data, setData] = useState()

   
    // useEffect(() => {
    //     const fetchNews = async () => {
            
    //             const res =  await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category?category:null}&apiKey=${apiKey}`);
    //             setData(res.data);
    //             console.log(res.data);
        
    //     };
    
    //     fetchNews();
    //   }, [ category]);
    return (
        <div>
           <div className="nav">
               {/* business entertainment general health science  sports technology */}
               <button onClick={()=>setCategory("technology")}>Technologies</button>
               <button onClick={()=>setCategory("entertainment")}>Entertainment</button>
               <button onClick={()=>setCategory("general")}>Politics</button>
               <button onClick={()=>setCategory("sports")}>Sports</button>
               <button onClick={()=>setCategory("business")}>Business</button>
               <button onClick={()=>setCategory("science")}>Science</button>


           </div>
          {/* here the data will be render */}
           
        </div>
    )
}

export default Category
