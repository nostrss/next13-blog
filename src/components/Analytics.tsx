'use client';
import Script from 'next/script';

export default function Analytics() {
  console.log(process.env.GA_ID);
  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_ID}`}
        strategy='afterInteractive'
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`window.dataLayer = window.dataLayer || []; 
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', ${process.env.GA_ID});
          `}
      </Script>
    </>
  );
}
