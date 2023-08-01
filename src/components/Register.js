import React, { useState } from 'react'
import '../App.css'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
export default function Registration() {
const [id, idChange]=useState("");
const [name, nameChange]=useState("");
const [password, passwordChange]=useState("");
const [email, emailChange]=useState("");
const [phone, phoneChange]=useState("");
const [country, countryChange]=useState("");
const [adress, adressChange]=useState("");

const navigate = useNavigate();
const IsValidate = ()=>{
    let isproceed=true;
    let errormessage='please enter the value in  '
    if(id ===null || id==='') {
        isproceed = false;
        errormessage +='username';
    }
    if(name ===null || name==='') {
        isproceed = false;
        errormessage +='fullname';
    }
    if(password===null || password==='') {
        isproceed = false;
        errormessage +='password';
    }
    if(email===null || email==='') {
        isproceed = false;
        errormessage +='email';
    }

    if(!isproceed){
        toast.warning(errormessage)
    }
        
    
    return isproceed;
}

    const handleSubmit=(e)=>{
       
        e.preventDefault();
        let regobj={id,name,password,email,phone,country,adress};
         if(IsValidate()){

        // 
        fetch("http://localhost:8000/user/",{
            method:"POST",
            headers:{'content-type' : 'application/json'},
            body:JSON.stringify(regobj)
         }).then((res)=>{
            toast.success("registered successfully")
             navigate('/Login')
         }).catch((err)=>{
            toast.error('failed:'+ err.message);
         });
         }
    }
  return (
    <div>
      <div className='offset-lg-3 col-lg-6'>
        <form className='container'onSubmit={handleSubmit}>
            <div className='card'>
                <div className='card-header'>
                    <h1>user Registration</h1>
                </div>
                <div className='card-body'>
                  <div class="row">
                    <div className='col-lg-6'>
                        <div className='form-group'>
                      <label>username<span className='errmsg'>*</span></label>
                    <input value={id} onChange = {e=>idChange(e.target.value)}className='form-control'></input>
                    </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='form-group'>
                      <label>fullname<span className='errmsg'>*</span></label>
                    <input  value={name} onChange = {e=>nameChange(e.target.value)} className='form-control'></input>
                    </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='form-group'>
                      <label>email<span className='errmsg'>*</span></label>
                    <input  value={email} onChange = {e=>emailChange(e.target.value)} className='form-control'></input>
                    </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='form-group'>
                      <label>password<span className='errmsg'>*</span></label>
                    <input value={password} onChange = {e=>passwordChange(e.target.value)}  type = "password" className='form-control'></input>
                    </div>
                    </div>
                    
                    <div className='col-lg-6'>
                        <div className='form-group'>
                      <label>country<span className='errmsg'>*</span></label>
                      <br/>
                    <select  value={country} onChange = {e=>countryChange(e.target.value)} className='form-control'>
                        <option value="india">india</option>
                        <option value="usa">usa</option>
                        <option value="china">china</option>
                    </select>
                    </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='form-group'>
                      <label>phone<span className='errmsg'>*</span></label>
                    <input  value={phone} onChange = {e=>phoneChange(e.target.value)}  className='form-control'></input>
                    </div>
                    </div>
                    
                        
                        <div className='col-lg-12'>
                        <div className='form-group'>
                      <label>Address</label>
                      <br/>
                    <textarea  value={adress} onChange = {e=>adressChange(e.target.value)} className='form-control' place="Enter the address
                    "></textarea>
                    </div>
                    </div>
                  </div>
                </div>
                <div className='card-footer'>
                    <center><button type='submit' className='btn btn-primary'>Register</button></center>
                </div>
            </div>
        </form>
      </div>
    </div>
  )
}