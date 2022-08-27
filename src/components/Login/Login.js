import { React } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  
    return (
      <>
    <section className="mt-0 overflow-hidden  vh-100 d-flex justify-content-center align-items-center p-4">
    
        <div className="col col-md-8 col-lg-6 col-xxl-5">
            <a className="navbar-brand fw-bold fs-3 flex-shrink-0 order-0 align-self-center justify-content-center d-flex mx-0 px-0" href="./index.html">
                <div className="d-flex align-items-center">
                    <svg className="f-w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 77.53 72.26"><path d="M10.43,54.2h0L0,36.13,10.43,18.06,20.86,0H41.72L10.43,54.2Zm67.1-7.83L73,54.2,68.49,62,45,48.47,31.29,72.26H20.86l-5.22-9L52.15,0H62.58l5.21,9L54.06,32.82,77.53,46.37Z" fill="currentColor" fill-rule="evenodd"/></svg>
                </div>
            </a>
            <div className="shadow-xl p-4 p-lg-5 bg-white">
                <h1 className="text-center mb-5 fs-2 fw-bold">Open Account</h1>
                <Link to="/" className="btn btn-facebook d-block mb-2"><i className="ri-facebook-circle-fill align-bottom"></i> Login with Facebook</Link>
                <Link to="/" className="btn btn-twitter d-block mb-2"><i className="ri-twitter-fill align-bottom"></i> Login withTwitter</Link>
                <span className="text-muted text-center d-block fw-bolder my-4">OR</span>
                <form>
                    <div className="form-group">
                      <label className="form-label" for="register-fname">First name</label>
                      <input type="text" className="form-control" id="register-fname" placeholder="Enter your first name" />
                    </div>
                    <div className="form-group">
                      <label className="form-label" for="register-lname">Last name</label>
                      <input type="text" className="form-control" id="register-lname" placeholder="Enter your last name" />
                    </div>
                    <div className="form-group">
                      <label className="form-label" for="register-email">Email address</label>
                      <input type="email" className="form-control" id="register-email" placeholder="name@email.com" />
                    </div>
                    <div className="form-group">
                      <label className="form-label" for="register-password">Password</label>
                      <input type="password" className="form-control" id="register-password" placeholder="Enter your password" />
                    </div>
                    <button type="submit" className="btn btn-dark d-block w-100 my-4">Sign Up</button>
                  </form>
                  <p className="d-block text-center text-muted">Already registered? <Link className="text-muted" to="/login">Login here.</Link></p>
            </div>

        </div>
    </section>

      </>
    )
  
  };
  export default Login;