import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import SignIn from "./pages/SignIn"
import SingUp from "./pages/SingUp"
import Blog from "./pages/Blog"
import Destination from "./pages/Destination"
import About from "./pages/About"


function App() {
  return (
    <Router>
      <Navbar />
      <div className="mt-[80px] text-text">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/sign-up" element={<SingUp />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </div>
    </Router >
  )
}
export default App
