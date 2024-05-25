import React from 'react'
import { Navbar } from '../components/Navbar'
import {Sidebar} from '../components/Sidebar'
import { Feed } from '../components/Feed'


export function Home() {
  return (
    <>
    <Navbar />
    <Sidebar />
    <Feed />
    </>
  )
}