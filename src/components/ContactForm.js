import React, { useState, useEffect } from 'react';

const ContactForm = (props) => {
    const intialFieldValues = {
        fullName: '',
        mobile: '',
        email: '',
        address: ''
    }
    const [values, setValues] = useState(intialFieldValues)
    const handleInputChange = e => {
        var {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }
    const handleFormSubmit = e => {
        e.prventDefault();
        props.addOrEdit(values)
    }
    return (
        <form autoCapitalize='off' onSubmit={handleFormSubmit}>
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <div className='input-group-text'>
                        <i className='fas fa-user'></i>
                    </div>
                </div>
                <input className='form-control' placeholder='Full Name' name='fullName' value={values.fullName} onChange={handleInputChange} />
            </div>
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <div className='input-group-text'>
                        <i className='fas fa-user'></i>
                    </div>
                </div>
                <input className='form-control' placeholder='Mobile' name='mobile' value={values.mobile} onChange={handleInputChange} />
            </div>
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <div className='input-group-text'>
                        <i className='fas fa-user'></i>
                    </div>
                </div>
                <input className='form-control' placeholder='Email' name='email' value={values.email} onChange={handleInputChange} />
            </div>
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <div className='input-group-text'>
                        <i className='fas fa-user'></i>
                    </div>
                </div>
                <textarea className='form-control' placeholder='Address' name='address' value={values.address} onChange={handleInputChange}></textarea>
            </div>
            <div className='form-group'>
                <input type='submit' value='Save' className='btn btn-primary btn-block'/>
            </div>
        </form>
    );
}
export default ContactForm;