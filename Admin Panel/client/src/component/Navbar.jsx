import "../style/Navbar.css"
import { RiMovieLine } from "react-icons/ri";
import { RxPerson } from "react-icons/rx";

function Navbar() {
  return (
    <>
    <div className="container">
        <div className="logo">
            <h1 className="logo_img"><RiMovieLine /> MovieDB</h1>
        </div>
        <div className="Admin">
            <h1 className="logo_img"><RxPerson /></h1>
            <h2>Admin</h2>
        </div>

    </div>
    </>
  )
}

export default Navbar