
import { useNavigate } from "react-router-dom"
import { links } from "../../Constants/Links"

const Header = () => {

    const navigate = useNavigate()

    return (
        <div className="w-screen h-16 bg-primaryBg fixed top-0 flex justify-between items-center px-8">
            <div>
                <h1 className=" font-mono text-2xl text-secondaryText font-semibold cursor-pointer" onClick={()=>navigate("/")}>VISHNU M K {"<>"}</h1>
            </div>
            <div onClick={()=>window.open(links.number, "_blank")} className=" cursor-pointer">
                <i className="fa fa-phone text-2xl rounded-full text-secondaryText"></i>
            </div>
            
        </div>
    )
}

export default Header
