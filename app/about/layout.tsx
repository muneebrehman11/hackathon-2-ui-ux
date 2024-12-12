import type { Metadata } from "next";
import AboutHeader from "./about-header";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function AboutLayout({children}: Readonly<{children: React.ReactNode;}>) {
    return (

        <div>

            <AboutHeader />
            {children}
        </div>
        
      
    )}



