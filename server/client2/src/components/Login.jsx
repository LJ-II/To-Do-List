/*import React from "react";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Link } from "react-router-dom";

const Login = () =>
{
    return(
        <div className="h-screen flex justify-center items-center transform -translate-y-16">
            <form action="" className="flex flex-col gap-6 max-w-xl w-full px-8">
                <div className="flex flex-col gap-2">
                    <Label>Email</Label>
                    <Input type="email" name="email" placeholder="Enter your email" />
                </div>
                <div className="flex flex-col gap-2">
                    <Label>Password</Label>
                    <Input type="password" name="password" placeholder="Enter your password" />
                </div>
                <Button>Login</Button>
                <span className="text-[#63657b] text-center">Don't have an account?{" "}
                    <Link to="/register" className="transition ease-in-out hover:cursor-pointer hover:text-primary hover:underline">Register</Link>
                </span>
            </form>
        </div>
    );
};

export default Login;*/

import React, { useState, useActionState, useEffect } from "react";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { login } from "@/actions/userActions";

const Login = () =>
{
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: ""});
    const [state, formAction, isPending] = useActionState(login, {success:null, error:null});

    useEffect(() => 
    {
        if (state.success)
        {
            setTimeout(() => 
            {
                navigate("/");
            }, 2000);
        }
    }, [state.success]);

    const handleChange = (event) =>
    {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    console.log(formData);
    
    /*return(
        <div className="h-screen flex justify-center items-center transform -translate-y-16">
            <h1 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold text-4xl text-center mb-4 text-transparent bg-clip-text">Welcome to the Todo App</h1>
            <form action={formAction} className="flex flex-col gap-6 max-w-xl w-full px-8">
                <div className="flex flex-col gap-2">
                    <Label>Email</Label>
                    <Input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="flex flex-col gap-2">
                    <Label>Password</Label>
                    <Input type="password" name="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} />
                </div>
                {
                    state.error && <span className="message">{state.error}</span>   
                }
                <Button disabled={isPending}>
                    {
                        isPending? "Logging in " : "Login"
                    }
                </Button>
                <span className="text-[#63657b] text-center">Don't have an account?{" "}
                    <Link to="/register" className="transition ease-in-out hover:cursor-pointer hover:text-primary hover:underline">Register</Link>
                </span>
            </form>
        </div>
    );*/

    return (
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex-grow flex justify-center items-center transform -translate-y-16">
            <div className="w-full max-w-xl px-8">
              <h1 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold text-4xl text-center mb-4 text-transparent bg-clip-text">
                Welcome to the Todo App
              </h1>
              <form action={formAction} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <Label>Email</Label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Password</Label>
                  <Input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                {state.error && <span className="message">{state.error}</span>}
                <Button disabled={isPending}>
                  {isPending ? "Logging in" : "Login"}
                </Button>
                <span className="text-[#63657b] text-center">
                  Don't have an account?{" "}
                  <Link
                    to="/register"
                    className="transition ease-in-out hover:cursor-pointer hover:text-primary hover:underline"
                  >
                    Register
                  </Link>
                </span>
              </form>
            </div>
          </div>
          <Footer />
        </div>
      );
};

export default Login;