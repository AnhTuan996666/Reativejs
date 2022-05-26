import './App.css';
import Modal from './components/Modal';
import { useState } from "react";

function App() {
  const [openModel,setModal,isActive] = useState(false);
  let conName = ()=>{
    setModal(prev =>!prev)
  }; 
  return (
    <div className="App">
       <h1>Hey Click button show modal </h1>
       <button className="btn-show" onClick={()=>conName()}>Open</button>
      {openModel && <Modal closeModal={setModal} active={isActive} />} 
    </div>
  );
}

export default App;
