import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {Link, useParams} from "react-router-dom";
import { ContactService } from "../../services/contactServer";

let Viewcontact = () => {
//     let {contactId}=useParams();
// let [state,setState]=useState({
//     loading:false,
//     contact:{},
//     errorMessage:''
// });
// useEffect( async()=>{
// try{
//     setState({...state, loading:true});
// let response=await ContactService.getContact(contactId);
// setState({
//     ...state,
//     loading:false,
//     contact:response.data
// })
// }

//  catch{
// setState({
//     ...state,
//     loading:false,
//     errorMessage:error.message
// })
//  }
// },[contactId]);
// let {loading,contact,errorMessage}=state;
    return (
        <React.Fragment>
            {/* <h2>{contactId}</h2> */}
            <section className="view-contact-intro p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">

                            <p className="h3 text-warning fw-bold">view contact</p>
                            <p className="fst-Italic">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi nam nobis obcaecati minima, esse molestiae natus expedita cupiditate molestias neque, quam delectus assumenda minus incidunt. Explicabo quod facilis nulla illo.</p>
                        </div>
                    </div>
                </div>

            </section>
            <section className="View-contact mt-3">
                <div className="container">
                <div className="row align-item-center">
                    <div className="col-md-4">
                    <img src="https://mlkm0zaoge54.i.optimole.com/g6IaF6Q.-27x~2cf53/w:250/h:250/q:90/https://digitalcanion.com/wp-content/uploads/2020/06/Brian-Mariani.jpg" className="contact-img"></img>
                    </div>
                    <div className="col-md-8">
                    <ul>
    
    <li className="list-group-item list-group-item-action">
    Name:<span className="fw-bold">Furqan </span>
    </li>    
    <li className="list-group-item list-group-item-action">
        Mobile:<span className="fw-bold">96564564xxx</span>
    </li>
    <li className="list-group-item list-group-item-action">
        Email:<span className="fw-bold">Furqan@mjclg.ac.in</span>
    </li>


</ul>
                    </div>
                </div>
   <div className="row">
    <div className="col">
      <Link to= {'/contacts/list'}className="btn btn-warning">Back</Link>
    </div>
   </div>
</div>
                

            </section>
        </React.Fragment>
    )
};
export default Viewcontact;