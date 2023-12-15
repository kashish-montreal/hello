// import React from 'react'
// import { useState } from 'react'
// import List from './List';
// export default function ApiData() {
//     const[state,setState]=useState([])
//     function getting(){
//         var data=fetch("https://jsonplaceholder.typicode.com/posts")
//         .then(function(res){
//             return res.json().then(function(data){
//             console.log(data);
//             setState(data);
//         })
//         })

//     }
//   return (
//     <div>
//       <button onClick={getting}>Click to see data</button>
//       {
//       state.map((el,i)=> {
//         return <div><li key={i}>{el.userId} </li>
//                     <li>{el.title}</li>
//         </div>
//       })}
      
//     </div>
//   )
// }
