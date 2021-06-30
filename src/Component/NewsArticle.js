import React from 'react'

const NewsArticle = ({data}) => {
    
    return (
        <div className="card">
            <div className="images">
                <img src={data.urlToImage}/>
            </div>
            <div className="txt">
                <h2>{data.title}</h2>
                <p>{data.content}</p>
                <p>{data.publishedAt}</p>
            </div>
          
        </div>
    )
}

export default NewsArticle
