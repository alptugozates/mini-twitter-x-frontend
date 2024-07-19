import React from "react";
import background from "../Foto/back-twitter-1.png";
import { FaApple, FaTwitter } from "react-icons/fa";

const SignupForm = () => {
  return (
    <div className="min-w-full h-auto">
      <div className="flex min-h-screen">
        <div className="w-1/2 h-auto">
          <img
            src={background}
            alt="Twitter Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center bg-white p-8">
          <FaTwitter className="text-5xl text-turquoise mb-6" />
          <h1 className="text-4xl font-montserrat font-bold mb-4">
            Happening now
          </h1>
          <h2 className="text-2xl font-montserrat font-semibold mb-6">
            Join Twitter today
          </h2>
          <button className="w-full max-w-xs bg-white border font-montserrat border-gray-300 text-gray-800 py-2 px-4 rounded mb-4 flex items-center text-center justify-center">
            <img
              src="https://img.icons8.com/color/48/000000/google-logo.png"
              alt="Google"
              className="w-6 h-auto mr-2"
            />
            Sign up with Google
          </button>
          <button className="w-full text-center font-montserrat max-w-xs bg-black text-white py-2 px-4 rounded mb-4 flex items-center justify-center">
            <FaApple className="text-4xl text-white w-6 h-auto mr-2" />
            Sign up with Apple
          </button>
          <button className="w-full max-w-xs bg-turquoise font-montserrat text-white py-2 px-4 rounded mb-4">
            Sign up with phone or email
          </button>
          <p className="text-sm text-gray-500 text-center">
            By signing up you agree to the{" "}
            <a href="#" className="text-turquoise">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-turquoise">
              Privacy Policy
            </a>
            , including{" "}
            <a href="#" className="text-turquoise">
              Cookie Use
            </a>
            .
          </p>
          <p className="text-sm text-gray-500 text-center mt-4">
            Already have an account?{" "}
            <a href="#" className="text-turquoise">
              Log in
            </a>
          </p>
        </div>
      </div>
      <div className="fixed bottom-0 text-custom-gray font-montserrat font-semibold text-sm left-0 right-0 bg-white p-4 flex items-center justify-center gap-4 border-t border-gray-300">
        <p>About</p>
        <p>Help Center</p>
        <p>Terms Of Service</p>
        <p>Privacy Policy</p>
        <p>Cookie Policy</p>
        <p>Ads Info</p>
        <p>Blog</p>
        <p>Status</p>
        <p>Careers</p>
        <p>Brand Resources</p>
        <p>Advertising</p>
        <p>Marketing</p>
        <p>Twitter for Business</p>
        <p>Developers</p>
        <p>Directory</p>
        <p>© 2021 Twitter, Inc.</p>
      </div>
    </div>
  );
};

export default SignupForm;
