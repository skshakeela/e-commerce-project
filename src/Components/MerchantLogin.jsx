import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/MerchantLogin.css"
const MerchantLogin=()=>{
let[email,setEmail]=useState("")
let[password,setPassword]=useState("")
let navigate=useNavigate()
function verifyMerchant(e){
  e.preventDefault();
  axios.post(`http://localhost:8080/merchants/verify-by-email?email=${email}&password=${password}`)
  .then(()=>{
  navigate('/merchanthomepage')
  })
  .catch((err)=>{console.log(err);
  alert("Invalid credentials")
  })
//   if(email=="abc" && password=="123"){
// alert("login successful")
//   }
//   else{
//     alert("invalid credentials")
//   }
}
    return(
        <div>
<h1>merchant login page</h1>

<Form className="merchantlogin"> 
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"  value={email}  onChange={(e)=>{setEmail(e.target.value)}}  placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" />
      </Form.Group>
      <Form.Group>
        <button className='btn btn-success mx-5' onClick={verifyMerchant}>Sign in</button>
        <button className='btn btn-danger mx-5'><Link to="/merchantsignup">Sign up </Link></button>
      </Form.Group>
    </Form>
        </div>
    )
}
export default MerchantLogin