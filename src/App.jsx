import NavBar from "./assets/Layout/NavBar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./assets/Pages/Home"

function App() {

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
