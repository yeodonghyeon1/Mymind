'use client';

import Image from "next/image";
import Link from 'next/link';
import Button, { Tutorial, Tutorial2 }  from "@/components/Button";
import {useRouter} from 'next/navigation';
import TwoPage from "./page2/page";

const Nav = () => {
  return (
    <nav>
      <Link href="/page2">
        <Button>상품</Button>
      </Link>
    </nav>
  );
};

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <h1>Hello World</h1>
      <div className="d-flex flex-row bd-highlight mb-3">
        <div className="p-2 bd-highlight">
          <div className="bg-red-500"><Tutorial /></div>
          <Tutorial />
          <Tutorial />
          <Tutorial />
          <Tutorial2 />
          <Nav></Nav>
          <Link href="/page2"><Button>누르기</Button></Link>
          <Button  onClick={() => router.push('/page2')}>기본 버튼</Button></div>
        <div className="flex flex-col p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-bold mb-2">제목</h2>
          <p className="text-gray-600">내용</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
            버튼
          </button>
        </div>

        <Button variant="secondary" size="lg">
          큰 사이즈 버튼
        </Button>
        <Button variant="secondary" size="sm" disabled>
          비활성화 버튼
        </Button>
      </div>
    </div>
  );
}
