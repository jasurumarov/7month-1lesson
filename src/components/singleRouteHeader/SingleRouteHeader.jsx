import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const SingleRouteHeader = ({name, arr, sname}) => {
  return (
    <div className='single-header'>
        <div className="container">
            <nav>
                <Link to={"/"}>
                    <AiOutlineHome />
                    <p>Home</p>
                </Link>
                <span>&gt;</span>
                <Link className={name === "Login" || name === "Admin" ? 'notGreen' : ""} to={"/"}>
                    <p>{name}</p>
                </Link>
                <span>{arr}</span>
                <Link>
                    <p>{sname}</p>
                </Link>
            </nav>
        </div>
    </div>
  )
}

export default SingleRouteHeader