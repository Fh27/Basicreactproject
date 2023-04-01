
import React from 'react';
import './App.css';
import { Routes, Route ,Navigate} from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import Contactlist from "./components/contacts/contactlist/Contactlist";
import Addcontact from "./components/contacts/addcontact/Addcontact";
import Editcontact from "./components/contacts/editcontact/Editcontact";
import Viewcontact from "./components/contacts/viewcontact/Viewcontact";

let App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path='/' element={<Navigate to ={'/Contacts/list'} />} />
        <Route path='/contacts/list' element={<Contactlist />} />
        <Route path='/contacts/add' element={<Addcontact/>} />

        <Route path='/contacts/view/:contactId' element={<Viewcontact />} />
        <Route path='/contacts/edit/:contactId' element={<Editcontact />} />

      </Routes>

    </React.Fragment>
  );
}

export default App;
