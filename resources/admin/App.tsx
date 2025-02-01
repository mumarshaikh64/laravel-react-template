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


import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import { MainContextProvider } from "./Context/MainContext";
import AdminHome from "./pages";

function App() {
    return <MainContextProvider>
        <AdminHome />
        <ToastContainer />
        {/* <PageEditor/> */}
    </MainContextProvider>;
}

ReactDOM.render(<App />, document.getElementById('adminApp'));
