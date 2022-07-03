import { useEffect } from "react";
import { useState } from "react"


export default function ProductosCargados ({datos,eliminarProducto, ProductoAEditar}){
let estadoBoton=true;
  const [botonActivo, setBotonActivo]=useState(estadoBoton);
  useEffect(()=>{},[botonActivo])
  
  const controlaBotones=(productoRow)=>{ setBotonActivo(botonActivo) }//ProductoAEditar(productoRow);
  
  return(
    <table className="table" style={{}}>
      <div>
      <thead>
        <tr>
        <th><abbr className="subtitle is-5" style={{textDecoration:"none"}} title="Fecha de carga">Fecha</abbr></th>
          <th><abbr className="subtitle is-5" style={{textDecoration:"none"}} title="es el rubro">Rubro</abbr></th>
           <th><abbr className="subtitle is-5" style={{textDecoration:"none"}} title="Es el producto">Producto</abbr></th>
        
          <th><abbr className="subtitle is-5" style={{textDecoration:"none"}} title="Cantidad seleccionada">Cantidad</abbr></th>
          <th><abbr className="subtitle is-5" style={{textDecoration:"none"}} title="precio unitario">Precio Unitario</abbr></th>
          <th><abbr className="subtitle is-5" style={{textDecoration:"none"}} title="sub total">Total</abbr></th>
        </tr>
      </thead> 
      <tfoot>
        <tr>
          <th><abbr className="subtitle is-6" style={{textDecoration:"none"}} title=""></abbr></th>
          <th></th>
          <th><abbr className="subtitle is-6" style={{textDecoration:"none"}} title=""></abbr></th>
          <th><abbr className="subtitle is-6" style={{textDecoration:"none"}} title=""></abbr></th>
          <th><abbr className="subtitle is-6 has-text-weight-bold" style={{textDecoration:"none"}} title="">Total: $</abbr></th>
          <th><abbr className="subtitle is-6" style={{textDecoration:"none"}} title=""> </abbr></th>
        </tr>
      </tfoot>
      <tbody>
        { 
         datos.length>0 ?
              datos.map((productoRow)=> 
                                <tr key={productoRow.id}  >
                                  <td className="subtitle is-6" style={{textDecoration:"none"}}>{productoRow.fecha} </td>
                                  <td className="subtitle is-6" style={{textDecoration:"none"}}>{productoRow.rubro}</td>
                                  <td className="subtitle is-6" style={{textDecoration:"none"}}>{productoRow.nombreProducto }</td>
                                  <td className="subtitle is-6" style={{textDecoration:"none"}}>{productoRow.cantidad}</td>
                                  <td className="subtitle is-6" style={{textDecoration:"none"}}>{productoRow.precioUnitario}</td>
                                  <td className="subtitle is-6" style={{textDecoration:"none"}}>Total</td>
                                  <td><button className="button is-warning is-small is-responsive" id={productoRow.id}  onClick={()=>controlaBotones()} >Editar</button></td>
                                  {/* <td><button className="delete" id={productoRow.id}  onClick={(e)=>{eliminarProducto(e.target.id)}}></button></td>
                                   */}<td><button className="button is-danger is-small is-responsive" id={productoRow.id}  onClick={(e)=>{eliminarProducto(e.target.id)}}>Eliminar</button></td>
                               </tr>
              ): //se agregan etiquetas td vacias para evitar los warnings
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
      </div>
</table>
  )

}