import { useState, useEffect } from "react"

export default function Formulario({agregaProducto,itemEdicion,editaProducto}){
 const inicial={ 
                 id:"",
                 rubro:"",
                 fecha:"",
                 nombreProducto:"",
                 cantidad:"",
                 precioUnitario:"",
                 precioTotal:0
              
}
 const [producto,setProducto]=useState({inicial});
   
 const [auxItemEdicion,setAuxItemEdicion]=useState({})
  
 useEffect(()=>{setProducto(itemEdicion);setAuxItemEdicion({...itemEdicion});console.log(auxItemEdicion)},[itemEdicion])
 
 
 const manejaNuevoProducto=(e)=>{ setProducto({...producto,[e.target.name]:e.target.value})}
                        
//naejador de el evento que envia el producto moficado o el nuevo producto
 const manejaOnSubmit=(e)=>{ console.log(auxItemEdicion)
     e.preventDefault();
    if (producto.nombreProducto && producto.cantidad && producto.precioUnitario && producto.rubro){
        //controlo que ningun dato este vacio
        if (producto.id) {
            //si posee id entonces significa que el elemento es editado
            //seteo el importe total del producto
            setProducto(producto.precioTotal=(producto.precioUnitario*producto.cantidad));
            editaProducto(producto);
                                                    
         } 
         else {
               //seteo el importe total del producto
               setProducto(producto.precioTotal=(producto.precioUnitario*producto.cantidad));         
               //es un elemento nuevo se debe agregar en el listado       
               agregaProducto({...producto})
                                          
               };
          //se edito o se agrego nuevo producto limpio los campos y nuleo el procuto a editar                   
          manejaClear()      
    }  else alert("datos sin cargar"); 
 };

const  manejaClear=()=>{setProducto(inicial); itemEdicion=null}
const manejaLimpiar=()=>{ console.log(auxItemEdicion)
                            if (auxItemEdicion.id){editaProducto(auxItemEdicion);
                                                    }
                         manejaClear();                         

                        }

const manejaControlNumerico=(e)=>{ if( isNaN(e.target.value)) {
                                                                alert("El valor ingresado no es un numero");
                                                                e.target.value="";

                                                            }else manejaNuevoProducto(e);};
                                


                  
return(
   
       





    <form action="" onSubmit={manejaOnSubmit}>
    <div className="columns">
  <div className="column">
     <select className="input is-medium" value={producto.rubro} name="rubro" onChange={manejaNuevoProducto} >
           
           <option value="">Ingrese Rubro</option>
             <option value="Bebidas">Bebidas</option>
             <option value="Comestibles">Comestibles</option>
             <option value="Enlatados">Enlatados</option>
             <option value="Embutidos Envasados">Embutidos Envasados</option>
             <option value="Fiambres">Fiambres</option>
             <option value="Descartables">Descartables </option>
             <option value="Limpieza">Limpieza</option>
          
          </select>
            
  </div>
  <div className="column" >

     <input  className="input is-medium" type="text" name="nombreProducto"  placeholder="Producto" onChange={manejaNuevoProducto} value={producto.nombreProducto}></input>

  </div>
  <div className="column">

    <input className="input is-medium " type="text" name ="cantidad" placeholder="Cantidad"  onChange={manejaControlNumerico} value={producto.cantidad}></input>

  </div>
  <div class="column">
   <input className="input is-medium " type="text" name="precioUnitario" placeholder="Precio Unitario" onChange={manejaControlNumerico} value={producto.precioUnitario}></input>
    

  </div>
  <div className="column">
       
       <div className="columns">
        <div className="column">
          <input className="button is-info is-medium  is-responsive"  type="submit" value="Enviar"/>
        </div>
        <div className="column">
           <input className="button is-light is-medium  is-responsive"  type="button" name="Limpiar" onClick={manejaLimpiar} value="Limpiar"/>
        </div>
       </div>
      

        
  </div>
  
</div>
</form>
  
      

  )

}

