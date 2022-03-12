import React from 'react'

const Signup = () => {
  return (
    <div>   
        <div className="container">
            <div className="row">
                <div className="panel panel-primary">
                    <div className="panel-body">
                        <form method="POST" action="#" role="form">
                            <div className="form-group">
                                <h2>Create account</h2>
                            </div>
                            <div className="form-group">
                                <label className="control-label" for="signupName">Your name</label>
                                <input id="signupName" type="text" maxlength="50" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label className="control-label" for="signupEmail">Email</label>
                                <input id="signupEmail" type="email" maxlength="50" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label className="control-label" for="signupEmailagain">Email again</label>
                                <input id="signupEmailagain" type="email" maxlength="50" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label className="control-label" for="signupPassword">Password</label>
                                <input id="signupPassword" type="password" maxlength="25" className="form-control" placeholder="at least 6 characters" length="40"/>
                            </div>
                            <div className="form-group">
                                <label className="control-label" for="signupPasswordagain">Password again</label>
                                <input id="signupPasswordagain" type="password" maxlength="25" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <button id="signupSubmit" type="submit" className="btn btn-info btn-block">Create your account</button>
                            </div>
                            <p>Already have an account?</p><a href="/login">Sign in</a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup
