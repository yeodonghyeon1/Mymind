'use client';

import Image from "next/image";
import Link from 'next/link';
import Button, { Tutorial, Tutorial2 } from "@/components/Ex_Button";
import { useRouter } from 'next/navigation';
import TwoPage from "./page2/page";
import Navigation_Bar from "@/components/navigation_bar";

const Nav = () => {
  return (
      <Link href="/page2">
        <Button className="shadow-md p-4">
          다음 페이지
        </Button>
      </Link>
  );
};

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <div className="flex-none">
        <Navigation_Bar></Navigation_Bar>
        </div>
        <main className="flex-grow max-w-6xl mx-auto p-4 mt-20">
        <Nav/>
        </main>
      </div>
    </div>
  );
}
