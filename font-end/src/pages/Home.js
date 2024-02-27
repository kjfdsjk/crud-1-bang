import React, {useEffect, useState} from "react";
import axios from "axios";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";
import List from "./student/List";
import Create from "./student/Create";
import {Outlet} from "react-router";

export default function Home() {
    return (
        <>
            <Header></Header>
            <Navbar></Navbar>
            <Link to={'/'}>List | </Link>
            <Link to={'/create'}>Add  </Link>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}