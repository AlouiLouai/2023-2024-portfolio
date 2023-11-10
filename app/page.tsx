'use client'
import "bootstrap/dist/css/bootstrap.min.css";
import HomeTop from './components/Home/HomeTop'
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Pre from "./components/Pre";

export default function Home() {

  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      upadateLoad(false);
    }, 1200);
  }, []);

  return (
    <>
      <Pre load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <NavBar />
        <HomeTop />
        <Footer />
      </div>
    </>
  )
}
