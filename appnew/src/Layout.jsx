import {Link,Outlet} from "react-router-dom";
const Layout=()=>{
    <>
    <Link to="Home">Home</Link>
    <Link to="Contact">Contact</Link>
    <Link to="About">About</Link>
    <hr />
    <Outlet/>
    ww.company
    <hr />
    </>

}
export default Layout;