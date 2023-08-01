import React, { useRef, useState } from 'react';
import Data from './data.json';
 import '../App.css';
function Table(){
    const[data, setData]=useState(Data)
    const[editState,setEditState]=useState(-1)

    
    return(
        <div className='table'>
          <div className='table-header'>
            <AddMember setData={setData}/>
            </div>
            <form onSubmit={handleUpdate}>
            <table className='bottom'>
                <thead>
                    <th>Name</th>
                    <th>email</th>
                    <th>phone</th>
                    <th>branch</th>
                    <th>Actions</th>
                </thead>
         {
           data.map((current)=>(
            editState===current.id ? <EditMember current={current} data ={data} setData={setData}/> :
            <tr>
                <td>{current.name}</td>
                <td>{current.email}</td>
                <td>{current.phone}</td>
                <td>{current.branch}</td>
                <td>
                    <button type = 'button'className ='edit' onClick={() =>handleEdit(current.id)}>edit</button>
                    <button type='button' className='delete' onClick={()=>handleDelete(current.id)}>Delete</button>
                </td>
            </tr>
           )
           )
         }
         </table>
         
         </form>
        </div>
         
    )
    function handleUpdate(event){
    
        event.preventDefault()
        const name = event.target.elements.name.value
        const email = event.target.elements.email.value
        const phone = event.target.elements.phone.value
        const branch = event.target.elements.branch.value
        const updatedData = data.map(d=>d.id===editState ? {...d, name:name, email:email,phone:phone, branch:branch}: d)
        setEditState(-1)
        setData(updatedData)
            
        
    }
    function handleEdit(id){
        setEditState(id)
    }
    function handleDelete(id){
        const updatedData = data.filter((d)=>id !==d.id)
       setData(updatedData)
    }
}
function EditMember({current, data ,setData}){
    function handleName(event){
        const name = event.target.value;
        const updatedData = data.map((d)=>d.id === current.id ?{...d, name:name} :d)
        setData(updatedData)
    }
    function handleEmail(event){
        const email = event.target.value;
        const updatedData = data.map((d)=>d.id === current.id ?{...d, email:email} :d)
        setData(updatedData)
    }
    function handlePhone(event){
        const phone = event.target.value;
        const updatedData = data.map((d)=>d.id === current.id ?{...d, phone:phone} :d)
        setData(updatedData)
    }
    function handlebranch(event){
        const branch = event.target.value;
        const updatedData = data.map((d)=>d.id === current.id ?{...d, branch:branch} :d)
        setData(updatedData)
    }
    return(
        <tr>
          <td><input type='text' onChange={handleName} value={current.name} name='name' placeholder='enter name'/></td>
            <td><input type='text' onChange={handleEmail} value={current.email} name='email' placeholder='enter email'/></td>
            <td><input type='text' onChange={handlePhone}  value={current.phone} name='phone' placeholder='enter phone'/></td>
            <td><input type='text' onChange={handlebranch}  value={current.branch} name='branch' placeholder='enter branch'/></td>
            <td><button type='submit'>update</button> </td>  
        </tr>
    )
}
function AddMember({setData}){

    const nameRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()
    const branchRef = useRef()

    function handleValues(event){
        event.preventDefault();
        const name = event.target.elements.name.value;
        const email = event.target.elements.email.value;
        const phone = event.target.elements.phone.value;
        const branch = event.target.elements.branch.value;
        const newMember = {
            id:4,
            name,
            email,
            phone,
            branch,
        }
        setData(prevData => prevData.concat(newMember))
        nameRef.current.value = ""
        emailRef.current.value = ""
        phoneRef.current.value = ""
        branchRef.current.value = ""
    }
    return(
        <form className='addform' onSubmit={handleValues}>
            <input type='text' name='name' placeholder='enter name'ref={nameRef}/>
            <input type='text' name='email' placeholder='enter email'ref={emailRef}/>
            <input type='text' name='phone' placeholder='enter phone'ref={phoneRef}/>
            <input type='text' name='branch' placeholder='enter branch'ref={branchRef}/>
            <button className='add'>Add</button>
        </form>
    )
}
export default Table;
  