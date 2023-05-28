import Template  from "../../common/Template";
import { useEffect ,useState} from "react";
import bollyfirst from '../../images/bollyfirst.jpeg';
import Nav from "../../Route/navgation/Nav";
import Title from "../../Route/navgation/Title";
// import {bollyApi} from '../../utility/Api/Bollyhood'
import { ApiCaller } from "../../utility/ApiCaller";


const Bollywood=()=>{
   const state={
        imageurl:bollyfirst,
        title:"Here's What Makes Bollywood Movies So Special",
        
    }
const [data,setData]=useState([])
    // useEffect(()=>{
    //         setData(bollyApi)
    // },[]);
    useEffect(()=>{
        ApiCaller({
                  url:"https://reactblock-backend.onrender.com/bollywood",
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
        <Template name={"Bollywood"}  Apidata={data} second={state} />
        </>
       
    )
}
export default Bollywood;