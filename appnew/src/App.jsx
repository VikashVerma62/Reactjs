import Layout from "./Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
// import NoPage from "./pages/NotPage";
import { BrowserRouter, Route ,Routes} from "react-router-dom";

const App=()=>{
  return( 
    <>
    <BrowserRouter>
    <Routes>


  <Route path="/" element ={<Layout/>}>
  <Route index element={<Home/>}/>
  <Route path="Home" element={<Home/>}/>
  <Route path="Contact" element={<Contact/>}/>
  <Route path="About" element ={<About/>}/>
  {/* <Route path="*" element={<NoPage/>}/> */}


</Route>

    </Routes>
    
    
    </BrowserRouter>
    
    </>
  )
}
export default App;