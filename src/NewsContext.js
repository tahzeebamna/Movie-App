import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsContext = React.createContext();

const NewsContextProvider = ({children}) => {
    
    const[inputText,setInputText]= useState("i")
    const [category, setCategory] = useState("technology")
    const [langSource, setLangSource] = useState("en")
    const [countrySource, setCountrySource] = useState("us")

    // const [channelSource, setchannelSource] = useState("bbc-news")





    const [data, setData] = useState()
    const apiKey = "10f798b3e3e84a96acacce207df76dde"
  
    useEffect(() => {
      const fetchNews = async () => {
        const res = await axios.get(`https://newsapi.org/v2/everything?q=${inputText?inputText:null}&language=${langSource}&from=2021-06-28&to=2021-06-28&sortBy=popularity&apiKey=${apiKey}`);
        setData(res.data);
        console.log(res.data)

      };
  
      fetchNews();
    }, [inputText,langSource]);
    useEffect(() => {
      const fetchCategory = async () => {
          
              const res =  await axios.get(`https://newsapi.org/v2/top-headlines?language=${langSource}&category=${category?category:null}&apiKey=${apiKey}`);
              setData(res.data);
              console.log(res.data)

      
      };
  
      fetchCategory();
    }, [ category,langSource]);
    useEffect(() => {
      const fetchCategory = async () => {
              const res =  await axios.get(`https://newsapi.org/v2/top-headlines?country=${countrySource}&apiKey=${apiKey}`);
              setData(res.data);
              console.log(res.data)
              };
  
      fetchCategory();
    }, [ countrySource]);





    return (
        <NewsContext.Provider
            value={{data,inputText,setInputText,category,setCategory,setLangSource,setCountrySource}}
        >
            {children}
        </NewsContext.Provider>
    )
}

export { NewsContextProvider , NewsContext}