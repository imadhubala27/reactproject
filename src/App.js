import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Home from "./Home";

function SignUp() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [showHome, setShowHome] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  const localSignUp = localStorage.getItem("signUp");
  const localEmail = localStorage.getItem("email");
  const localPassword = localStorage.getItem("password");
  const localName = localStorage.getItem("name");

  useEffect(() => {
    if (localSignUp) {
      setShowHome(true);
    }
    document.body.classList.add('Homepage');

    if (localEmail) {
      setShowSignIn(true);
    }
  }, [localSignUp, localEmail]);

  const handleSignUp = () => {
    const newName = nameRef.current.value;
    const newEmail = emailRef.current.value;
    const newPassword = passwordRef.current.value;

    if (newName && newEmail && newPassword) {
      localStorage.setItem("name", newName);
      localStorage.setItem("email", newEmail);
      localStorage.setItem("password", newPassword);
      localStorage.setItem("signUp", "true"); // Use a boolean flag
      alert("Account created successfully");
      setShowHome(true);
    }
  }

  const handleSignIn = () => {
    const inputEmail = emailRef.current.value;
    const inputPassword = passwordRef.current.value;

    if (inputEmail === localEmail && inputPassword === localPassword) {
      localStorage.setItem("signUp", "true");
      setShowHome(true);
    } else {
      alert("Please enter valid details");
    }
  }

  return (
    <div className="main">
      {showHome ?
        <Home />: 
        (showSignIn ? 
        <div className="container">
              <h1>Hello &nbsp;{localName }</h1>
              <div className="Input_class">
                <input placeholder="Email" type="text" ref={emailRef} />
              </div>
              <div className="Input_class">
                <input placeholder="Password" type="password" ref={passwordRef} />
              </div>
              <button onClick={handleSignIn} className="signup">Sign In</button>
            </div>
           : 
            <div>
              <div className="Input_class">
                <input placeholder="Name" type="text" ref={nameRef} />
              </div>
              <div className="Input_class">
                <input placeholder="Email" type="text" ref={emailRef} />
              </div>
              <div className="Input_class">
                <input placeholder="Password" type="password" ref={passwordRef} />
              </div>
              <button onClick={handleSignUp} className="signin">Sign Up</button>
            </div>
        )
    }
    </div>
  );
}

export default SignUp;
