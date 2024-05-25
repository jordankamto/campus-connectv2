import React from 'react'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <Navbar />
    <Sidebar />
    <main>
        <Outlet/>
    </main>
    </>
  )
}
