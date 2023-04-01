import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ContactService } from "../../services/contactServer";
import axios from 'axios';

let Contactlist = () => {
    const[data, setData]=useState("")
    let [state, setState] = useState({
        loading : false,
        contacts: [],
          
           errorMessage: ''
    });
    // const getData=async ()=> {let response=await fetch("http://localhost:9000/contacts/1"); let data=await response.json();
    // console.log(data)}
    useEffect(()=> {console.log('im running') ;fetch("http://localhost:9000/contacts").then(response=>response.json()).then(data=>setState({...state, contacts:data}))}, []);

    // useEffect(async () => {
    //     try {
    //         setState({ ...state, loading: true });
    //         var response = await ContactService.getAllContacts();
    //         setState({
    //             ...state,
    //             contacts: response.data
    //         });
    //     }

    //     catch (error) {
    //         setState({
    //             ...state,
    //             loading: false,
    //             errorMessage: error.messege
    //         });
    //     }
    // },[]);
    // let { loading, contacts, errorMessage } = state;
   
    // let clickDelete = async (contactId) => {
    //     try {
    //     let response = await ContactService.deleteContact(contactId);
    //     if(response){
    //     setState( {...state,loading:true});
    //     let response = await ContactService.getAllContacts();
    //     // console.log(response)
    //     setState({...state,
    //         loading:false,
    //     contacts: response.data
    //     });
    //   }
    // }
    //     catch (error) {
    //     setState( {
    //     ...state,
    //     errorMessage: error.message
    //     });
    //     }
    
    
let {loading,contacts,errorMessage}=state;

    return (
        <React.Fragment>
         
            <section className="contact-search p-3">
                <div className="container">
                    <div className="grid">
                        <div className="row">
                            <div className="coloum">
                            </div>
                            <p className="h3">Contact Manager
                                <Link to={'/contacts/add'} className="btn btn-primary ms-2">New
                                    <i className="fa fa-plus-circle m-2" />
                                </Link>

                            </p>
                            <p className="fst-itslic">THIS IS A CONTACT MANAGER HOSTED BY <b>MD FURQAN HASAN</b>  .</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <form className="row">
                                <div className="col">
                                    <div className="mb-2 m-1">
                                        <input type="text" className="for-control" placeholder="search names" />

                                    </div>
                                </div>
                                <div className="col" >
                                    <div className="mb-2">
                                        <input type="submit" className="btn btn-outline-dark" value="search" />
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </section>
            <section className="contact-list">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            
                            <div className="card">
                                <div className="card-body">
                                    <div className="row align-items-center  d-flex justify-content-around ">
                                        <div className="col-md-4">
                                            <img src="https://pluspng.com/img-png/png-user-icon-icons-logos-emojis-users-2400.png" alt="" className="contact-img" />
                                        </div>



                                        <div className="col-md-7">
                                            {/* {console.log(state.contacts)} */}
                                        {state.contacts.map((data, i)=>(  
                                        <ul  key={i}>
                                            <li className="list-group-item list-group-item-action">{data.name}</li>
                                        
                                            	 <li className="list-group-item list-group-item-action">{data.Email}</li> 
                                                <li className="list-group-item list-group-item-action">{data.mobile}</li>
                                              </ul>))}
                                   
                                        </div>
                                        <div className="col-md-1 d-flex flex-column">
                                            <Link to={`/contacts/view/:contactId`} className="btn btn-warning my-1 p-1">
                                                <i className="fa fa-eye" />

                                            </Link>
                                            <Link to={'/contacts/edit/:contactId'} className="btn btn-primary my-1 p-1">
                                                <i className="fa fa-pen" />

                                            </Link>
                                            <button className="btn btn-warning my-1 p-1" >
                                                <i className="fa fa-trash" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>

            </section>
        </React.Fragment>
    )
                                        
                                        }

export default Contactlist;
