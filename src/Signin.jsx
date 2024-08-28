import React, { useState } from 'react'

const Signin = () => {
  let [status,setStatue]=useState(false);
  let [buttonContent,setButtonContent]=useState("Sign In");
  let [reverseStatus,setReverseStatus]=useState("Sign Up");

  function Thanks(){
    alert("Please check all details once again !")
  }
  function changeKrDo(){
    if((buttonContent =="Sign In") && (reverseStatus=="Sign Up")){
      setButtonContent("Sign Up");
      setReverseStatus("Sign In");
    }
    else{
      setButtonContent("Sign In");
      setReverseStatus("Sign Up");
    }
  }
  return (
    <div>

      {
        (status) ?
         <div> 
         <input type="text" placeholder='Phone number , username ,or email' required/><br />
         <input type="text" placeholder='Full Name' required/><br />
         </div> 
         :null
      }
      <input type="text" placeholder='Phone number , username ,or email' required/>
      <input type="password" name="password" id="password" required placeholder='Enter Your Password'/><br />

     
      <button onClick={Thanks}>{buttonContent}</button>
      <h3>Don't have account? <a href="#" onClick={()=>{setStatue(!status); {changeKrDo()}}} >{reverseStatus}</a></h3>
    </div>
  )
}

export default Signin
