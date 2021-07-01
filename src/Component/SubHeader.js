import React,{useState,useContext} from 'react';
import { NewsContext } from '../NewsContext'
import '../App.css';


// import './subHeader.css';

const Navbar = () => {
    const{setLangSource,data, source , setSourxes}=useContext(NewsContext)
    //const arr=[ "ar","de","en","es","fr","he","it","nl","no","pt","ru","se","ud","zh"]
    const [isActive, setIsActive] = useState(false)
    const [isActiveC, setIsActiveC] = useState(false)
    const [isActiveD, setIsActiveD] = useState(false)
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
    const showDropdownChanellsD =(e)=>{
        e.preventDefault()
        setIsActiveD(!isActiveD)
    }
   
   
    
    return (
        <div className="nav" >

                <div className="btn"  > 
                    <p>Sources</p>
                    <p className="drpBtn" onClick={showDropdownChanellsD}>v</p>
                </div>
                {isActiveD?
                        (<ul className="ult1">
                            {
                                source && source.length > 0 && source.map((i) => (
                                    i && <li onClick={()=>{setSourxes({i})}}>{i}</li>
                                ))
                            }
                        </ul>)
                        : 
                        null
                    }


           <div className="btn" > 
                <p>Languages</p>
                <p className="drpBtn" onClick={showDropdownMenu}>v</p>
           </div>

            {isActive?<ul className="ult2">
                <li onClick={()=>{setLangSource("ar")}}>arabic</li>
                <li onClick={()=>{setLangSource("de")}}>german</li>
                <li onClick={()=>{setLangSource("en")}}>english</li>
                <li onClick={()=>{setLangSource("es")}}>spanish</li>
                <li onClick={()=>{setLangSource("fr")}}>french</li>
                <li onClick={()=>{setLangSource("he")}}>hebrew</li>
                <li onClick={()=>{setLangSource("hi")}}>hindi</li>
                <li onClick={()=>{setLangSource("it")}}>italian</li>
                <li onClick={()=>{setLangSource("no")}}>norwegian</li>
                <li onClick={()=>{setLangSource("ne")}}>nepali</li>
                <li onClick={()=>{setLangSource("ur")}}>urdu</li>
                <li onClick={()=>{setLangSource("ja")}}>japenese</li>
                <li onClick={()=>{setLangSource("zh")}}>chinese</li>
          </ul>:null}
            <div className="btn" > 
                 <p>Country</p>
                <p className="drpBtn" onClick={showDropdownCountry}>v </p>
             </div>
               
            {isActiveC?<ul className="ult3">
                <li onClick={()=>{setLangSource("ar")}}>Argentina</li>
                <li onClick={()=>{setLangSource("ae")}}>United arab emirates</li>
                <li onClick={()=>{setLangSource("at")}}>Austria</li>
                <li onClick={()=>{setLangSource("au")}}>australia</li>
                <li onClick={()=>{setLangSource("be")}}>belgium</li>
                <li onClick={()=>{setLangSource("bg")}}>bulgaria</li>
                <li onClick={()=>{setLangSource("br")}}>brazil</li>
                <li onClick={()=>{setLangSource("ca")}}>canada</li>
                <li onClick={()=>{setLangSource("ch")}}>switzerland</li>
                <li onClick={()=>{setLangSource("cn")}}>china</li>
                <li onClick={()=>{setLangSource("cu")}}>cuba</li>
                <li onClick={()=>{setLangSource("cz")}}>czech republic</li>
                <li onClick={()=>{setLangSource("si")}}>slovenia</li>
                <li onClick={()=>{setLangSource("kr")}}>Korea</li>
                <li onClick={()=>{setLangSource("gr")}}>greece</li>
                <li onClick={()=>{setLangSource("hk")}}>CHINESE</li>
                <li onClick={()=>{setLangSource("nz")}}>New zealand </li>
                <li onClick={()=>{setLangSource("jp")}}>japan</li>
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