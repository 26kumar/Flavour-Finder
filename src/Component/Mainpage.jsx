import React, { useEffect, useState } from 'react'
import Mealcards from './Mealcard';
import InitialPage from './InitialPage';

const Mainpage = () => {
    const [data,setData]  =useState();
    const [search, setSearch] = useState("");
    const [msg, setMsg] = useState("")
    const [initialPageData, setInitialData] = useState()
    const [hidden, setHidden] = useState(false)

    const handleInput = (event) =>{
        setSearch(event.target.value)
    }
    const fetchAPI = async () =>{
        if(search == ""){
            setMsg("Please Enter Something")
        }else{
            const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
            const jsonData = await get.json();
        setData(jsonData.meals)
        setMsg("")
        }

        setHidden(true)
    }

  return (
    <>
        <h1 className='head'>FOOD RECIPE APP</h1>
        <div className='container'>
            <div className='searchBar'>
                <input type='text' placeholder='Enter Dishes' onChange={handleInput}/>
                <button onClick={fetchAPI}>Search</button>
            </div>
            {hidden === false ? <InitialPage/> : ""}
            <h4 className='msg'>{msg}</h4>
            <div>
            <Mealcards detail={data}/>
            </div>
        </div>
    </>
  )
}

export default Mainpage