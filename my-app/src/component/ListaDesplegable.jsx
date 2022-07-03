import { useState } from "react"

export default function ListaDesplegable(){
   
  const cambio=(e)=>{
      
  }
  
  return(
      <>
        <div className="field">
         <label className="label">Subject</label>
         <div className="control">
           <div className="select">
             <select onChange={cambio}>
               <option>Select dropdown</option>
               <option >With options</option>
             </select>
           </div>
         </div>
        </div>
      </>
  
    )
  
  }