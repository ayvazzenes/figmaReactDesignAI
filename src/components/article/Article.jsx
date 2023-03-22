import React from 'react'
import "../article/article.css"


const Article = ({imgUrl,date,title}) => {
  return (
    <div className='gpt3__blog-container__article'>
      <div className='gpt3__blog-container__article-image'>
        <img src={imgUrl} alt="blogimage" />
      </div>
      <div className='gpt3__blog-conteiner__article-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article