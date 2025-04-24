'use client'

import React from 'react';
import useZoom from '@/hooks/zoom';

interface campus{
    children?: React.ReactNode;
}


const Campus:React.FC<campus> = ({
    children
}) => {
    const { scale } = useZoom();
    return (
        <div className="bg-white">
            <div className="relative w-full h-screen bg-white absolute inset-0 border-1" 
                style={{
                    transform: `scale(${scale})`,
                    transformOrigin: '50% 50%', // 중앙 기준점 설정
                    backgroundImage: `
                      linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                      linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)`,
                    backgroundSize: '24px 24px',
                    position: 'fixed',
                }} />
            <div 
                className="relative w-full h-full"
                style={{
                    transformOrigin: '50% 50%', // 중앙 기준점 설정
                    position: 'absolute', // 절대 위치 지정
                    top: '50%', // 상단에서 50% 
                    left: '50%', // 좌측에서 50%
                    transform: `translate(-50%, -50%) scale(${scale})`, // 중앙 정렬 및 스케일 적용
                }}>
                {children}
            </div>
        </div>
    );
};

export default Campus