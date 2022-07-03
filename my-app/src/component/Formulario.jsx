
import { useState, useEffect } from "react"

export default function Formulario({agregaProducto,itemEdicion,editaProducto}){
 const inicial={ 
                 id:"",
                 fecha:"",
                 rubro:"",
                 nombreProducto:"",
                 cantidad:"",
                 precioUnitario:""
              
}
 const [producto,setProducto]=useState({inicial});
   
 useEffect(()=>setProducto(itemEdicion),[itemEdicion])
 
 
 const manejaNuevoProducto=(e)=>{setProducto({...producto,[e.target.name]:e.target.value})}
                        
//naejador de el evento que envia el producto moficado o el nuevo producto
 const manejaOnSubmit=(e)=>{e.preventDefault();
                              //controlo que ningun dato este vacio
                              if (producto.nombreProducto && producto.cantidad && producto.precioUnitario && producto.rubro){
                                //si posee id entonces significa que el elemento es editado
                                if (producto.id) {
                                                                                
                                                 editaProducto(producto);
                                                    
                                                } else {
                                                  //es un elemento nuevo se debe agregar en el listado       
                                                  agregaProducto({...producto})
                                                           
                                                  };
                               //se edito o se agrego nuevo producto limpio los campos y nuleo el procuto a editar                   
                               manejaClear()      
                          }  else alert("Hay datos sin cargar"); return
                          };
const  manejaClear=()=>{setProducto(inicial); itemEdicion=null}

const manejaControlNumerico=(e)=>{ return isNaN(e.target.value)  }
return(
   
       





    <form action="">
    <div className="columns">
  <div className="column">
     <select className="input is-medium"  name="rubro" onChange={manejaNuevoProducto} >
           
            <option>Seleccionar Rubro</option>
            <option>Bebidas</option>
            <option>Comestibles</option>
            <option>Enlatados</option>
            <option>Embutidos Envasados</option>
            <option>Fiambres</option>
            <option>Descartbles </option>
            <option>Limpieza</option>
          
          </select>
            
  </div>
  <div className="column">
     <input className="input is-medium " type="text" name ="cantidad" placeholder="Cantidad"  onChange={(e)=>{manejaNuevoProducto(e);manejaControlNumerico(e)} } value={producto.cantidad}></input>
  </div>
  <div className="column">
   <input className="input is-medium " type="text" name="precioUnitario" placeholder="Precio Unitario" onChange={manejaNuevoProducto} value={producto.precioUnitario}></input>

  </div>
  <div class="column">
   
<input className="input is-medium" type="text" name="nombreProducto"  placeholder="Producto" onChange={manejaNuevoProducto} value={producto.nombreProducto}></input>
 

  </div>
  <div className="column">
       <input className="button is-primary is-medium  is-responsive level-right" style={{}} type="submit" value="Enviar" />
        
  </div>
</div>
</form>
  
      

  )

}

