import React,{useState,useContext} from 'react';
import { NewsContext } from '../NewsContext'
import '../App.css';


// import './subHeader.css';

const Navbar = () => {
    const{setLangSource,data}=useContext(NewsContext)
    //const arr=[ "ar","de","en","es","fr","he","it","nl","no","pt","ru","se","ud","zh"]
    const [isActive, setIsActive] = useState(false)
    const [isActiveC, setIsActiveC] = useState(false)
    const [isActiveCo, setIsActiveCo] = useState(false)


    // const [lang, setLang]=useState()
    const showDropdownMenu=(e)=>{
        e.preventDefault()
        setIsActive(!isActive)
    }
    const showDropdownCountry =(e)=>{
        e.preventDefault()
        setIsActiveC(!isActiveC)
    }
    const showDropdownChanells =(e)=>{
        e.preventDefault()
        setIsActiveCo(!isActiveCo)
    }
   
   
    
    return (
        <div className="mainDrp">
           <div >
           <div className="dropdown" > 
                <p>Languages</p>
                <p className="drpBtn" onClick={showDropdownMenu}>v</p>
           </div>
            {isActive?<ul>
                <li onClick={()=>{setLangSource("ar")}}>ARABIC</li>
                <li onClick={()=>{setLangSource("de")}}>GERMAN</li>
                <li onClick={()=>{setLangSource("en")}}>ENGLISH</li>
                <li onClick={()=>{setLangSource("es")}}>SPANISH</li>
                <li onClick={()=>{setLangSource("fr")}}>FRENCH</li>
                <li onClick={()=>{setLangSource("he")}}>HEBREW</li>
                <li onClick={()=>{setLangSource("hi")}}>HINDI</li>
                <li onClick={()=>{setLangSource("it")}}>ITALIAN</li>
                <li onClick={()=>{setLangSource("no")}}>Norwegian</li>
                <li onClick={()=>{setLangSource("ne")}}>NEPALI</li>
                <li onClick={()=>{setLangSource("ur")}}>URDU</li>
                <li onClick={()=>{setLangSource("ja")}}>JAPANESE</li>
                <li onClick={()=>{setLangSource("zh")}}>CHINESE</li>
          </ul>:null}
          {/*  */}
            </div>
            <div className="dropdown" > 
                 <p>Country</p>
                <p className="drpBtn" onClick={showDropdownCountry}>v </p>
             </div>
               {/* <h1>Hello dropdown</h1>  ae ar at au be bg br ca ch cn co cu cz de eg fr gb gr hk hu id ie il in it jp kr lt lv ma mx my ng nl no nz ph pl pt ro rs ru sa se sg si sk th tr tw ua us ve za  */}
            {isActiveC?<ul>
                <li onClick={()=>{setLangSource("ar")}}>ARABIC</li>
                <li onClick={()=>{setLangSource("ae")}}>GERMAN</li>
                <li onClick={()=>{setLangSource("at")}}>ENGLISH</li>
                <li onClick={()=>{setLangSource("au")}}>SPANISH</li>
                <li onClick={()=>{setLangSource("be")}}>FRENCH</li>
                <li onClick={()=>{setLangSource("bg")}}>HEBREW</li>
                <li onClick={()=>{setLangSource("br")}}>HINDI</li>
                <li onClick={()=>{setLangSource("ca")}}>ITALIAN</li>
                <li onClick={()=>{setLangSource("ch")}}>Norwegian</li>
                <li onClick={()=>{setLangSource("cn")}}>NEPALI</li>
                <li onClick={()=>{setLangSource("cu")}}>URDU</li>
                <li onClick={()=>{setLangSource("cz")}}>JAPANESE</li>
                <li onClick={()=>{setLangSource("de")}}>CHINESE</li>
                <li onClick={()=>{setLangSource("eg")}}>CHINESE</li>
                <li onClick={()=>{setLangSource("fr")}}>CHINESE</li>
                <li onClick={()=>{setLangSource("gb")}}>CHINESE</li>
                <li onClick={()=>{setLangSource("gr")}}>CHINESE</li>
                <li onClick={()=>{setLangSource("hk")}}>CHINESE</li>
                <li onClick={()=>{setLangSource("hu")}}>CHINESE</li>
                <li onClick={()=>{setLangSource("id")}}>CHINESE</li>
                <li onClick={()=>{setLangSource("in")}}>CHINESE</li>
                </ul>:null}
                {/* <div className="button" onClick={showDropdownChanells}> COUNTRY </div> */}
                {/* {isActiveCo?
                <ul>
                   {data.articles.map((cur)=>{
                        <li>{cur.source.id}</li>
                   })}
                </ul>:null
                } */}
        </div>
    )
}

export default Navbar