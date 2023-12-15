import TimerUseRef from './component/TimerUseRef';
import Uncontrolled from './component/Uncontrolled';
import UseRefIntro from './component/UseRefIntro';
import logo from './logo.svg';

// import Hello from "./component/Hello";
import Navbar from "./component/Navbar";
// import Cards from './component/Cards';
import Counter from './component/Counter';

// import List from './component/List';
import ToDoList from './component/ToDoList';
// import ApiData from './component/ApiData';
// import RandmUserApi from './component/RandmUserApi';
// import A from './component/A';
// import B from './component/B';

// import Loooks from './component/Loooks';
// import Child2 from './component/Child2';
// import TableCard from './component/TableCard';
// import CardTable from './component/CardTable';
import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PagenotFound from './component/PagenotFound';

import Electronic from './component/Product/Electronic';
import Product from './component/Product/Product';
import ProductDetail from './component/Product/ProductDetail';
import A from './component/Context/A';
import Login from './component/UseContext.jsx/Login';
import Auth from './component/UseContext.jsx/Auth';
import { loginContext } from './component/UseContext.jsx/Context'
import Input from './component/Redux/Input';
import Display from './component/Redux/Display';
// import Display from './component/Redux/Display';
// import Input from './component/Redux/Input';
// import Input2 from './component/ReduxPractice/Input2';
// import Display2 from './component/ReduxPractice/Display2';
// import CounteruseEffect from './component/CounteruseEffect';
// import CountDownUF from './component/CountDownUF';
// import SetTimoutUE from './component/SetTimoutUE';
// import RndmUserUE from './component/RndmUserUE';
// import StartStop from './component/StartStop';





function App() {
  // const[state,setState]=useState(true)
  const[state,setState]=useState({
    loggedIn:false,
    user:"Guest User"
  })

  function fnLoggedIn(data){
    setState(data)
  }
  return (
    <div>
     
      <loginContext.Provider value={{state,fnLoggedIn}}>
      <Navbar/>
      <Auth/>
      </loginContext.Provider>

      {/* <Hello/> */}
      {/* <div style={{textAlign:"center", display:"flex"}}>
      <Cards 
      img="https://gradepowerlearning.com/wp-content/uploads/2018/12/Young-student-smiling-holding-books..jpeg"
      name="aarti"
      pro="Doctor"

      />
      <Cards
      img="https://gradepowerlearning.com/wp-content/uploads/2018/12/Young-student-smiling-holding-books..jpeg"
      name="aarti"
      pro="Doctor"

      />
      <Cards
      img="https://gradepowerlearning.com/wp-content/uploads/2018/12/Young-student-smiling-holding-books..jpeg"
      name="aarti"
      pro="Doctor"
      ></Cards>
</div> */}

{/* <List/> */}

{/* // <ApiData/> */}
 {/* <RandmUserApi/>
 <A/>
 <B/> */}
{/* <Loooks/> */}
{/* <Child2/> */}
{/* <button onClick= {<TableCard/>}>Click to see table</button>
<button onClick={ <CardTable/>}>Click to see Card</button> */}
{/* <button onClick={()=>{setState(false)}}>Click to see Table</button>
<button onClick={()=>{setState(true)}}>Click to see Card</button>
{state ?<CardTable/>:<TableCard/>} */}
{/* <CounteruseEffect/> */}
{/* <CountDownUF/> */}
{/* <SetTimoutUE/> */}
{/* <RndmUserUE/> */}
{/* <StartStop/> */}
 {/* <UseRefIntro/> */}
 {/* <Uncontrolled/> */}

{/* <Routes>

<Route path="/counter" element={<Counter/>}/>
 <Route path="/todo" element={<ToDoList/>}/>
 <Route path="/timer" element={<TimerUseRef/>}/>
 <Route path="/product" element={<Product/>}>
  <Route path="" element={<Navigate to="electronic"/>}/>
    <Route path="electronic" element={<Electronic/>}/>
    </Route>
    <Route path="/productdetail/:id" element={<ProductDetail/>}/>
  

  
 <Route path="*" element={<PagenotFound/>}/>
 
</Routes> */}

{/* <A/> */}
{/* <Input2/>
<Display2/> */}
<Input/>
<Display/>

 </div>
  );
}
export default App;