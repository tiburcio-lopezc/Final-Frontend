
import { useState, useEffect, useSyncExternalStore } from "react"
import Formulario from './Formulario';
import ProductosCargados from './ProductosCargados';
import { v4 as uuidv4 } from 'uuid';


export default function CrudProductos() {

  const [datos,setDatos]=useState([]);
  const[itemEdicion,setitemEdicion]=useState({});
  
  //recupera objeto funcion para actualizar el estado de los productos elejidos
  const agregaProducto=(producto)=>{ 
                                    let fecha=new Date();
                                     producto.id=uuidv4();//genera id aleatorio
                                     producto.fecha=  fecha.toLocaleDateString()
                                     setDatos([...datos,producto]);
                                   };
// tomar el elemento editado descate el original y agrega el nuevo repeta el id y la hora de carga
  const editaProducto=(producto)=>{
                                    let datosNuevos= datos.map((el)=> el.id===producto.id ? producto  : el)
                                     setDatos(datosNuevos)
                                  };

//exluye el elemento seleccionado del vector y lo actualiza el estado
  const eliminarProducto=(id)=>{setDatos(datos.filter((producto)=> producto.id !==id))} ; 
   
  //recupero el objeto a editar
  const ProductoAEditar=(productoRow)=>{setitemEdicion(productoRow)} ;
  
  return (
         
    <div>
       
        <Formulario  agregaProducto={agregaProducto} itemEdicion={itemEdicion} editaProducto={editaProducto} />  <br />
        <ProductosCargados datos={datos} eliminarProducto={eliminarProducto} ProductoAEditar={ProductoAEditar} />
         
    </div>  );
}
