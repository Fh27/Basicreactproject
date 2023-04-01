import React ,{useState,useEffect} from "react";
import { Link ,useNavigate} from "react-router-dom";
import { ContactService } from "../../services/contactServer";
let Addcontact = () => {
    let navigate=useNavigate();
    let [state, setState] = useState({
        loading : false,
        contact: {
            name:'',
            mobile:'',
            Email:'',
        },
        errorMessage: ''
    });
    let updateInput=(event)=>{
        setState({
            ...state,
            contact:{
                ...state.contact,
                [event.target.name]:event.target.value
            }
        });
    }
    let submitForm=async(event)=>{
        event.preventDefault();
        try{
            let response=await ContactService.createcontact(state.contact);
            if(response){
                navigate('/contacts/list',{replace:true});
            }
        }
        catch(error){
setState({...state,errorMessage:error.message});
navigate('/contacts/add', {replace:false});
        }
    }
    let {loading,errorMessage,contact}=state;
    return (
        
        <React.Fragment>
            
            <section className="add-contact">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-success fw-bold">Create contact</p>
                            <p className="fst-italic">YOU CAN ADD YOUR FAV CONTACT NUMBER . EVEN IT CAN BE CRUSH'S NUMBER.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <form onSubmit={submitForm}>
                                <div className="mb-2">
                                    <input 
                                    name='name'
                                    value={contact.name}
                                    onChange={updateInput}type="text" className="form-control" placeholder="name" />
                                </div>


                                <div className="mb-2">
                                    <input 
                                    name='mobile'
                                    value={contact.mobile}
                                    onChange={updateInput}
                                    type="text" className="form-control" placeholder="mobile" />
                                </div>

                                <div className="mb-2">
                                    <input 
                                    name='Email'
                                    value={contact.Email}
                                    onChange={updateInput} type="text" className="form-control" placeholder="Email" />
                                </div>
                                <div className="mb-2">
                                    <input type="submit" className="btn btn-success" value="create" />
                                    <Link to={'/contacts/list'} className="btn btn-dark ms-2" >Cancel</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};
export default Addcontact;