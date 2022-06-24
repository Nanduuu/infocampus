import React from 'react';
import {Table} from 'react-bootstrap';



const Clients = () => {
    return(
            <div className="container-fluid">
                    <div className='row p-1 my-header-text' Style={"opacity:1"}>
                        <div className='col-lg-12' >
                            <h3 className='p-2 bg-warning rounded'>Our Clients</h3>
                            <Table striped bordered hover variant="dark">
                                <thead>
                                    <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>City</th>
                                    <th>Phone no</th>
                                    <th>No. Of Emp</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>1</td>
                                    <td>Info Campus</td>
                                    <td>Marathahalli</td>
                                    <td>9945215941</td>
                                    <td>50</td>
                                    </tr>
                                    <tr>
                                    <td>2</td>
                                    <td>Info Campus</td>
                                    <td>Yalahanka</td>
                                    <td>9945215941</td>
                                    <td>50</td>
                                    </tr>
                                    <tr>
                                    <td>3</td>
                                    <td>Info Campus</td>
                                    <td>KR Puram</td>
                                    <td>9945215941</td>
                                    <td>50</td>

                                    </tr>
                                    <tr>
                                    <td>4</td>
                                    <td>Info Campus</td>
                                    <td>Banashankri</td>
                                    <td>9945215941</td>
                                    <td>50</td>

                                    </tr>
                                    <tr>
                                    <td>5</td>
                                    <td>Info Campus</td>
                                    <td>RR Nagar</td>
                                    <td>9945215941</td>
                                    <td>50</td>

                                    </tr>
                                </tbody>
                                </Table> 
                                
                        </div>
                    </div>
            
            </div>
        )
    }

export default Clients;