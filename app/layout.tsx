import "./globals.css";
import type { Metadata } from "next";
import {Inter} from "next/font/google";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "METAVERSE",
    description: "Explore different metaverses"
}

const RootLayout: React.FC<{children: React.ReactNode}> = ({children}) => {

    return(
        <html lang="en">
            <body >
                <main className="bg-primary-black overflow-hidden">
                    {children}
                </main>
            </body>
        </html>
    )
}

export default RootLayout;