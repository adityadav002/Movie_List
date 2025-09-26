import { RiDashboardFill } from "react-icons/ri";
import { IoAddCircleOutline } from "react-icons/io5";
import { TiDeleteOutline } from "react-icons/ti";
import { CiUser } from "react-icons/ci";
import { MdAttractions } from "react-icons/md";
import { GiPlantsAndAnimals } from "react-icons/gi";
import { MdOutlineTheaterComedy } from "react-icons/md";
import { GiDramaMasks } from "react-icons/gi";
import { GiMaterialsScience } from "react-icons/gi";
import { TbPumpkinScary } from "react-icons/tb";
import { Link } from "react-router-dom";
import "../style/SideBar.css"

function SideBar() {
  return (
    <>
        <div className="sidebar">
            <div className="top">
            <Link to="/"><RiDashboardFill />Dashboard</Link>
            <Link to="user-management"><CiUser />User Management</Link>
            <Link to="add-movie"><IoAddCircleOutline />Add Movie</Link>
            <Link to="delete-movie"><TiDeleteOutline />Delete Movie</Link>
            </div>
            <br />
            <div className="bottom">
            <Link to="action"><MdAttractions />Action</Link>
            <Link to="animated"><GiPlantsAndAnimals />Animated</Link>
            <Link to="comedy"><MdOutlineTheaterComedy />Comedy</Link>
            <Link to="drama"><GiDramaMasks />Drama</Link>
            <Link to="scifi"><GiMaterialsScience />Sci-Fi</Link>
            <Link to="horror"><TbPumpkinScary />Horror</Link>
            </div>
        </div>
    </>
  )
}

export default SideBar