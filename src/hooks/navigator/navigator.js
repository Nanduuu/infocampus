import React,{useState, useEffect} from 'react';
import {Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Nav} from 'react-bootstrap';



const Navigator = () => {
    const [active, setActive] = useState(['a-active','','','','','']);

        var path = useLocation();
        
        const HighlightLocation = (path) =>{ 
               
                var temp = active;
                switch(path){
                      case '/' : temp = ['a-active','a','a','a','a','a']; break;
                      case '/contact' : temp = ['a','a-active','a','a','a','a']; break;
                      case '/services' : temp = ['a','a','a-active','a','a']; break;
                      case '/products' : temp = ['a','a','a','a-active','a','a']; break;
                      case '/clients' : temp = ['a','a','a','a','a-active','a']; break;
                     
                }
                setActive(temp);
               
        }
        useEffect( () =>{
                
                
                              HighlightLocation(path.pathname);
                        
                
               
        },[])
    return(
            <div className="container-fluid shadow my-bg-color-1" Style={"position:sticky; top:0px;z-index:1;opacity:1;"}>
                    <div className='row'>
                        <div className='col-md-12 p-4 '>

                            <div className='text-center '>
                                    <Link className={active[0]} onClick={() => HighlightLocation('/')}  to="/">  Home</Link>
                                    <Link className={active[1]} onClick={() => HighlightLocation('/contact')}  to="/contact">  Contact Us </Link>
                                    <Link className={active[2]} onClick={() => HighlightLocation('/services')}  to="/services">  Our Services </Link>
                                    <Link className={active[3]} onClick={() => HighlightLocation('/products')}  to="/products">  Our Products </Link>
                                    <Link className={active[4]} onClick={() => HighlightLocation('/clients')}  to="/clients">  Our Clients </Link>

                            </div>
                               
                                
                        </div>
                    </div>
            
            </div>
        )
    }

export default Navigator;