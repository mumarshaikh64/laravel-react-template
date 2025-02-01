// Dependencies
import "./bootstrap";
import '../css/app.css';
import { MainContextProvider } from './Context/MainContext';
import Home from "./Pages";
import ReactDOM from 'react-dom';
import { ToastContainer } from "react-toastify";
const App = () => {
  return <MainContextProvider>
    <ToastContainer />
    <Home />
  </MainContextProvider>
}
ReactDOM.render(<App />, document.getElementById('mainApp'));
