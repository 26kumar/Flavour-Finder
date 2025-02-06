// import React, { useState } from 'react'

// const [menu, setMenu] = useState()

// const get = fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
// const menuJson = get.json()
// console.log(menuJson.categories)
// setMenu(menuJson.categories)

// const InitialPage = () => {
    
//   return (
//     <div className='meals'>
//         {!menu ? "Data Not Found" : menu.map((curItem)=>{
//             return (
//                 <div className='mealImg'>
//                   <img src={curItem.strCategoryThumb}/>
//                   <p>{curItem.strCategory}</p>
//                   {/* <NavLink to={`/${curItem.idMeal}`}><button >Recipe</button></NavLink>  */}
//                 </div>
//             )
//         }) 
         
//         }
//     </div>
//   )
// }

// export default InitialPage