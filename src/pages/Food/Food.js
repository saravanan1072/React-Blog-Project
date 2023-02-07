

import Template  from "../../common/Template";
import { useEffect ,useState} from "react";
import bollyfirst from '../../images/food.jpg';
import Nav from "../../Route/navgation/Nav";
import Title from "../../Route/navgation/Title";
import { foodapi } from "../../utility/Api/Bollyhood";


const Bollywood=()=>{
   const state={
        imageurl:bollyfirst,
        title:"Wooden table with food, top view",
        url:"https://www.dreamstime.com/wooden-table-food-top-view-cafe-image102532611"
        
    }
const [data,setData]=useState([])
    useEffect(()=>{
      
            setData(foodapi)
           
       
    },[]);
console.log(typeof data);
console.log(data);


    return(
        <>
        <Title></Title>
        <Nav></Nav>
        <Template name={"Food"}  Apidata={data} second={state} />
        </>
       
    )
}
export default Bollywood;