//
import React, { useEffect } from "react";
import { useState } from "react";
import Child from "./Child";
import PromiseEx from "./PromiseEx";


function Parent(props) {
  const [email, setEmail] = useState("");
  const[emailerror, setEmailError] = useState(false);
  
  //setInterval   (() => {emailerror?setEmailError(false):setEmailError(true)} ,1000);
  
//useEffect(() => {console.log(emailerror)} , [emailerror]);

  function handleUpdate(en) {
    //setName(en);
  }
  function handleEmailUpdate(en) {
    setEmail(en.target.value);
    console.log(en.target.value);
    console.log(this);
  }
  function checkEmail() {
    const emailPattern = /^[a-zA-Z0-9.-]+@[a-zA-Z]+.[a-zA-Z]$/;
    setEmailError(emailPattern.test(email) ? '' : 'Invalid email address');
  }

  return (
<div>
  <div style={{ display: 'flex', flexDirection: 'column', margin: '20px' }}>
    <p style={{background:'red'}}>flexxy</p>
    <label style={{ marginBottom: '10px' }}>Email</label>
    {emailerror && <div style={{color:'red'}}>This is a Invalid Email</div>}
    <input
      type="email"
      onChange={handleEmailUpdate}
      style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', marginBottom: '10px' }}
    />
    {/* <Child update={handleUpdate}/> */}
    <button
     // onClick={()=>checkEmail()}
     onClick={checkEmail}
      style={{ backgroundColor: 'red', color: 'white', padding: '10px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
    >
      Submit
    </button>
  </div>
  <PromiseEx />
</div>

  );
}

export default Parent;
