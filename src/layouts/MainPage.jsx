import Navigation from "../components/Navigation.jsx"
import Footer from "../components/Footer.jsx"
import { Outlet } from "react-router-dom"

const MainPage = () => {
    return (
        <>
            <Navigation />
            <Outlet />
            <Footer />
        </>
    )
}

export default MainPage