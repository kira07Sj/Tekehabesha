import Navigation from "../components/Navigation.jsx"
import Footer from "../components/Footer.jsx"
import { Outlet } from "react-router-dom"

const MainPage = () => {
    return (
        <body className="h-[100vh]">
            <Navigation />
            <Outlet />
            <Footer />
        </body>
    )
}

export default MainPage