import './App.css';
import MainRouter from './MainRouter';
import ScrollToTop from "./helpers/ScrollToTop";
import Loader from "react-loader-spinner";
import {useEffect , useContext} from 'react';

import { Loading } from './helpers/Provider'


const loader = document.querySelector(".loader");
const showLoader = () => loader.classList.remove("loader");
const addClass = () => loader.classList.add("loader-hide");

function App() {
 
  const {loading,setLoading}=useContext(Loading)

  useEffect(() => {
    showLoader();
    addClass();
  }, []);
  
  
  return (
    <div>

     <ScrollToTop>
      
      <MainRouter />
      </ScrollToTop>  
      
    </div>
  );
}

export default App;
