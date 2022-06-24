import React from 'react';
import {Form,Button} from "react-bootstrap";



const Contacts = () => {
    return(
            <div className="container-fluid">
                    <div className='row my-header-text' Style={"opacity:1"}>
                    <h3 className='p-2 bg-warning rounded'>Contacts Us</h3>
                        <div className='col-lg-12 '>
                                 
                                <Form>
                                    <div className='row'>

                                            <div className='col-6'>
                                                    <Form.Group className="mb-3" controlId="">
                                                    <Form.Label>Name</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter name" />
                                                
                                                </Form.Group>   
                                            </div>
                                            <div className='col-6'>
                                                    <Form.Group className="mb-3" controlId="">
                                                            <Form.Label>Email address</Form.Label>
                                                            <Form.Control type="email" placeholder="Enter email" />
                                                    </Form.Group>  
                                            </div>
                                    </div>
                                    <div className='row'>
                                            <div className='col-6'>
                                                    <Form.Group className="mb-3" controlId="">
                                                    <Form.Label>Phone Number</Form.Label>
                                                    <Form.Control type="number" placeholder="Enter number" />
                                                   
                                                    </Form.Group>
                                            </div>
                                            <div className='col-6'>
                                             
                                                <Form.Group className="mb-3" controlId="">
                                                    <Form.Label>Pincode</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter pincode" />
                                                    
                                                </Form.Group>  
                                            </div>
                                    </div>
                                    <Form.Group className="mb-3" controlId="">
                                            <Form.Label>Your Meaasge</Form.Label>
                                            <Form.Control  as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }}  />

                                    </Form.Group>

                                 </Form>
                                 <Button className="btn btn-dark"> Send your message </Button>
                                
                        </div>
                   
                </div>
            </div>
        )
    }

export default Contacts;