import React, { FormEvent, useEffect, useState } from "react";
import Spinner from "../../components/Spinner/Spinner";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [hidePassword, setHidePassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [inputFormValue, setInputFormValue] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (key: string, value: string): void => {
    setInputFormValue((inputValue) => ({ ...inputValue, [key]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    // setIsLoading(true);

    const validEmail = "nirmal@gmail.com";
    const validPassword = "nirmal@123";

    if (
      inputFormValue.email === validEmail &&
      inputFormValue.password === validPassword
    ) {
      const dummyToken = "dummy-token-1234567890";
      localStorage.setItem("AUTH_TOKEN", dummyToken); //static dummy token
      setIsLoggedIn(true);
      alert("✅ Login Successful!");
    } else if (inputFormValue.email !== validEmail) {
      alert("❌ Email is incorrect");
    } else if (inputFormValue.password !== validPassword) {
      alert("❌ Password is incorrect");
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/user/dashboard");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="flex justify-center items-center bg-gray-200 h-screen">
      <div className={` px-8 py-8 bg-white w-[30rem] shadow-md rounded-xl`}>
        <div className="text-lg mb-2 font-semibold text-center">
          <span>Login user Account</span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="mb-2 font-semibold mr-4" htmlFor="email">
              Email:
            </label>
            <input
              className="text-lg border-[1.5px] rounded-md shadow-sm border-gray-300 py-1.5 px-2 focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              value={inputFormValue?.email}
              onChange={(e: any) => changeHandler("email", e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mt-4 relative">
            <label className=" mb-2 font-semibold mr-4" htmlFor="password">
              Password
            </label>
            <input
              className="text-lg border-[1.5px] rounded-md shadow-sm border-gray-300 py-1.5 pl-2 pr-12 focus:outline-none"
              id="password"
              name="password"
              type={`${hidePassword ? "text" : "password"}`}
              value={inputFormValue?.password}
              onChange={(e: any) => {
                changeHandler("password", e.target.value);
              }}
            />
            <div
              className="w-4 h-4 absolute cursor-pointer top-[46px] right-4"
              onClick={() => setHidePassword(!hidePassword)}
            >
              {hidePassword ? <EyeIcon /> : <EyeSlashIcon />}
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center">
            <button
              className="w-1/2 text-white cursor-pointer text-center py-1.5 rounded-lg font-semibold bg-blue-400"
              type={"submit"}
              disabled={isLoading}
            >
              {isLoading ? <Spinner /> : "Login"}
            </button>
          </div>
          <div className="flex justify-between">
            <div className="text-sm tex-md mt-4">
              Not a member ?
              <a href="" className="text-blue-500 ml-1">
                Create an Account
              </a>
            </div>
            <a href="" className="text-blue-500 text-sm tex-md mt-4">
              Forgot your password ?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
