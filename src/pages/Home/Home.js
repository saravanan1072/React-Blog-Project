
import Latest from "./Latest";
import Title from "../../Route/navgation/Title";
import Nav from "../../Route/navgation/Nav";
import LatestStorie from './LatestStorie'

import Hello from "./Hello";


import {useNavigate} from 'react-router-dom'

import "./Home.css";
import { useEffect ,useState} from "react";
import { ApiCaller } from "../../utility/ApiCaller";
import { HomeApi } from "../../utility/Api/Bollyhood";

function Home() {

  const [data,setData]=useState([]);
  const navigate=useNavigate();
//   useEffect(()=>{
//     setData(HomeApi)
  
// },[]);

useEffect(()=>{
  ApiCaller({
    url:"https://reactblock-backend.onrender.com/home",
     method:'get',
 })
 .then((Response)=>{
    setData(Response);
    console.log(Response)
 })
 .catch((rej)=>{
     console.log(rej);
 })
 .finally(()=>{
     console.log("done");
 })
},[]);

const handleNavigation = (item, index) => {
  console.log(item);
  navigate(`/home/a/${index}`, { state: item });
};


  return (
    <>
    <Title></Title>
    <Nav></Nav>
      <div id="Home">
        <div>
          <img className="one" src={data[1]?.urlToImage} alt="nature" 
           onClick={() => handleNavigation(data[1], 1)}
            />
          <div className="textOne">
            Title of Veticall gallery
            <div className="text-One-last">Travel/january 15 2023</div>
          </div>
        </div>
        <div>
          <img className="second" src={data[2]?.urlToImage} alt="nature" 
           onClick={() => handleNavigation(data[2], 2)}/>
          <div className="textSecond">
            The sound cloud <br /> You loved is doomed
            <div className="text-Second-last">Travel/january 15 2023</div>
          </div>
        </div>
        <div>
          <img className="third" src={data[2]?.urlToImage} alt="nature"
           onClick={() => handleNavigation(data[2], 2)} />
          <div className="textThird">
            The sound cloud <br /> You loved is doomed
            <div className="text-Third-last">Travel/january 20 2023</div>
          </div>
        </div>
        <Latest />
        
        <Hello/>
        <LatestStorie/>
      
      </div>
    </>
  );
}

export default Home;
