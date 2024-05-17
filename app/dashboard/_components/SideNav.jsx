import { GraduationCap, Hand, LayoutIcon, Settings } from 'lucide-react';
import Image from 'next/image'
import React from 'react'

function SideNav() {

    const sideNavList = [
        {
            id: 1,
            name: 'Dashboard',
            path: '/dashboard',
            icon: LayoutIcon
        },
        {
            id: 2,
            name: 'Students',
            path: '/dashboard/students',
            icon: GraduationCap
        },
        {
            id: 3,
            name: 'Attendance',
            path: '/dashboard/attendance',
            icon: Hand
        },
        {
            id: 4,
            name: 'Settings',
            path: '/dashboard/settings',
            icon: Settings
        },
    ];

    return (
        <div className='border shadow-md h-screen p-5'>
            <Image src={'/cite-logo.svg'} width={80} height={50} alt='logo' className='flex mx-auto mt-5' />
            <hr className='my-5' />
            {sideNavList.map((menu, index) => (
                <h2 className='flex items-center gap-3 text-md p-5 my-2
                text-slate-500
                hover:bg-black
                hover:text-white
                transition-all
                cursor-pointer
                rounded-lg'>
                    <menu.icon />
                    {menu.name}
                </h2>
            ))}
        </div>
    )
}

export default SideNav
