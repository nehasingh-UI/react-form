import  React from 'react';
import ContactForm from '../components/ContactForm';
import firebaseDb from '../firebase'

const Contact = () => {
    const addOrEdit = obj => {
        firebaseDb.child('contacts').push(
            obj,
            err => {
                if(err)
                console.log(err)
            }
        )

    }
    return (
        <div className="flex-center"> 
        <ContactForm addOrEdit={addOrEdit}/>
            <div>List of Contacts</div>
        </div>
    )
}

export default Contact;