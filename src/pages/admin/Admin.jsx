import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import SingleRouteHeader from '../../components/singleRouteHeader/SingleRouteHeader'

const Admin = () => {
  return (
    <div className='admin-page'>
      <div className="admin-page__content">
        <aside className="admin__sidebar">
          <ul>
              <li><NavLink className={"admin__sidebar-link"} to={"/admin/create"}>Create product</NavLink></li>
              <li><NavLink className={"admin__sidebar-link"} to={"/admin/manage"}>Manage product</NavLink></li>
          </ul>
        </aside>
        <div className="admin__content">
          <SingleRouteHeader name={"Admin"} arr={<></>} sname={<></>}/>
          <div className="admin__content-outlet">
            <Outlet/> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin