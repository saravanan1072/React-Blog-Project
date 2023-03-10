import Template  from "../../common/Template";
import { useEffect ,useState} from "react";
import bollyfirst from '../../images/holly.webp';
import Nav from "../../Route/navgation/Nav";
import Title from "../../Route/navgation/Title";
//import { hollyApi } from "../../utility/Api/Bollyhood";
import {ApiCaller} from '../../utility/ApiCaller'


const Bollywood=()=>{
   const state={
        imageurl:bollyfirst,
        title:"Top 5 most expensive Hollywood movies made to date",
        url:""
        
    }





const [data,setData]=useState([])
useEffect(()=>{
 ApiCaller({
           url:"https://reactblock-backend.onrender.com/hollywood",
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


    // useEffect(()=>{
    //         setData(hollyApi) },[]);




    return(
        <>
        <Title></Title>
        <Nav></Nav>
        <Template name={"Hollywood"}  Apidata={data} second={state} />
        </>
       
    )
}
export default Bollywood;