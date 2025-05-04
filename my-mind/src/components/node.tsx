'use client'

import React from 'react';
import useZoom from '@/hooks/zoom';


//기본 노드 인터페이스. 
/*
children: 상속 prop
Onclick(): 노드에 대한 정보 게시글 오픈용으로 사용할 것임
Size: 부모 자식 노드 간의 크기 설정으로 사용할 것이고 사용자가 직접 custom 할 수 있게 할 것임
hide: 숨기거나 오픈할 수 있게 할 것임
*/

interface Node{
    onClick: () => void;
    size?: 'sm' | 'md' | 'lg' | 'custom';
    hide: boolean;
    context: string;
}



const BaseNode:React.FC<Node> =  ({
 onClick: OnClick,
 hide: True,
 context,
}) =>{
    const { scale } = useZoom();
    
    return  (
        <div 
              className="transform hover:scale-120 transition-transform w-30 h-30 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center cursor-move select-none hover:text-gray-1200 hover:text-xl"
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                userSelect: 'none'
              }}
              onMouseDown={(e) => {
                const element = e.currentTarget;
                console.log("client xy:", e.clientX, e.clientY);
                const startX = e.clientX - (element.offsetLeft * scale);
                const startY = e.clientY - (element.offsetTop * scale);
                console.log("scale,start xy: ", scale, startX, startY)
                const onMouseMove = (moveEvent: MouseEvent) => {
                  console.log("moveevent: ", moveEvent.clientX)
                  
                  const adjustedX = (moveEvent.clientX - startX) / scale;
                  const adjustedY = (moveEvent.clientY - startY) / scale;
                  
                  element.style.left = `${adjustedX}px`;
                  element.style.top = `${adjustedY}px`;
                };
                const onMouseUp = () => {
                  document.removeEventListener('mousemove', onMouseMove);
                  document.removeEventListener('mouseup', onMouseUp);
                };
                document.addEventListener('mousemove', onMouseMove);
                document.addEventListener('mouseup', onMouseUp);
              }}
          >
            {context}
          </div>
    );
};

export default BaseNode


