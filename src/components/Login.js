 import React from 'react'
// import { useState } from 'react'
// import { LoginCategory } from 'yts.types';
// import {useHistory} from 'react-router-dom'
// import { loginAdmin, setAdminLoginToken } from 'service/auth.service';
// import { handleHttpError } from 'util/errorHandler';

const Login = () => {
    // const history = useHistory()
    // const [credentials,setCredentials]=useState<LoginCategory>({username:'',password:''});
    // const [loginProcessing, setLoginProcessing] = useState(false);
    // const onChangeCredentials=(e)=>{
    //     setCredentials({...credentials,[e.target.name]:e.target.value})
    // }
    // const submitCredentials = async (e)=>{
    //     e.preventDefault();
    //     if(!credentials.username.length || !credentials.password.length){
    //         return;
    //     }

    //     setLoginProcessing(true);
    //     loginAdmin({username:credentials.username,password:credentials.password}).then(res=>{
    //         setLoginProcessing(false);
    //         const { walletBuddyToken, token } = res.data.body;
    //         if(walletBuddyToken && token){
    //             setAdminLoginToken(token);      
    //             history.push('/');
    //             return;
    //         }
    //         handleHttpError(res);
    //     }).catch(err => {
    //         handleHttpError(err, 'Authentication service down, please report.');
    //         setLoginProcessing(false);
    //     })
    // }

    // const isLoginButtonDisabled = () => {
    //     return !credentials.username?.length || !credentials.password?.length || loginProcessing;
    // }

    return (
        <section className="vh-100">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white shadow-lg" style={{ borderRadius: "1rem" }}>
                            <div className="card-body p-5 text-center">

                                <div className="mb-md-5 mt-md-4 pb-5">

                                    <h2 className="fw-bold mb-2 text-uppercase text-white h3">Login</h2>
                                    <p className="text-white-50 mb-5">Please enter your login and password!</p>

                                    <div className="form-floating mb-5 mx-4">
                                        <input name="username" type="text" className="form-control bg-dark text-light" id="floatingInput" autoComplete='off' placeholder="name"/>
                                        <label htmlFor="floatingInput">Username</label>
                                    </div>
                                    <div className="form-floating mb-5 mx-4">
                                        <input name="password" type="password" className="form-control bg-dark text-light" id="floatingPassword" autoComplete='off' placeholder="Password"/>
                                        <label htmlFor="floatingPassword">Password</label>
                                    </div>
                                    <button className="btn btn-outline-light btn-lg px-5 mt-3" type="submit">Login</button>
                                    <p>New User?
                                        <a href="/signup">Signup</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Login;
