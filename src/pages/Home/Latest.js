import "./Latest.css";
import {useNavigate} from 'react-router-dom'

import { useEffect ,useState} from "react";
import { latestApi } from "../../utility/Api/Bollyhood";
export default function Latest(){




    const navigate=useNavigate();



  const [data,setData]=useState([])
  useEffect(()=>{
  
     
        setData(latestApi)
       

},[]);
const handleNavigation = (item, index) => {
    console.log(item);
    navigate(`/home/a/${index}`, { state: item });
  };

    return(
        <div id="latest">
            <h2>The Latest</h2><hr/>
            <div id="grid-container">
                <div className="child child1">
                    <img src={data[0]?.urlToImage} alt="tree"
                               onClick={() => handleNavigation(data[0], 0)}
                               />
                    <h2>Joshua Tree Overnight Adventure</h2>
                    <p>Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces</p>
                    <p><b>Travel</b> / August 21 2017</p>
                    </div>
                <div className="child child2">
                    <img src={data[1]?.urlToImage} alt="tree"            onClick={() => handleNavigation(data[1], 1)}
/>
                    <h2>Joshua Tree Overnight Adventure</h2>
                    <p>Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces</p>
                    <p> <b>Travel</b> / August 21 2017</p>
                    </div>
                <div className="child child3">
                    <img src={data[2]?.urlToImage} alt="tree"            onClick={() => handleNavigation(data[2], 2)}
/>
                    <h2>Joshua Tree Overnight Adventure</h2>
                    <p>Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces</p>
                    <p><b>Travel</b> / August 21 2017</p>
                </div>
               
            </div>
        </div>
    )
}