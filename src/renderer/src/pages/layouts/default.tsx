import React from 'react'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { Outlet } from 'react-router-dom'

export const Default: React.FC = () => (
  <div className="h-screen w-screen text-rotion-100 flex">
    <Sidebar />
    <div className="flex-1 flex flex-col max-h-screen">
      <Header />
      <Outlet />
    </div>
  </div>
)
