
import './App.css';
import Alert from './components/Alert';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';



function App() {
  const [mode, setMode]=useState('light');//Whethere Dark mode is enable or not
  const [alert, setAlert]=useState(null);

  const showAlert=(message, type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null);
        
      }, 3000);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title="Kshitij-Dark Mode";
      setInterval(()=>{
        document.title='Kshitij is Amazing Mode';
      }, 2000);
      setInterval(()=>{
        document.title='Install Kshitij Now';
      }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title="Kshitij-Light Mode";
    }
  }
  return (
    <>  
    {/*<Navbar title="TextUtils" aboutText="About TextUtils"/>*/}
    <Navbar title="Kshitij" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>  
    {/*<About/>*/}
    </div>
    
    </>

  );
}

export default App;
