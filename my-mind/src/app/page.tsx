'use client';

import Image from "next/image";
import Link from 'next/link';
import Button, { Tutorial, Tutorial2 } from "@/components/Ex_Button";
import { useRouter } from 'next/navigation';
import TwoPage from "./page2/page";
import Navigation_Bar from "@/components/navigation_bar";
import Campus from "@/components/campus";
import useZoom from '@/hooks/zoom';
import BaseNode from "@/components/node";
import ToolBar from "@/components/tool_bar"

// 연습 페이지
const Nav = () => {
  return (
      <Link href="/page2">
        <Button className="shadow-md p-4">
          다음 페이지
        </Button>
      </Link>
  );
};


// 메인페이지
export default function Home() {

  const router = useRouter(); // 페이지 변경 객체
  const { scale } = useZoom(); // 줌 확대 축소 객체
  return (
      <main className="flex-grow max-w-6xl mx-auto p-4 mt-20">
        {/* 캠퍼스 */}
        <Campus>
            <BaseNode onClick={() => {}} hide={false} context="안녕" />

        </Campus>

        {/* tool_bar */}
        <ToolBar/>
      </main>
  );
}
