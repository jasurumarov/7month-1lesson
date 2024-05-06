import React, {useState} from 'react'
import { Link, useLocation } from 'react-router-dom'

// IMAGES
import SiteLogo from '../../images/site-logo.svg'
import MenuIcon from '../../images/menuIcon.svg'
import { IoMenu, IoSearch } from 'react-icons/io5'
import { CiLocationOn } from 'react-icons/ci'
import { FaAngleDown, FaRegHeart } from 'react-icons/fa6'
import { LuUser } from 'react-icons/lu'
import { GrCart } from 'react-icons/gr'
import { SlFire, SlRefresh } from 'react-icons/sl'
import { TfiHeadphoneAlt } from 'react-icons/tfi'

const Header = () => {
    let {pathname} = useLocation()
    if(pathname.includes("/register") || pathname.includes("/admin")){
        return <></>
    }

    const [toggle, setToggle] = useState(false)
    let token = localStorage.getItem("x-auth-token")
  return (
    <header>    
        <div className="main-header">
            <div className="container">
                <div className="main-header__content">
                    <Link className='main-header__logo' to={"/"}>
                        <img src={SiteLogo} alt="Site Logo" />
                    </Link>
                    <div className="main-header__search">
                        <select name="categories" id="categories">
                            <option selected value="all">All Categories</option>
                            <option value="el">Mens clothes</option>
                            <option value="el">Womn clothes</option>
                            <option value="el">Shoes</option>
                            <option value="el">Bags</option>
                            <option value="el">Watches</option>
                        </select>
                        <span>|</span>
                        <input type="search" placeholder='Search for items...' />
                        <div><IoSearch className='main-header__search--icon'/></div>
                    </div>
                    <div className="main-header__nav">
                        <div>
                            <Link className='main-header__nav--btns' to={"/"}>
                                <SlRefresh />
                                <span>Compare</span>
                            </Link>
                            <Link className='main-header__nav--btns' to={"/"}>
                                <FaRegHeart />
                                <span>Wishlist</span>
                            </Link>
                            <Link className='main-header__nav--btns' to={"/"}>
                                <GrCart />
                                <span>Cart</span>
                            </Link>
                            <Link className='main-header__nav--btns' to={`${token ? "/admin" : "/register"}`}>
                                <LuUser />
                                <span>{token ? "Admin" : "Account"}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header