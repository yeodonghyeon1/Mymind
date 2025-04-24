'use client'
import '../styles/globals.css'
import Navigation_Bar from "@/components/navigation_bar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="grid-background" />

        {/* 고정 Navigation bar */}
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navigation_Bar />
        </div>
        {children}
      </body>
    </html>
  )
}