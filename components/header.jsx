
import React from "react"
import { FiSearch } from "react-icons/fi";
const Header = () => {

    return (
        <div dir="rtl" className="header-box">
            <div>
                <img className="header-logo me-sm-5 me-2" src="img/Group.png" alt="" />
                <img className="header-didimoon me-sm-4 me-2" src="img/didimoon.png" alt="" />
            </div>
            <div className="d-flex align-items-center ">
                <div className="header-search"> <FiSearch /> </div>
                <button type="button" className="btn btn-didimoon ms-sm-5 ms-2">ورود</button>
            </div>
        </div>
    )
}
export default Header