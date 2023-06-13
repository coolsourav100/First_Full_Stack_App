import React, { useEffect, useState } from 'react';
import axios from 'axios';

const User = () => {
  const  [userData , setUserData] = useState({name:'',email:'',age:''})
  const [toggle , setToggle] = useState(false)
  const [resData , setResData] = useState();
  const [ editable , setEditable] = useState(false)
  const [editId , setEditId] = useState(0)

  useEffect(()=>{
    axios.get('http://localhost:4000/').then((res)=>{
      setResData(res.data)
      console.log(res,'userData')}).catch(err=>console.log(err)) 
    },[toggle])
    
    console.log(toggle)
    // Input Field Change
    const changeHandler=(e)=>{
      setUserData({...userData,[e.target.name]:e.target.value})
    }

    // Submit Data
 const submitHandler=(e)=>{
  e.preventDefault();
  if(!editable){
  axios.post('http://localhost:4000/addUser',{...userData}).
  then(res=>{
    console.log(res)
  }).
  catch(err=>console.log(err))
}else{
  axios.put(`http://localhost:4000/userEdit/${editId}`,{...userData}).
  then((res)=>{
    console.log(res)}).
    catch(err=>console.log(err))
  }
  setUserData({
    name:'',
    email:'',
    age:''
  })
  setTimeout(()=> setToggle(!toggle),10)
 }
//  Edit Data
 const editHandler=(data)=>{
  setEditable(true)
  setUserData({
    name:data.name,
    email:data.email,
    age:data.age
  })
  setEditId(data.id)
 }

//  Delete Data
 const deleteHandler=(id)=>{
  axios.delete(`http://localhost:4000/userDelete/${id}`).then(res=>console.log(res)).catch(err=>console.log(err))
  setToggle(!toggle)
 }
  return (
    <div>
        <div className='container '>
        <form onSubmit={submitHandler}>
            <div className='row '>
  <div className="col-3">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" className="form-control" name="name" value={userData.name} placeholder="Enter Name" required onChange={changeHandler}/>
  </div>
  <div className="col-3">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" name="email" value={userData.email} placeholder="Enter email" required onChange={changeHandler}/>
  </div>
  <div className="col-3">
    <label for="exampleInputPassword1">Age</label>
    <input type="Number" className="form-control" name="age" placeholder="Age" value={userData.age} required onChange={changeHandler}/>
  </div>
  <div className='col-3'>
  <button type="submit" className="btn btn-primary mt-4">Submit</button>
  </div>
  </div>
</form>
        </div>
        {/* List Of User */}
        <di className='container'>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">E-mail</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {resData?.map((item)=>{

    return (
    <tr>
      <th scope="row">{item.id}</th>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.age}</td>
      <td><button className='btn btn-success' onClick={()=>editHandler(item)}>Edit</button><button className='btn btn-danger' onClick={()=>deleteHandler(item.id)}>Delete</button></td>
    </tr>
    )})}
  </tbody>
</table>
        </di>
    </div>
  )
}

export default User