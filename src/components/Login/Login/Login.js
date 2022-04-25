import "./Login.css";
import React, { useRef } from "react";
import SocialLogin from "../SocialLogin/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { auth } from "../../../Firebase/Firebase.init";
import Loading from "../../Loading/Loading";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  let errorElement;

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if (user) {
    navigate(from, { replace: true });
  }
  if (error) {
    errorElement = <p className="text-danger">{error?.message}</p>;
  }
  if (loading || sending) {
    return <Loading></Loading>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };

  const navigateRegister = () => {
    navigate("/register");
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Email Sent!");
    } else {
      toast("Type Your Email First!");
    }
  };
  return (
    <div className="form-body">
      <div className="container-main-form " id="container">
        <div className="form-container-section log-in-container">
          <form onSubmit={handleSubmit} className="form">
            <h1>Login</h1>
            <SocialLogin />
            {errorElement}
            <span>or use your account</span>
            <input required ref={emailRef} type="email" placeholder="Email" />
            <input
              required
              ref={passwordRef}
              type="password"
              placeholder="Password"
            />
            <p>
              Forgot Password ?{" "}
              <Link
                className="text-primary text-decoration-none pe-auto"
                to="/login"
                onClick={resetPassword}
              >
                Reset
              </Link>
            </p>
            <button className="login-btn" type="submit">
              Log In
            </button>
            <p>
              New Here ?{" "}
              <span>
                <Link
                  className="text-primary"
                  to="/signup"
                  onClick={navigateRegister}
                >Signup
                </Link>
              </span>
            </p>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
