import './App.css';
import Navbar from "./Components/Navbar/Navbar"
import Search from "./Components/Search/Search"
import Job from "./Components/Job/Job"
import Value from "./Components/Value/Value"
import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <div className='w-[85%] bg-white m-auto'>
     <Navbar/> 
     <Search/>
     <Job/>
     <Value/>
     <Footer/>
    </div>
  )
}

export default App
