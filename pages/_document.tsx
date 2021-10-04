import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preload" href="/fonts/Recoleta/Recoleta-Bold.ttf" as="font" crossOrigin="" />
          <link rel="preload" href="/fonts/Recoleta/Recoleta-Black.ttf" as="font" crossOrigin="" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body className="loading">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
