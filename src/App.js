 
import './App.css';
import getSmileys from './data.js';

import {useState,useEffect} from 'react';

function App() {
  
  
  console.log("rerender")
  const [search,setSearch] =useState('');
  const [ndata,setnData] = useState([]);
  const [data,setData] = useState([]);
  useEffect(()=>{
       const newData = data.filter((emoji)=> emoji.title.toLowerCase().includes(search.toLowerCase()));
       setnData(newData);
  }
  ,[search]);

  useEffect(()=>{
    console.log("secondUseEffect")
    let result= getSmileys();
    setData(result);
}
,[]);

  return (
    <div className="App">
        <h1>Emoji Search</h1>
      <input type="text" value={search} onChange={(e) => setSearch (e.target.value)} ></input>
      {ndata.map((emoji) => <li>{emoji.symbol} {emoji.title}</li>)}
      
    </div>
  );
}

export default App;
