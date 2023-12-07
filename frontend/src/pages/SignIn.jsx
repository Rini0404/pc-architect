// import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";
import Pic1 from "../imgs/sigIn.webp";
import { Link } from "react-router-dom";

function SignIn() {
  const [isLoading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isSuccess, isError, message } = useSelector(
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
      setLoading(false);
    }
    if (isError) {
      setLoading(false);
      toast.error("Invalid Credentials");
    }
    dispatch(reset());
  }, [user, isSuccess, isError, message, navigate, dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  return (
    <div className="bg-yellow-50">
      <div
        class="relative py-40 
                before:absolute before:inset-0 before:w-full before:h-[50%] before:bg-gray-200"
      >
        <div class="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
          <div class="m-auto space-y-8 md:w-8/12 lg:w-full">
            <div class="rounded-xl border bg-opacity-50 backdrop-blur-2xl bg-white shadow-xl">
              <div class="lg:grid lg:grid-cols-2">
                <div class="rounded-lg lg:block" hidden>
                  {/* eslint-disable-next-line jsx-a11y/alt-text */}
                  <img
                    src={Pic1}
                    class="rounded-l-xl object-cover w-full h-full"
                    loading="lazy"
                    // height and width
                    height="100%"
                    width="100%"
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
                      <Link to="/SignUp">
                        <a href="#" class="text-sky-500">
                          {" "}
                          Sign up{" "}
                        </a>
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
            <div class="text-center space-x-4">
              <span>&copy; Pc Architect</span>
              <span>&copy; 2022</span>
            </div>
          </div>
        </div>
      </div>
      {isLoading && <Spinner />}
    </div>
  );
}

export default SignIn;
