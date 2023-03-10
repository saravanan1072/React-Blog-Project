import Template  from "../../common/Template";
import { useEffect ,useState} from "react";
import bollyfirst from '../../images/techfirst.jpg';
import Nav from "../../Route/navgation/Nav";
import Title from "../../Route/navgation/Title";
//import { TechApi } from "../../utility/Api/Bollyhood";
import { ApiCaller } from "../../utility/ApiCaller";


const Bollywood=()=>{
   const state={
        imageurl:bollyfirst,
        title:"Using Hybrid Cloud To Meet The Challenges Of  Data Architectures",
        
    }
const [data,setData]=useState([])
   // useEffect(()=>{  setData(TechApi) },[]);
   useEffect(()=>{
    ApiCaller({
              url:"https://reactblock-backend.onrender.com//technology",
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
        <Template name={"Technology"}  Apidata={data} second={state} />
        </>
       
    )
}
export default Bollywood;