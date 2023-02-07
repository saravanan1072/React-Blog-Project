import Template  from "../../common/Template";
import { useEffect ,useState} from "react";
import bollyfirst from '../../images/holly.webp';
import Nav from "../../Route/navgation/Nav";
import Title from "../../Route/navgation/Title";
import { hollyApi } from "../../utility/Api/Bollyhood";


const Bollywood=()=>{
   const state={
        imageurl:bollyfirst,
        title:"Top 5 most expensive Hollywood movies made to date",
        url:""
        
    }
const [data,setData]=useState([])
    useEffect(()=>{
      
           
            setData(hollyApi)
           

    },[]);
console.log(typeof data);
console.log(data);


    return(
        <>
        <Title></Title>
        <Nav></Nav>
        <Template name={"Hollywood"}  Apidata={data} second={state} />
        </>
       
    )
}
export default Bollywood;