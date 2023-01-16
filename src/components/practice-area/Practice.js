import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import './practice.css'
import axios from "axios";


function Practice(){
 const {category_name} = useParams()
 const [data, setData] = useState({});
 
 console.log(category_name)

 useEffect(()=>{
    axios(`http://localhost:3000/api/dispute_categories/${category_name}`).then(res=>setData(res.data))
 },[])

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    return(
      
        <div className="practice">
         <u><div className="title"><h1>Practice Areas</h1></div></u>
            <div className="category">
               <h1>{data.category_name}</h1>
               <h2>{data.category_description}</h2>
           </div>
        <div className="consult">
           <form>
            <h3 className="request">Request Consultation</h3>
                 <label>Enter your name:
                     <input
                     type="text" 
                      value={name}
                     onChange={(e) => setName(e.target.value)}
                     />
                 </label>
                 
            </form>

            <form>
            <label>Email:
                     <input
                     type="text" 
                      value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     />
                 </label>
            </form>
              
            <form>
            <label>Telephone:
                     <input
                     type="text" 
                      value={telephone}
                     onChange={(e) => setTelephone(e.target.value)}
                     />
                 </label>
            </form>

            <form>
            <input type="submit" />
            </form>
            
           
        </div>
        </div>
    )
}

export default Practice