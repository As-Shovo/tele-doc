import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

import login from '../../../images/undraw_My_notifications_re_ehmk.png';

const Login = () => {
    const {googleSingin, githubSignin, emailPasswordCreate, emailPasswordSignin, error, user} = useAuth();



    // const [user, setUser] = useState({})
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [error, setError] = useState('');
    const [toggle, setToggle] = useState(true);

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/home";

    const handleGoogleSignin = () =>{
        googleSingin()
        .then(result => {
            // setUser(result.user);
            history.push(redirect_uri);
            // console.log(result.user);
        })
        
        
    };

    const handleGithubSignin = () =>{
        githubSignin()
        
    };

    const handleName = e => {
        setName(e.target.value)
    }


    const handleEmail = e =>{
        setEmail(e.target.value);
        // e.target.value= "";
    };

    const handlePassword = e =>{
        setPassword(e.target.value);
        // e.target.value= "";
    };

    
    const createNewUser = (e) =>{
        e.preventDefault();
        emailPasswordCreate(email, password, name)
        // updateProfileName(name);
        // console.log(email,password,name);
        
    };

    const loginUser = (e) =>{
        e.preventDefault();
        emailPasswordSignin(email,password)
        
        console.log('signin');
    }

    const logToggle = (tgle)=> {
        setToggle(tgle);
    };
    // console.log(user);
    return (
        <div>
            <Container>
                <Row>
                    <Col md={6} sm={12}>
                        <img className="w-100" src={login} alt="" />
                    </Col>
                    <Col md={5} sm={12}>
                        <div className="input-form">
                            {toggle?<form onSubmit={loginUser}>
                                <h1>Login Form</h1>

                                <label htmlFor="email" className="label">E-mail</label>
                                <input type="email" className="form-control" onChange={handleEmail} required placeholder="Your Email" />
                                    <br />
                                <label htmlFor="password" className="label">Password</label>
                                <input type="password" className="form-control" onChange={handlePassword} required placeholder="Your Password" />
                                    
                                    <label className="my-4" onClick={()=>logToggle(false)} htmlFor="checkbox">Create a new account</label>
                                    <br />

                                    <div className="text-danger"> {error}</div>
                                <div className="google btn signup-btn mx-2 mt-2" onClick={handleGoogleSignin}><i className="fab fa-google"> Signin with Google</i></div>
                                <div className="google btn signup-btn mx-2 mt-2" onClick={handleGithubSignin}><i className="fab fa-github"> Signin with Github</i></div>
                                <br />
                               
                                <button type="submit" className="btn signup-btn mt-2 ms-2 ">Login</button>
                            </form>:

                            <form onSubmit={createNewUser}>
                                <h1>Register Form</h1>
                                <label htmlFor="name" className="label">Name :</label>
                                <input type="text" className="form-control" onChange={handleName} required placeholder="Your Name" />
                                    <br />
                                <label htmlFor="email" className="label">E-mail</label>
                                <input type="email" className="form-control" onChange={handleEmail} required placeholder="Your Email" />
                                    <br />
                                <label htmlFor="password" className="label">Password</label>
                                <input type="password" className="form-control" onChange={handlePassword} required placeholder="Your Password" />
                                    
                                    <label className="my-4" onClick={()=>logToggle(true)} htmlFor="checkbox">All Ready Have an Account</label>
                                    <br />
                                <div className="google btn signup-btn mx-2 mt-2" onClick={handleGoogleSignin}><i className="fab fa-google"> Signin with Google</i></div>
                                <div className="google btn signup-btn mx-2 mt-2" onClick={handleGithubSignin}><i className="fab fa-github"> Signin with Github</i></div>
                                <br />
                                <button type="submit" className="btn signup-btn mt-2 ms-2 ">Register</button>
                            </form>}
                        </div>
                    </Col>
                    <Col>
                        {user?.name}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;