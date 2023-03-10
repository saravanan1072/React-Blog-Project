

import Template  from "../../common/Template";
import { useEffect ,useState} from "react";
import bollyfirst from '../../images/food.jpg';
import Nav from "../../Route/navgation/Nav";
import Title from "../../Route/navgation/Title";
//import { foodapi } from "../../utility/Api/Bollyhood";
import { ApiCaller } from "../../utility/ApiCaller";


const Bollywood=()=>{
   const state={
        imageurl:bollyfirst,
        title:"Wooden table with food, top view",
        url:"https://www.dreamstime.com/wooden-table-food-top-view-cafe-image102532611"
        
    }
const [data,setData]=useState([])
    // useEffect(()=>{
      
    //         setData(foodapi)
 
    // },[]);
    useEffect(()=>{
        ApiCaller({
                  url:"https://reactblock-backend.onrender.com/food",
                   method:'get',
               })
               .then((Response)=>{
                  setData(Response);
                 
               })
               .catch((rej)=>{
                   console.log(rej);
               })
               .finally(()=>{
                   console.log("done");
               })
           },[]);


    return(
        <>
        <Title></Title>
        <Nav></Nav>
        <Template name={"Food"}  Apidata={data} second={state} />
        </>
       
    )
}
export default Bollywood;