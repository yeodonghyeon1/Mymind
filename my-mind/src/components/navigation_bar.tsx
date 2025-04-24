'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {useRouter} from 'next/navigation'


const Sign_in_up = () => {
    return (
        <div className="text-base text-gray-500 flex justify-end mx-4">
        <div className="mt-1 transform hover:scale-110 hover:text-gray-800 transition-transform"><Link href="/sign_in_page">Sign in</Link></div>
        <div className="mx-1 mt-1">/</div>
        <div className="mt-1 transform hover:scale-110 hover:text-gray-800 transition-transform"><Link href="/sign_up_page">Sign up</Link></div>
    </div>  
    )
}
const Navigation_Bar = () => {
    const router = useRouter();
    return(
        <div className="top-0 left-0 right-0 z-50 ">
            <div className="bg-white shadow-md p-4 mx-auto flex justify-between items-center max-w-screen-2xl rounded-2xl my-2">
                <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-bold text-gray-800 transform hover:scale-110 transition-transform">
                        <Link href="/" className="flex items-center">                    
                            <Image src="/icon.ico" alt="My Mind Logo" width={32} height={32}/>
                            <span className="ml-2 ">My Mind</span>
                        </Link>
                    </h1>
                </div>
                <Sign_in_up></Sign_in_up>
            </div>
        </div>
    )
}

export default Navigation_Bar