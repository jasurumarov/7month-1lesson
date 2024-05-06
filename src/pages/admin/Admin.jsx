import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import SingleRouteHeader from '../../components/singleRouteHeader/SingleRouteHeader'

const Admin = () => {
  return (
    <div className='admin-page'>
      <SingleRouteHeader name={"Admin"} arr={<></>} sname={<></>}/>
      <div className="admin-content">
        <aside className="admin__sidebar">
          <ul>
              <li><Link to={"create"}>Create product</Link></li>
              <li><Link to="manage">Manage product</Link></li>
          </ul>
        </aside>
        <div className="admin__content">
          <h2>Admin Panel</h2>
          <Outlet/> 
        </div>
      </div>
    </div>
  )
}

export default Admin