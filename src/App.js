import React, {useEffect, useState} from "react";
import './App.css'
import Navbar from "./Components/Navber/Navbar";
import { css } from "@emotion/core";
import {PropagateLoader} from "react-spinners";
import Header from "./Components/Header/Header";
import Features from "./Components/Features/Features";
import About from "./Components/About/About";


function App() {
  const [loading,setLoading]=useState()
  const override=css`
  display: block;
    border-color: red;
    margin-top: 20%;
  `
  useEffect(() => {
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },0);
  }, [])

  return (
    <div className="App">
      {
        loading ? <PropagateLoader color="#3d2514" Loading={loading} css={override} size={40}/>
            :
            <>
              <Navbar/>
              <Header/>
             <Features/>
              <About/>




            </>

      }



    </div>
  );
}
export default App;
