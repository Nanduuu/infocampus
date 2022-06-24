import logo from './logo.svg';
import './App.css';
import Header from './hooks/Header/header';
import Navigator from './hooks/navigator/navigator';
import Footer from './hooks/footer/footer';
import Home from './hooks/home/home';
import Contact from './hooks/contact/contact';
import Services from './hooks/services/services';
import Producuts from './hooks/products/products';
import Clients from './hooks/clients/clients';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
        <BrowserRouter>
            <Header/>
            <Navigator/>
            <div className="container-fluid mt-3">
                  <div className="row" Style={"position:relative;"}>
                          <div className="col-md-3 p-5" Style={"position:sticky;top:80px;height:100%;"}>

                              <h3>Updates</h3>
                              <hr  size="5" />
                              <p>This is line one</p>
                              <p>This is line two</p>
                              <p>This is line three</p>
                              <p>This is line four</p>
                              <p>This is line five</p>
                              
                                 
                                
                                
                          </div>
                          <div className="col-md-9 p-5">
                              <Routes>
                                  <Route path='/' element={<Home/>}/>
                                  <Route path='/contact' element={<Contact/>}/>
                                  <Route path='/services' element={<Services/>}/>
                                  <Route path='/products' element={<Producuts/>}/>
                                  <Route path='/clients' element={<Clients/>}/>
                              
                              </Routes>

                          </div>
                  </div>
                  
            </div>
            
            <Footer/>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
