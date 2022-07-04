import { useEffect } from "react";
import { useState } from "react"


export default function ProductosCargados ({datos,eliminarProducto, ProductoAEditar}){
    
  const [isSelect, setIsSelect]=useState("");
  const [desactivaBoton, setDescativaBoton]=useState(false)
  useEffect(()=>{setIsSelect("")},[datos])
  useEffect(()=>{isSelect===""? setDescativaBoton(false):setDescativaBoton(true)},[isSelect])
  
  let total=0;
  datos.forEach(element => {total+=element.precioTotal});
  
  const rowEdit=(producto)=>{setIsSelect(producto.id);ProductoAEditar(producto); setDescativaBoton(true)}
  
  return(
<div className="container is-max-desktop">
    <table className="table is-fullwidth">
      
      <thead>
       
        <tr>
        <th ><abbr className="subtitle is-5" style={{textDecoration:"none"}} title="Fecha de carga"><strong>Fecha</strong></abbr></th>
          <th><abbr className="subtitle is-5" style={{textDecoration:"none"}} title="es el rubro"><strong>Rubro</strong></abbr></th> 
           <th><abbr className="subtitle is-5" style={{textDecoration:"none"}} title="Es el producto"><strong>Producto</strong></abbr></th>
        
          <th><abbr className="subtitle is-5" style={{textDecoration:"none"}} title="Cantidad seleccionada"><strong>Cantidad</strong></abbr></th>
          <th><abbr className="subtitle is-5" style={{textDecoration:"none"}} title="precio unitario"><strong>Precio Unitario</strong></abbr></th>
          <th><abbr className="subtitle is-5" style={{textDecoration:"none"}} title="sub total"><strong>Total</strong></abbr></th>
        </tr>
    
      </thead> 
     
      <tbody>
        { 
         datos.length>0 ?
              datos.map((producto)=> 
                                <tr  className={producto.id===isSelect? "is-selected": ""} key={producto.id}  >
                                  <td className="subtitle is-5" style={{textDecoration:"none"}}>{producto.fecha} </td>
                                  <td className="subtitle is-5" style={{textDecoration:"none"}}>{producto.rubro}</td>
                                  <td className="subtitle is-5" style={{textDecoration:"none"}}>{producto.nombreProducto }</td>
                                  <td className="subtitle is-5" style={{textDecoration:"none"}}>{producto.cantidad}</td>
                                  <td className="subtitle is-5" style={{textDecoration:"none"}}>{producto.precioUnitario}</td>
                                  <td className="subtitle is-5" style={{textDecoration:"none"}}>Total</td>
                                  <div>
                                    <td><button className="button is-success is-normal is-responsive" id={producto.id}  onClick={()=>rowEdit(producto)} disabled={desactivaBoton?true:false} >editar</button></td>
                                    <td><button className="button is-danger is-normal is-responsive" id={producto.id}  onClick={(e)=>{eliminarProducto(e.target.id)}}disabled={desactivaBoton?true:false}>eliminar</button></td>
                                 </div>
                                 
                               </tr>
              ):
                
           
              //se agregan etiquetas td vacias para evitar los warnings
                  <tr>
                     <td></td>
                     <td></td>
                     <td className="subtitle is-6 has-text-centered">Sin datos</td> 
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>                 
                 </tr>                  
        
        
        
        }
        

        
      </tbody>
       <tfoot  >
        <tr>
          <th><abbr className="subtitle is-6" style={{textDecoration:"none"}} title=""></abbr></th>
          <th></th>
          <th><abbr className="subtitle is-6" style={{textDecoration:"none"}} title=""></abbr></th>
          <th><abbr className="subtitle is-6" style={{textDecoration:"none"}} title=""></abbr></th>
          <th><abbr className="subtitle is-6 has-text-weight-bold" style={{textDecoration:"none"}} title="">Total: $</abbr></th>
          <th><abbr className="subtitle is-6" style={{textDecoration:"none"}} title=""> </abbr></th>
        </tr>
      </tfoot>
     
</table> </div>
  )

}