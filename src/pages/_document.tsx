import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="favicon.ico" type="image/ico" />
        <link rel="stylesheet" href="vender/bootstrap/css/bootstrap.min.css" />

        <link rel="stylesheet" href="vender/icons/icofont.min.css" />

        <link rel="stylesheet" href="vender/slick/slick/slick.css" />
        <link rel="stylesheet" href="vender/slick/slick/slick-theme.css" />

        <link href="vender/fontawesome/css/all.min.css" rel="stylesheet" />

        <link href="vender/sidebar/demo.css" rel="stylesheet" />

        <script src="vender/jquery/jquery.min.js"/>
        <script src="vender/bootstrap/js/bootstrap.bundle.min.js"/>

        <script src="vender/slick/slick/slick.min.js" />
        <script src="vender/sidebar/hc-offcanvas-nav.js" />
      </Head>
      <body className="bg-light" suppressHydrationWarning>
        <Main />
        <Script src="js/custom.js" strategy="lazyOnload"/>
        <NextScript />
      </body>
    </Html>
  );
}
