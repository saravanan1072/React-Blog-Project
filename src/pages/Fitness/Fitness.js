
import Template  from "../../common/Template";
//import { fitapi } from "../../utility/Api/Bollyhood";
import { useEffect ,useState} from "react";
import bollyfirst from '../../images/fit.png';
import Nav from "../../Route/navgation/Nav";
import Title from "../../Route/navgation/Title";
import { ApiCaller } from "../../utility/ApiCaller";


const Bollywood=()=>{
   const state={
        imageurl:bollyfirst,
        title:"Watch Martins Licis Train With Lifter Rauno Geinla",
        url:"https://www.menshealth.com/fitness/a40887148/strongman-martins-licis-rauno-heinla-deadlift-workout/"
        
    }
const [data,setData]=useState([])
    // useEffect(()=>{
       
    //         setData(fitapi)
     
    // },[]);

    useEffect(()=>{
        ApiCaller({
                  url:"https://reactblock-backend.onrender.com/fitness",
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
        <Template name={"Fitness"}  Apidata={data} second={state} />
        </>
       
    )
}
export default Bollywood;