import { Playfair_Display, Plus_Jakarta_Sans, Cormorant_Garamond, DM_Sans } from "next/font/google";
import Script from "next/script";
import { ANALYTICS_CONFIG } from "@/lib/analytics";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
  preload: false,
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap", 
  preload: true,
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  preload: false,
});

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: false,
});

export const metadata = {
  title: "International Schooling Europe",
  description: "World-class education, anywhere.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable} ${cormorant.variable} ${dmSans.variable} h-full antialiased`}>
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${ANALYTICS_CONFIG.GTM_ID}');`,
          }}
        />

        {/* Facebook Pixel */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${ANALYTICS_CONFIG.FACEBOOK_PIXEL_ID}');
fbq('track', 'PageView');`,
          }}
        />

        {/* Microsoft Clarity */}
        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${ANALYTICS_CONFIG.CLARITY_ID}");`,
          }}
        />

        {/* Zoho Widget */}
        <Script
          id="zoho-widget"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `var d=document;var s=d.createElement('script');s.src='https://estimate.zohopublic.com/script?widgetcode=${ANALYTICS_CONFIG.ZOHO_WIDGET_CODE}';s.defer=true;s.async=true;var h=d.getElementsByTagName('head')[0];h.appendChild(s);window.zEmbed||function(c,m){var e,o={};try{c.deliveredScript=m;e=atob(m.split(".")[0]);for(var r="",a=0,t=e.split("|");a<t.length;a++)r+=String.fromCharCode(t[a].charCodeAt(0)-t[a].charCodeAt(0)%91);o.appToken=r}catch(e){o.appToken=m}}(window.zEmbed={},s.src);`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white font-[family-name:var(--font-body)]">
        {children}
      </body>
    </html>
  );
}
