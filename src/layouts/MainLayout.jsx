import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Topbar from "../components/Topbar/Topbar";
import Footer from "../components/Footer/Footer";

export default function MainLayout(){
return (
	<span>
		<Topbar />
		<Navbar/>
		<Outlet />
		<Footer />
	</span>
)
}
