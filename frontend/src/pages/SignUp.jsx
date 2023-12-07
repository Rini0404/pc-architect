// import Pic1 from "../imgs/pcPic1.jpg";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../features/auth/authSlice";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../components/Spinner";

function SignUp() {
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const { firstName, lastName, email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isSuccess, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );

  const [formErrors, setFormErrors] = useState({});

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Function to validate form data
  const validate = (firstName, lastName, password) => {
    const errors = {};
    if (!firstName) {
      errors.firstName = "First name is required";
    }
    if (!lastName) {
      errors.lastName = "Last name is required";
    }

    if (!email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      errors.email = "Email is invalid";
    }
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    return errors;
  };

  useEffect(() => {
    if (isSuccess) {
      setLoadingSubmit(false);
      navigate("/");
      console.log(" IS SUCCESS");
    }
    if (isError) {
      setLoadingSubmit(false);
      console.log(" IS ERROR");
      toast.error(message);
    }
    dispatch(reset());
  }, [user, isSuccess, isLoading, isError, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  
    // Reset the specific form error when the user starts typing in an input field
    if (formErrors[e.target.name]) {
      setFormErrors({ ...formErrors, [e.target.name]: '' });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const errors = validate(firstName, lastName, email, password);

    // Only dispatch the register action if there are no validation errors
    if (Object.keys(errors).length === 0) {
      setLoadingSubmit(true);
      dispatch(register({ firstName, lastName, email, password }));
    } else {
      setFormErrors(errors);
      // Display toast errors for each validation error
      Object.values(errors).forEach((error) => {
        toast.error(error);
      });
    }
  };

  return (
    <div className=" min-h-screen flex flex-col pt-24">
      <form
        onSubmit={onSubmit}
        className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2"
      >
        <div className="bg-slate-800 px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center text-white">Sign up</h1>
          <input
            className="block border border-grey-light w-full p-3 rounded mb-4"
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            placeholder="Enter your First name"
            onChange={onChange}
          />
          {formErrors.firstName && (
            <>
              <p className="text-red-500 text-xs italic">
                {formErrors.firstName}
              </p>
              <br />
            </>
          )}
          <input
            className="block border border-grey-light w-full p-3 rounded mb-4"
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            placeholder="Enter your Last name"
            onChange={onChange}
          />
          {formErrors.lastName && (
            <>
              <p className="text-red-500 text-xs italic">
                {formErrors.lastName}
              </p>
              <br />
            </>
          )}
          <input
            className="block border border-grey-light w-full p-3 rounded mb-4"
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={onChange}
          />
          {formErrors.email && (
            <>
              <p className="text-red-500 text-xs italic">{formErrors.email}</p>
              <br />
            </>
          )}
          <input
            className="block border border-grey-light w-full p-3 rounded mb-4"
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="Enter password"
            onChange={onChange}
          />
          {formErrors.password && (
            <>
              <p className="text-red-500 text-xs italic">
                {formErrors.password}
              </p>
              <br />
            </>
          )}

          <br />
          <button
            type="submit"
            className="w-full text-center bg-green text-black focus:outline-none my-1
            px-8 py-3 font-semibold rounded-full transition bg-blue-300 hover:bg-blue-600 hover:shadow-lg
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
              {" "}
              Log in{" "}
            </a>
            .
          </Link>
        </div>
      </form>
      {/* modal for is loading:  */}
      {loadingSubmit && <Spinner />}
    </div>
  );
}

export default SignUp;
