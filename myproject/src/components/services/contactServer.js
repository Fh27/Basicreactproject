import axios from 'axios';
export {useState} from 'react';
export class ContactService{
    


    static serverURL=`http://localhost:9000`;
  
    static getAllContacts(){
        let dataURL=`${this.serverURL}/contacts`;
    return axios.get(dataURL);
    

    }
    

static  async deleteContact (contactId){
    let dataURL= `${this.serverURL}/contacts/${contactId}`;
    return axios.delete(dataURL);
}

static getcontact(contactId){
    let dataURL=`${this.serverURL}/contacts/${contactId}`;
    return axios.get(dataURL);
}

static createcontact(contact){
let dataURL=`${this.serverURL}/contacts`;
return axios.post(dataURL,contact);
}

static updatecontact=(contact,contactId)=>{
let dataURL=`${this.serverURL}/contacts/${contactId}`;
return axios.put(dataURL,contact)
}

}
