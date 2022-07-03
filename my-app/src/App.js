import './App.css';
import { useState, useEffect, useSyncExternalStore } from "react"
import Formulario from './component/Formulario';
import ProductosCargados from './component/ProductosCargados';

import { v4 as uuidv4 } from 'uuid';
import 'bulma/css/bulma.min.css';


export default function App() {

  const [datos,setDatos]=useState([]);
  const[itemEdicion,setitemEdicion]=useState({});
  
  //recupera objeto funcion para actualizar el estado de los productos elejidos
  const agregaProducto=(producto)=>{ 
                                     producto.id=uuidv4();//genera id aleatorio
                                     producto.fecha= Date.now();
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
         
    <div className="App">
      <header className="App-header">
        
         
            <Formulario agregaProducto={agregaProducto} itemEdicion={itemEdicion} editaProducto={editaProducto} /> <br></br>
        
            <ProductosCargados datos={datos} eliminarProducto={eliminarProducto} ProductoAEditar={ProductoAEditar} />
          
       
        
       </header>
    </div>  );
}