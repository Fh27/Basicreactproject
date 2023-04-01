import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { ContactService } from "../../services/contactServer";
let Editcontact = () => {

    let navigate = useNavigate();
    let { contactId } = useParams;
    console.log(contactId)
    let [state, setState] = useState({
        loading: false,
        contact: {
            name: '',
            Email: '',
            mobile: ''
        }
    });
    const getData=async()=>{ try {
        setState({ ...state, loading: true });

        let response =  await ContactService.getcontact(contactId);
        setState({
            ...state,
            loading: false,
            contact: response.data
        });
    }
    catch (error) {
        setState({
            ...state,
            loading: false,
            errorMessage: error.message
        })
    } }
    useEffect(() => {
        getData()
    }, [contactId]);

    let updateInput = (event) => {
        setState({
            ...state,
            contact: {
                ...state.contact,
                [event.target.name]: event.target.value
            }
        });
    };
    let submitForm = async (event) => {
        event.preventDefault();
        try {
            let response = await ContactService.updatecontact(state.contact, contactId);
            if (response) {
                navigate('/contacts/list', { replace: true });
            }
        }
        catch (error) {
            console.log(error.message)
            setState({ ...state, errorMessage: error.message });
            navigate(`/contacts/edit /${contactId}`, { replace: false });
        }
    }
    let { loading, errorMessage, contact } = state;

    return (
        <React.Fragment>
            <pre>
                {JSON.stringify(contact)}
            </pre>
            <section className="add-contact">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-success fw-bold">Edit contact</p>
                            <p className="fst-italic">U guys can edit your name.</p>
                        </div>
                    </div>
                    <div className="row  align-item-center">
                        <div className="col-md-4">
                            <form onSubmit={submitForm}>
                                <div className="mb-2">
                                    <input
                                        required
                                        name="name"
                                        value={contact.name}
                                        onChange={updateInput}
                                         type="text" className="form-control" placeholder="name" />
                                </div>


                                <div className="mb-2">
                                    <input 
                                    required
                                        name="mobile"
                                        value={contact.mobile}
                                        onChange={updateInput}
                                        type="text" className="form-control" placeholder="mobile" />
                                </div>

                                <div className="mb-2">
                                    <input
                                     required
                                        name="Email"
                                        value={contact.Email}
                                        onChange={updateInput}
                                        type="text" className="form-control" placeholder="Email" />
                                </div>
                                <div className="mb-2">
                                    <input
                                        type="submit" className="btn btn-primary" value="update" />
                                    <Link to='/contacts/list' className="btn btn-dark ms-2" >Cancel</Link>
                                </div>
                            </form>

                        </div>
                        <div className="col-md-6">

                            <img src="https://mlkm0zaoge54.i.optimole.com/g6IaF6Q.-27x~2cf53/w:250/h:250/q:90/https://digitalcanion.com/wp-content/uploads/2020/06/Brian-Mariani.jpg" className="contact-img"></img>

                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};
export default Editcontact;