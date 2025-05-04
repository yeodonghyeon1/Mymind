'use client';

import React from 'react';
import Image from 'next/image'
import BaseNode from './node';
import { createRoot } from 'react-dom/client';
import Campus from "@/components/campus";

export function DeleteNode() {
    return;
}



// 수정 필요
export function InsertNode() {
    const campusContent = document.querySelector(".relative.w-full.h-full");
    if (campusContent) {
        const container = document.createElement('div');
        campusContent.appendChild(container);
        const newNode = <BaseNode onClick={() => {}} hide={false} context="새 노드" />;
        const root = createRoot(container);
        root.render(newNode);
    }
    return;
}

const ToolBar= () => {
    return (
        <div className="shadow-lg p-2 mx-auto flex justify-between bg-white border-2 border-gray-500 items-end max-w-screen-lg rounded-2xl fixed bottom-10 left-0 right-0">
            <div className="flex gap-4 items-center">
            <Image alt="one" src="/insertNode.png" width={50} height={50} className="hover:border-gray-800 border-2  transition-colors duration-300 rounded-lg cursor-pointer" 
                onClick={InsertNode}>

            </Image>
            <Image alt="one" src="/deleteNode.png" width={50} height={50} className="hover:border-gray-800 border-2  transition-colors duration-300 rounded-lg"></Image>
            </div>
        </div>
    )
};

export default ToolBar;