import { useState } from "react"
import { NavLink } from "react-router"
// import {success , error} from "react-toastify"

function AdminLogin() {

 let [uname , setUname] = useState("")
 let [pwd , setPwd] = useState("")

  function Login(){
    

  }
  return (
    <>

      <div id="page" className>
        <div className="wrap-login-page">
          <div className="flex-grow flex flex-column justify-center gap30">
            <a href="index.html" id="site-logo-inner">
            </a>
            <div className="login-box">
              <div>
                <h3>Login to account</h3>
                <div className="body-text">Enter your email &amp; password to login</div>
              </div>
              <form className="form-login flex flex-column gap24">
                <fieldset className="email">
                  <div className="body-title mb-10">Email address <span className="tf-color-1">*</span></div>
                  <input className="flex-grow" onChange={ (e) => setUname(e.target.value)} type="email" placeholder="Enter your email address" name="email" tabIndex={0} />
                </fieldset>
                <fieldset className="password">
                  <div className="body-title mb-10">Password <span className="tf-color-1">*</span></div>
                  <input className="password-input" onChange={ (e) => setPwd(e.target.value)} type="password" placeholder="Enter your password" name="password" tabIndex={0} />
                  <span className="show-pass">
                    <i className="icon-eye view" />
                    <i className="icon-eye-off hide" />
                  </span>
                </fieldset>
                <div className="flex justify-between items-center">
                  <div className="flex gap10">
                    <input className type="checkbox" id="signed" />
                    <label className="body-text" htmlFor="signed">Keep me signed in</label>
                  </div>
                  <a href="#" className="body-text tf-color">Forgot password?</a>
                </div>
                <NavLink to="/admin/admindashboard"><button onClick={Login}  className="tf-button w-full">Login</button></NavLink>
              </form>
            </div>
          </div>
          <div className="text-tiny">Copyright © 2024 Remos, All rights reserved.</div>
        </div>
      </div>


    </>
  )
} export default AdminLogin