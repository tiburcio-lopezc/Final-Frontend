import './App.css';
import { useState, useEffect, useSyncExternalStore } from "react"
import 'bulma/css/bulma.min.css';
import CrudProductos from './component/CrudProductos';
import FooterComponent from './component/FooterComponent';
import HeaderComponent from './component/HeaderComponent';
import CrudApi from './component/CrudApi';

function App() {
  
  return (
  
  
  <div className='container  max-width'>
        
    <div className="App">
     
          <HeaderComponent/>

      <header className="App-header" >
             
         <div >
   
             <CrudApi/>
         </div>
      </header>
    <footer>
      <FooterComponent/>
    </footer>

      </div>
    </div>  );
}


export default App;
