import React , {useState} from 'react'


import './App.css';
import logo from './assets/images/logo.png'

import InputSearch from './components/inputsearch/InputSearch.js'
import ShowResult from './components/showresult/ShowResult.js'



function App() {


  const [name,setName] =  useState('');
  const [searching , setSearching] = useState(false);



  function handleChange(e){
    setName(e.target.value);
    if(e.target.value == ''){
      setSearching(false);
    }else{
      setSearching(true);
    }

  }


  return (
        <>
          <img 
          className={`logo ${searching ? 'logo-contract':'logo-expand'}`} 
          src={logo} 
          alt="company logo" />

          <InputSearch handleChange={handleChange}  value={name}/>

          { searching && <ShowResult  value={name}/>}
        </>
  );
}

export default App;
