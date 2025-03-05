// Dependencies
import "./bootstrap";
// import { createRoot } from 'react-dom/client';
// import { createInertiaApp } from '@inertiajs/react';
// import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

// Assets & Design
import '../css/app.css';
// import React from "react";




// createInertiaApp({
//   title: (title) => `${title}`,
//   resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
//   setup({ el, App, props }) {
//     const root = createRoot(el);
//     root.render(<App {...props} />);
//   },
//   progress: {
//     color: '#4B5563',
//   },
// });


import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import { MainContextProvider } from "./Context/MainContext";
import AdminHome from "./pages";

function App() {
    const [isLogin, setIsLogin] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    useEffect(() => {
        const isLogin = localStorage.getItem("IsAdmin");
        if (isLogin == "true") {
            setIsLogin(true);
        } else {
            setIsLogin(false);
        }
    }, []);

    const onLogin = () => {
        if (email == "" || password == "") {
            alert("Please Enter Email or Password");
        } else {
            if (email == "admin@universalhpc.com" && password == "admin@123") {
                window.localStorage.setItem("IsAdmin", "true");
                window.location.reload();
            }else{
            alert("Please Check your Email & Password");

            }
        }
    }
    if (!isLogin) {
        return <div className="w-full h-[100vh] flex justify-center items-center">
            <div className="w-[28%] h-[60vh] bg-[#fff py-4 px-2 shadow-xl rounded-xl">
                <div style={{ width: '100%', display: 'flex', alignItems: "center", justifyContent: "center", marginBlock: 10 }}>
                    <img style={{ width: "50%" }} src={'https://universalhpc.com/build/assets/logo-1-89ed58d0.png'} />
                </div>
                <h2 className="text-center text-2xl ">Admin Login</h2>
                <div className='md:w-[98%] mx-1 w-full'>
                    <label>Email</label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder='Enter Email' className='w-full my-4 border-none bg-[#fff] shadow outline-none px-2 py-2 rounded' />
                </div>
                <div className='md:w-[98%] mx-1 w-full'>
                    <label>Password</label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        placeholder='Enter Password' type="password" className='w-full my-4 border-none bg-[#fff] shadow outline-none px-2 py-2 rounded' />
                </div>

                <button onClick={() => { onLogin() }} className="w-[95%] border py-2  mt-4 rounded ml-2">Login</button>
            </div>
        </div>
    }else{
        return (<MainContextProvider>
            <AdminHome />
            <ToastContainer />
        </MainContextProvider>);
    }
}

ReactDOM.render(<App />, document.getElementById('adminApp'));
