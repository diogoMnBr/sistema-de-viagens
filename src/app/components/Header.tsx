"use client";

import React from 'react'
import Image from 'next/image'
import { signIn, signOut, useSession } from 'next-auth/react';
import {AiOutlineMenu} from 'react-icons/ai'

const Header = () => {
    const [menuIsOpen,setMenuIsOpen] = React.useState(false)
    const {status, data} = useSession()

    const handleLoginClick = () => signIn()

    const handleLogoutClick = () => {
        setMenuIsOpen(false)
        signOut()
    }

    const handleMenuClick = () => setMenuIsOpen(!menuIsOpen)

    return ( 
        <div className="container mx-auto p-4 flex justify-between shadow-md">
            <div className="relative h-[62px] w-[133px]">
            <Image alt="logo do cabeçalho" src="/born-2020 (1).png" fill/>
            </div>

            {status === 'unauthenticated' && (
                <button className="text-primary text-sm font-semibold" onClick={handleLoginClick}>Login</button>
            )}

            {status === 'authenticated' && data.user && (
                <div className="flex items-center gap-3 border-grayLighter border border-solid rounded-full p-3 relative">
                    <AiOutlineMenu size={16} onClick={handleMenuClick} className="cursor-pointer"/>

                    <Image className="rounded-full shadow-md" width={30} height={30} alt={data.user.name!} src={data.user.image!}/>

                    {menuIsOpen && (
                        <div className="absolute top-12 left-0 w-full h-full bg-white rounded-lg shadown-md flex flex-col justify-center items-center">
                            <button className="text-primary text-sm font-semibold" onClick={handleLogoutClick}>
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
};

export default Header;