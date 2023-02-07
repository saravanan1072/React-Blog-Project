import Template  from "../../common/Template";
import { useEffect ,useState} from "react";
import bollyfirst from '../../images/bollyfirst.jpeg';
import Nav from "../../Route/navgation/Nav";
import Title from "../../Route/navgation/Title";
import {bollyApi} from '../../utility/Api/Bollyhood'


const Bollywood=()=>{
   const state={
        imageurl:bollyfirst,
        title:"Here's What Makes Bollywood Movies So Special",
        
    }
const [data,setData]=useState([])
    useEffect(()=>{
        // ApiCaller({
        //    url:"https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=8d69664814e9481094f08138747bb2a2",
        //     method:'get',

        // })
        // .then((Response)=>{
            setData(bollyApi)
           

        // })
        // .catch((rej)=>{
        //     console.log(rej);
        // })
        // .finally(()=>{
        //     console.log("done");
        // })
    },[]);
console.log(typeof data);
console.log(data);


    return(
        <>
        <Title></Title>
        <Nav></Nav>
        <Template name={"Bollywood"}  Apidata={data} second={state} />
        </>
       
    )
}
export default Bollywood;