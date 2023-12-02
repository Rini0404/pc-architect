// import Pic1 from "../imgs/pcPic1.jpg";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isSuccess, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isSuccess || user) {
      navigate("/");
    }
    if (isError) {
      toast.error(message);
    }
    dispatch(reset());
  }, [user, isSuccess, isLoading, isError, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }; 
  
  // const notify = () => toast("Success!");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };
      dispatch(register(userData));
    }
    
  };
  if (isLoading) {
    return <Spinner />;
  }

  


  return (
    <div className="bg-yellow-50 min-h-screen flex flex-col pt-24">
      <form
        onSubmit={onSubmit}
        className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2"
      >
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <input
            className="block border border-grey-light w-full p-3 rounded mb-4"
            type="text"
            id="name"
            name="name"
            value={name}
            placeholder="Enter your full name"
            onChange={onChange}
          />

          <input
            className="block border border-grey-light w-full p-3 rounded mb-4"
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={onChange}
          />

          <input
            className="block border border-grey-light w-full p-3 rounded mb-4"
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="Enter password"
            onChange={onChange}
          />
          <input
            className="block border border-grey-light w-full p-3 rounded mb-4"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm password"
            onChange={onChange}
          />

          <button
            type="submit"
            className="w-full text-center bg-green text-black focus:outline-none my-1
            px-8 py-3 font-semibold rounded-full transition bg-gradient-to-b from-sky-400 to-cyan-300 active:from-sky-300 focus:from-cyan-400 dark:text-gray-800
            "
          >
            Create Account
          </button>

          

        </div>

        <div className="text-grey-dark mt-6">
          Already have an account?
          <Link to="/SignIn">
          <a
            className="no-underline border-b border-blue text-blue"
            href="../login/"
          >
            {" "}Log in{" "}
          </a>
          .
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
