import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";

const Newsboard = ({category}) =>{
    const [articles,setArticle] =  useState([]);
    useEffect(()=>{
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url).then(response=>response.json()).then(data=>setArticle(data.articles))
    },[category]);
    return(
        <div>
            <h1 className="text-center">Latest <span className="badge bg-danger">News</span></h1>
            {
                articles.map((news,index)=>{
                    return <Newsitem id={index} 
                            title={news.title} 
                            description = {news.description} 
                            url={news.url} 
                            src={news.urlToImage}/>
                })
            }
        </div>
    )
}

export default Newsboard;