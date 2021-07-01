import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsContext = React.createContext();

const NewsContextProvider = ({children}) => {
    
    const[inputText,setInputText]= useState()
    const [category, setCategory] = useState("technology")
    const [langSource, setLangSource] = useState("en")
    const [countrySource, setCountrySource] = useState("us")
    const [sourxes, setSourxes] = useState("")
    const [source, setSource] = useState([])
    // const [channelSource, setchannelSource] = useState("bbc-news")





    const [data, setData] = useState()
    const apiKey = "c65980d1ccc54054b4945892bc16f31e"
    
  
    useEffect(() => {
      const fetchNews = async () => {
        const res = await axios.get(`https://newsapi.org/v2/everything?q=${inputText?inputText:null}&language=${langSource}&from=2021-06-28&to=2021-06-28&sortBy=popularity&apiKey=${apiKey}`);
        setData(res.data);
        console.log(res.data)
        setSource([...new Set(res.data.articles.map((currElm)=>currElm.source.id))])
      };
  
      fetchNews();
    }, [inputText,langSource]);
    
    useEffect(() => {
      const fetchCategory = async () => {
          
              const res =  await axios.get(`https://newsapi.org/v2/top-headlines?language=${langSource}&category=${category?category:null}&apiKey=${apiKey}`);
              setData(res.data);
              console.log(res.data)
              setSource([...new Set(res.data.articles.map((currElm)=>currElm.source.id))])

      
      };
  
      fetchCategory();
    }, [ category,langSource]);
    useEffect(() => {
      const fetchCategory = async () => {
              const res =  await axios.get(`https://newsapi.org/v2/top-headlines?country=${countrySource}&apiKey=${apiKey}`);
              setData(res.data);
              console.log(res.data)
        setSource([...new Set(res.data.articles.map((currElm)=>currElm.source.id))])

              };
  
      fetchCategory();
    }, [ countrySource]);


    useEffect(() => {
      //https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=API_KEY
      const fetchCategory = async () => {
              const res =  await axios.get(`https://newsapi.org/v2/top-headlines?sources=${sourxes.i}&apiKey=${apiKey}`);
              setData(res.data);
              console.log(res.data)
        setSource([...new Set(res.data.articles.map((currElm)=>currElm.source.id))])

              };
  
              sourxes !== "" && fetchCategory();
            }, [ sourxes]);
            
            console.log(sourxes)


// console.log(source)

    return (
        <NewsContext.Provider
            value={{data,inputText,setInputText,category,setCategory,setLangSource,setCountrySource, source, setSourxes}}
        >
            {children}
        </NewsContext.Provider>
    )
}

export { NewsContextProvider , NewsContext}