import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faJava } from '@fortawesome/free-solid-svg-icons'





const Home = () => {
    return(
            <div className="container-fluid">
                    <div className='row my-header-text' Style={"opacity:1;"}>
                        <div className='col-lg-12 text-center'>
                                
                                
                                <h3 className='p-2 bg-warning rounded'>Welcome to Info Campus</h3> 
                                <p>Best Training institute in Bangalore, Marathahalli</p>

                                <div>
                                    <div class="fa-2x">
                                        
                                        <div> Java </div>
                                        <div> Javascript </div>
                                        <div> HTML5 </div>
                                        <div> CSS3 </div>
                                        <div> React Js </div>
                                        <div> Angular Js </div>
                                        <div> Live Projects </div>
                                                 
                                        
                                    
                                    </div>  
                                </div>
                        </div>
                    </div>
            
            </div>
        )
    }

export default Home;