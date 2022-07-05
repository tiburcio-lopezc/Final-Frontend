import React from "react"
import { useState, useEffect} from "react"
import Formulario from './Formulario';
import ProductosCargados from './ProductosCargados';
import { v4 as uuidv4 } from 'uuid';
import {helpHttp} from "../Helpers/helpHttp"


export default function CrudApi(){
  const api=helpHttp();
  const url="http://localhost:5000/Productos";

    const [datos,setDatos]=useState([]);
    const[itemEdicion,setitemEdicion]=useState({});
   
   
    useEffect(()=>{helpHttp().get(url).then(res=>{ 
        if(!res.err){
          setDatos(res)
        }
        else
        {
          setDatos([])
        }
      })}
        
        ,[]);

    //recupera objeto funcion para actualizar el estado de los productos elejidos
    const agregaProducto=(producto)=>{ 
                                      let fecha=new Date();
                                       producto.id=uuidv4();//genera id aleatorio
                                       producto.fecha=  fecha.toLocaleDateString()
                                       api.post(url,{body:producto, headers:{"content-type":"application/json"}}).then(res=>{
                                        if(!res.err){
                                          setDatos([...datos,res])
                                        }
                                        else
                                        {
                                          setDatos([])
                                        }
                                       })
                                       //setDatos([...datos,producto]);
                                     };
  // tomar el elemento editado descate el original y agrega el nuevo repeta el id y la hora de carga
    const editaProducto=(producto)=>{
                                      let options={body:producto, headers:{"content-type":"application/json"}};
                                      let uri=`${url}/${producto.id}`;
                                      api.put(uri,options).then(res=>{
                                        if(!res.err){
                                          let datosNuevos= datos.map((el)=> el.id===producto.id ? producto : el);
                                          setDatos(datosNuevos);
                                        } 
                                      })
                                    };
  
  //exluye el elemento seleccionado del vector y lo actualiza el estado
    const eliminarProducto=(id)=>{
                                  let uri=`${url}/${id}`;
                                  let respuesta=window.confirm("Esta seguro que desea eliminar el registro")
                                  if (respuesta){
                                    let options={headers:{"content-type":"application/json"}};
                                    api.del(uri,options).then(res=>{
                                      if(!res.err){setDatos(datos.filter((producto)=> producto.id !==id))}
                                    })
                                  }

      
                                  } ; 
     
    //recupero el objeto a editar
    const ProductoAEditar=(productoRow)=>{setitemEdicion(productoRow)} ;
    
    return (
           
      <div className="container is-fluid" >
         
          <Formulario  agregaProducto={agregaProducto} itemEdicion={itemEdicion} editaProducto={editaProducto} /> 
          <ProductosCargados datos={datos} eliminarProducto={eliminarProducto} ProductoAEditar={ProductoAEditar} />
            
      </div>  );
 
}


 
