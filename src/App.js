import React from 'react'; 
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import  Summary from './pages/Summary'
import  ImageGen  from './pages/ImageGen'
import  Home  from './pages/Home'


// class App extends React.Component {
function App()  {
 
  
    return (

      <div className="App">

        <BrowserRouter>
          <Routes>
            <Route index element={< Home />}/>
            <Route path="/summary" element={< Summary />} />
            <Route path="/imagegen" element={<ImageGen />} />
          
          </Routes>
        </BrowserRouter>

      </div>
    );
  }

export default App

