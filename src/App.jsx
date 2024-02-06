import { Outlet } from "react-router-dom"
import Navbar from "./components/layouts/Navbar/Navbar"
import Homepage from "./pages/Home/Homepage"
import Footer from "./components/layouts/Footer/Footer"


function App() {

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
