import React from 'react'
import AdminSideBar from '../Pages/AdminSideBar'
import { Outlet } from 'react-router-dom'

const AdminPage = () => {
  return (
    <>
        <AdminSideBar/>
        <Outlet/>
    </>
  )
}

export default AdminPage