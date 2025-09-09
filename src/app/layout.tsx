"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Raleway } from "next/font/google";
import Script from "next/script";
import "../styles/index.css";
import { Providers } from "./providers";

const raleway = Raleway({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={`bg-[#FCFCFC] dark:bg-black ${raleway.className}`}>
        {/* ✅ Google Translate Script */}
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />

        {/* ✅ Init Script */}
        {/* <Script id="google-translate-init" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'en,ar,hi,ta,te,ml,kn,gu,pa,bn,ur,mr,ne,sd,or,as,ks,fr,de,es,it,zh,ja,ko,ru,pt,tr',
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE
              }, 'google_translate_element');
            }
          `}
        </Script> */}

        {/* ✅ WATI WhatsApp Widget */}
        <Script id="wati-widget" strategy="afterInteractive">
          {`
            (function() {
              var url = 'https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?95632';
              var s = document.createElement('script');
              s.type = 'text/javascript';
              s.async = true;
              s.src = url;
              var options = {
                "enabled": true,
                "chatButtonSetting": {
                  "backgroundColor": "#00e785",
                  "ctaText": "Chat with us",
                  "borderRadius": "25",
                  "marginLeft": "0",
                  "marginRight": "20",
                  "marginBottom": "20",
                  "ctaIconWATI": false,
                  "position": "right"
                },
                "brandSetting": {
                  "brandName": "Wayone",
                  "brandSubTitle": "undefined",
                  "brandImg": "https://4ucs.in/assets/images/logofinal.png",
                  "welcomeText": "Hi there!\\nHow can I help you?",
                  "messageText": "Hello,\\nI want ",
                  "backgroundColor": "#00e785",
                  "ctaText": "Chat with us",
                  "borderRadius": "25",
                  "autoShow": false,
                  "phoneNumber": "919229128072"
                }
              };
              s.onload = function() {
                CreateWhatsappChatWidget(options);
              };
              var x = document.getElementsByTagName('script')[0];
              x.parentNode.insertBefore(s, x);
            })();
          `}
        </Script>

        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
