import './App.css';
import {NewsContextProvider} from './NewsContext';
import News from './Component/News';
import Input from './Component/Input';
import Category from './Component/Category';
import SubHeader from './Component/SubHeader';



function App() {
  return (
    <div className="main">
      <NewsContextProvider>
     <div className="header">'
        <Input/>
        <Category/>
        <SubHeader/>
     </div>
      
      <News/>
      </NewsContextProvider>
      
    </div>
  );
}

export default App;
