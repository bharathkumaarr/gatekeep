import React from 'react'
import { Outlet } from 'react-router-dom'

function DashboardLayout() {
  return (
    <div className='flex min-h-screen'>
        {/* sidebar */}
        <aside className='w-64 bg-surface border-r border-zinc-800'> 
            <div className='p-4 font-semibold text-lg'>
                Gatekeep
            </div>
        </aside>

        {/* main contetn */}
        <main className='flex-1 p-6'>
            <Outlet />
        </main>
    </div>
  )
}

export default DashboardLayout
