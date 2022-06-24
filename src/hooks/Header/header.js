import React from 'react';



const Header = () => {
    return(
            <div className="container ">
                    <div className='row p-3 my-header-text'>
                        <div className='col-md-6'>
                                
                                     Contact Us -  <i className="fa fa-phone" title="Click to dail">  <a href="tel:8884166608">8884166608</a>   </i>
                        </div>
                        <div className='col-md-6'>
                                <div className='my-align-right'>
                                    <i className='fa fa-envelope'><a href="mailto:contact@infocampus.co.in"> - contact@infocampus.co.in</a></i> 
                                </div>
                                
                        </div>
                    </div>
            
            </div>
        )
    }

export default Header;