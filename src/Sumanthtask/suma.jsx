import React, { useState } from "react";
import '../Sumanthtask/suma.css';

const Login = () => {
    const [form, setForm] = useState("login");
    return (
        <div className="bg">
            <div className="header">
                <span id="TAG">LOGO</span>
                <ul className="hjdf">
                    <li>About US</li>
                    <li>FAQ's</li>
                    <li>Services</li>
                    <li>Contact US</li>
                    <button>LOGIN</button>
                    <span>LOGO</span>
                    <span>&darr;</span>
                </ul>
            </div>
            <div className="login-bg">
                <div className="login-container">
                    <div className="left"></div>
                    <div className="right">
                        <div className="tabs">
                            <button
                                onClick={() => setForm("login")}
                                style={{
                                    borderBottom: form === "login" ? "1px solid red" : "none",
                                }}>
                                Login
                            </button>
                            <button
                                onClick={() => setForm("register")}
                                style={{ borderBottom: form === "register" ? "1px solid red" : "none" }}>
                                Register
                            </button>
                        </div>
                        <form>
                            {form === "login" && (
                                <div>
                                    <input type="text" placeholder="Username" />
                                    <input type="password" placeholder="Password" />
                                    <button type="submit">Login</button>
                                    <span>Forgot Password?</span>
                                    <span>Don't have an account? Sign up now.</span>
                                </div>
                            )}
                            {form === "register" && (
                                <div>
                                    <input type="text" placeholder="Username" />
                                    <input type="email" placeholder="Email" />
                                    <input type="password" placeholder="Password" />
                                    <input type="password" placeholder="Confirm Password" />
                                    <input type="text" placeholder="Username" />
                                    <input type="email" placeholder="Email" />
                                    <input type="password" placeholder="Password" />
                                    <input type="password" placeholder="Confirm Password" />
                                    <input type="text" placeholder="Username" />
                                    <input type="email" placeholder="Email" />
                                    <input type="password" placeholder="Password" />
                                    <input type="password" placeholder="Confirm Password" />
                                    <input type="text" placeholder="Username" />
                                    <input type="email" placeholder="Email" />
                                    <input type="password" placeholder="Password" />
                                    <input type="password" placeholder="Confirm Password" />
                                    <input type="text" placeholder="Username" />
                                    <input type="email" placeholder="Email" />
                                    <input type="password" placeholder="Password" />
                                    <input type="password" placeholder="Confirm Password" />
                                    <input type="text" placeholder="Username" />
                                    <input type="email" placeholder="Email" />
                                    <input type="password" placeholder="Password" />
                                    <input type="password" placeholder="Confirm Password" />
                                    <input type="text" placeholder="Username" />
                                    <input type="email" placeholder="Email" />
                                    <input type="password" placeholder="Password" />
                                    <input type="password" placeholder="Confirm Password" />
                                    <button type="submit">Register</button>
                                    <span>Already have an account? Sign in now.</span>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
