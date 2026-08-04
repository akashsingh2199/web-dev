import Header from "./componect/header/header";
import Footer from "./componect/footer/footer";
import { Outlet } from "react-router-dom";

function Layout (){
return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
)
}

export default Layout
