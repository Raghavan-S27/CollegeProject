import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();

    const [data, newData] = useState (
        {
            email: "",
            password: ""
        }
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        newData({ ...data, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
        console.log('Login form submitted');
        alert('Successfully logged in! Directing to HomePage :) Ramesh');
    };

    const handleNewRegister = (e) => {
        e.preventDefault();
        navigate("/register");
    }
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    {/* ADD onSubmit={handleSubmit} HERE */}
                    <form className="form-signin" onSubmit={handleSubmit}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="72"
                            height="72"
                            fill="currentColor"
                            className="bi bi-hospital mb-4 mx-auto d-block"
                            viewBox="0 0 16 16"
                        >
                            <path d="M8.5 5.034v1.1l.953-.55.5.867L9 7l.953.55-.5.866-.953-.55v1.1h-1v-1.1l-.953.55-.5-.866L7 7l-.953-.55.5-.866.953.55v-1.1zM13.25 9a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zM13 11.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25zm.25 1.75a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zm-11-4a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 3 9.75v-.5A.25.25 0 0 0 2.75 9zm0 2a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zM2 13.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25z"/>
                            <path d="M5 1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 1 1v4h3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1zm2 14h2v-3H7zm3 0h1V3H5v12h1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zm0-14H6v1h4zm2 7v7h3V8zm-8 7V8H1v7z"/>
                        </svg>

                        <h1 className="h3 mb-3 fw-normal text-center">Please sign in</h1>

                        <div className="form-floating mb-3">
                            <input onChange={handleChange} value={data.email}
                                   name="email"
                                type="email"
                                className="form-control"
                                id="floatingInput"
                                placeholder="name@example.com"
                            />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input onChange={handleChange} value={data.password}
                                   name="password"
                                type="password"
                                className="form-control"
                                id="floatingPassword"
                                placeholder="Password"
                            />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>

                        <div className="form-check text-start my-3">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value="remember-me"
                                id="checkDefault"
                            />
                            <label className="form-check-label" htmlFor="checkDefault">
                                Remember me
                            </label>

                        </div>

                        <button className="btn btn-primary w-100 py-2" type="submit">
                            Sign in
                        </button>
                        <br/>
                        <br/>
                        <button className="btn btn-primary w-100 py-2" type="submit" onClick={handleNewRegister}>
                            New User? Register
                        </button>


                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;