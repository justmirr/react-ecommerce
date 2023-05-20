import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


const Sign_up = () => {

    const [udata, setUdata] = useState({
        fname: "",
        email: "",
        mobile: "",
        password: "",
        cpassword: ""
    })

    const addData = (e) => {
        const { name, value } = e.target;
        setUdata(()=>{
            return{
                ...udata,
                [name]:value
            }
    })
}

return (
    <section>
        <div className="sign_container">
            <div className="sign_form">
                <form method="POST">
                    <h1>create account</h1>
                    <div className="form_data">
                        <label htmlFor="name">name</label>
                        <input type="text" onChange={addData} value={udata.fname} name="fname"
                            id="name" />
                    </div>
                    <div className="form_data">
                        <label htmlFor="email">email</label>
                        <input type="email" onChange={addData} value={udata.email} name="email"
                            id="email" />
                    </div>
                    <div className="form_data">
                        <label htmlFor="mobile">mobile number</label>
                        <input type="number" onChange={addData} value={udata.mobile} name="mobile"
                            id="mobile" />
                    </div>
                    <div className="form_data">
                        <label htmlFor="password">password</label>
                        <input type="password" onChange={addData} value={udata.password} name="password"
                            id="password" />
                    </div>
                    <div className="form_data">
                        <label htmlFor="cpassword">confirm password</label>
                        <input type="password" onChange={addData} value={udata.cpassword} name="cpassword"
                            id="cpassword" />
                    </div>
                    <button type="submit" className="signin_btn">continue</button>

                    <div className="signin_info">
                        <p>already have an account?</p>
                        <NavLink to="/login">sign in</NavLink>
                    </div>
                </form>
            </div>
        </div>
    </section>
)
}

export default Sign_up