import React, {useEffect, useState}from 'react'
import '../App.css'

function Form() {
    const [formvals,setFormvals]=useState({
firstname:"",
lastname:"",
phoneno:"",
email:"",
    });

    const [errors,setErrors]=useState({})
    const [sub,setSub]=useState(false)
   
    function handleForm(e){
// console.log(e.target.name,e.target.value)
const {name, value}=e.target;
setFormvals({...formvals,[name]:value})
    }


    function validate(e){
        e.preventDefault();
        let error={};
        if(formvals.firstname.length===0){
          error.firstname= <p>Please enter your First Name</p>;
        }
        if(formvals.lastname.length===0){
            error.lastname=<p>Please enter your Last Name</p>;
          }
          if(formvals.phoneno.length===0){
            error.phoneno=<p>Please enter your Phone Number</p>;
          }
          if(formvals.email.length===0){
            error.email= <p>Please enter your Email</p>;
          }
        
          setErrors(error);
          if(Object.keys(error).length===0){
            setSub(true);
          }
         
         
    }
  return (
   <>
   
   <div className='form' >
   {sub && Object.keys(errors).length===0 && <h1>Registration Successful</h1>}
   <input type="text" placeholder='First Name' name='firstname' value={formvals.firstname} onChange={handleForm}/>
   { errors.firstname && <span> {errors.firstname}</span>}
   <input type="text" placeholder='Last Name' name='lastname' value={formvals.lastname} onChange={handleForm}/>
   { errors.lastname && <span> {errors.lastname}</span>}
   <input type="text" placeholder='Phone Number' name='phoneno' value={formvals.phoneno} onChange={handleForm}/>
   { errors.phoneno && <span> {errors.phoneno}</span>}
   <input type="text"  placeholder='Email' name='email'value={formvals.email} onChange={handleForm}/>
   { errors.email && <span> {errors.email}</span>}
   <button onClick={validate} >Submit</button>
   </div>
   </>
  )
}

export default Form;