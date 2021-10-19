import React from 'react';

const Register = () => {
    return (
        <div>
            <form >
                                <h1>Register Form</h1>
                                <label htmlFor="email" className="label">E-mail</label>
                                <input type="email" className="form-control" placeholder="Your Email" />
                                    <br />
                                <label htmlFor="password" className="label">Password</label>
                                <input type="password" className="form-control" placeholder="Your Password" />
                                    
                                    <label className="my-4" onClick={logToggle} htmlFor="checkbox">Create a new account</label>
                                    <br />
                                <div className="google btn signup-btn mx-2" onClick={handleGoogleSignin}><i className="fab fa-google"> Signin with Google</i></div>
                                <div className="google btn signup-btn mx-2" onClick={handleGithubSignin}><i className="fab fa-github"> Signin with Github</i></div>
                                <br />
                                <button type="submit" className="btn signup-btn mt-2 ms-2 ">Login</button>
                            </form>
        </div>
    );
};

export default Register;