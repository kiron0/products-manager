import React from "react";
import { RiFacebookCircleLine } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
  useSignInWithFacebook,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../Firebase/Firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
  const [signInWithFacebook, user3, loading3, error3] =
    useSignInWithFacebook(auth);
  const navigate = useNavigate();
  let errorElem;
  const handleGoogle = () => {
    signInWithGoogle();
  };

  const handleFacebook = () => {
    signInWithFacebook();
  };

  const handleGithub = () => {
    signInWithGithub();
  };
  if (error1 || error2 || error3) {
    errorElem = (
      <span className="text-danger">
        {error3?.message} {error2?.message} {error1?.message}
      </span>
    );
  }
  if (loading1 || loading2 || loading3) {
  }

  if (user1 || user2 || user3) {
    navigate("/");
  }

  return (
    <>
      <div className="social-container">
        <RiFacebookCircleLine
          className="social"
          onClick={handleFacebook}
        ></RiFacebookCircleLine>
        <BsGithub className="social" onClick={handleGithub}></BsGithub>
        <FcGoogle className="social" onClick={handleGoogle}></FcGoogle>
      </div>
      {errorElem}
    </>
  );
};

export default SocialLogin;
