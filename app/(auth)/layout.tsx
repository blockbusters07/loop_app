//import { ClerkProvider } from "@clerk/nextjs/app-beta";
import { Inter } from "next/font/google";
import React from "react";
import { ClerkProvider } from '@clerk/nextjs';

import "../globals.css";

export const metadata = {
    title: 'Loop',
    description: 'A Next.js 13 Meta Loop Application'
}

const inter = Inter({subsets: ["latin"]})

export default function RootLayout({
    children
} : {
    children: React.ReactNode
}) {
    return (
    <ClerkProvider>
        <html lang = "en">
            <body className= {`${inter.className} bg-dark-1`}>
                <div className="w-full flex justify-center items-center min-h-screen">
                    {children}
                </div>
                {children}
            </body>
        </html>
    </ClerkProvider>
    )
}
