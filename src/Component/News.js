import React, {useContext} from 'react'
import { NewsContext } from '../NewsContext'
import  NewsArticle from './NewsArticle'




const News = () => {

    const{data}=useContext(NewsContext)
    
    return (
        <div>
            {
               data? data.articles.map((currVal)=>{

                    return(<NewsArticle data={currVal} key={currVal.url}/>
                        )

                }):"loading"
            }
            
        </div>
    )
}

export default News
