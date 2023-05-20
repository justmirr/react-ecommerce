import React, { useState } from 'react'
import './sign_up.css';
import { NavLink } from 'react-router-dom';

const Sign_in = () => {
  const [logdata, setData] = useState({
    email:"",
    password:""
  });

  const addData = (e)=>{
    const {name, value} = e.target;
    setData(()=>{
      return {
        ...logdata, [name]:value
      }
    })
  }

  return (
    <>
    <section>
      <div className="sign_container">
        <div className="sign_form">
          <form action="#">
            <h1>sign in to your account</h1>
            <div className="form_data">
              <label htmlFor="email">email</label>
              <input type="text" onChange={addData} value={logdata.email} name="email" id="email" />
              <label htmlFor="password">password</label>
              <input type="password" onChange={addData} value={logdata.password} name="password" id="password" />
            </div>
            <button className="signin_btn">sign in</button>
          </form>
        </div>
        <div className="create_accountinfo">
          <p>new to communisell?</p>
          <NavLink to="/register">
            <button>create account</button>
          </NavLink>
        </div>
      </div>
    </section>
    </>
  )
}

export default Sign_in