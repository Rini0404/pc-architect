// import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";

function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isSuccess, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (isSuccess || user) {
      navigate("/");
    }
    if (isError) {
      toast.error(message);
    }
    dispatch(reset());
  }, [user, isSuccess, isLoading, isError, message, navigate, dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div
        class="relative py-16 
                before:absolute before:inset-0 before:w-full before:h-[50%] before:bg-gray-200"
      >
        <div class="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
          <div class="m-auto space-y-8 md:w-8/12 lg:w-full">
            <img
              src="images/tailus.svg"
              loading="lazy"
              class="w-36 ml-4"
              alt="tailus logo"
            />
            <div class="rounded-xl border bg-opacity-50 backdrop-blur-2xl bg-white shadow-xl">
              <div class="lg:grid lg:grid-cols-2">
                <div class="rounded-lg lg:block" hidden>
                  <img
                    src="images/smiling.webp"
                    class="rounded-l-xl object-cover"
                    loading="lazy"
                    height=""
                    width=""
                    alt="music mood"
                  />
                </div>
                <div class="p-6 sm:p-16">
                  <h2 class="mb-8 text-2xl text-cyan-900 font-bold">
                    Sign in to your account
                  </h2>
                  <form onSubmit={onSubmit} action="" class="space-y-8">
                    <div class="space-y-2">
                      <label for="email" class="text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={onChange}
                        class="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
        focus:ring-2 focus:ring-sky-300 focus:outline-none
        invalid:ring-2 invalid:ring-red-400"
                      />
                    </div>

                    <div>
                      <div class="flex items-center justify-between">
                        <label for="pwd" class="text-gray-700">
                          Password
                        </label>
                        {/* <button class="p-2 -mr-2" type="reset">
                          <span class="text-sm text-sky-500">
                            Forgot your password ?
                          </span>
                        </button> */}
                      </div>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={onChange}
                        class="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
                                            focus:ring-2 focus:ring-sky-300 focus:outline-none
                                            invalid:ring-2 invalid:ring-red-400"
                      />
                    </div>

                    <button
                      // onSubmit={onSubmit}
                      type="submit"
                      class="w-full py-3 px-6 rounded-md bg-sky-600
                    focus:bg-sky-700 active:bg-sky-500"
                    >
                      <span class="text-white">Continue</span>
                    </button>

                    <p class="border-t pt-6 text-sm">
                      Don't have an account ?
                      <a href="#" class="text-sky-500">
                        Sign up
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
            <div class="text-center space-x-4">
              <span>&copy; tailus</span>
              <a href="#" class="text-sm hover:text-sky-900">
                Contact
              </a>
              <a href="#" class="text-sm hover:text-sky-900">
                Privacy & Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
