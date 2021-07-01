import React from 'react'

const NewsArticle = ({data, category}) => {
    
    return (
        <div className="card">
            <div className="images">
                <img src={data.urlToImage}/>
            </div>
            <div className="txt">
                <h2>{data.title}</h2>
                <p>{data.content}</p>
                <h6>{data.publishedAt}</h6>
                <h6>{category}</h6>
            </div>
          
        </div>
    )
}

export default NewsArticle
