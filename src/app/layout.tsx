import type { Metadata } from "next";
import { Readex_Pro } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import Image from "next/image";

const readex = Readex_Pro({
  subsets: ["latin", "arabic"],
  variable: "--font-geist-sans",
  weight: ["400", "500", "700"],
  preload: true,
});
export const metadata: Metadata = {
  title: "التمويل الالكتروني | تمويل يصل الي 6 مليون",
  description: "التمويل الذكي | تمويل يصل الي 6 مليون لكل فئات",
  icons: "/images/logo.jpeg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${readex.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ReactQueryProvider>
          <Analytics />
          <SpeedInsights />
          {children}
          <Toaster
            richColors
            position="top-center"
            duration={3000}
            closeButton={true}
          />
        </ReactQueryProvider>
        {/* <Script id="facebook-pixel" strategy="afterInteractive">
          {`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');

    fbq('init', '2735961770130265');
    fbq('track', 'PageView');
  `}
        </Script>
        <noscript>
          <Image
            height="1"
            alt=""
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2735961770130265&ev=PageView&noscript=1"
          />
        </noscript> */}
      </body>
    </html>
  );
}
