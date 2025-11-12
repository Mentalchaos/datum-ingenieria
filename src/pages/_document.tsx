import Document, { Html, Head, Main, NextScript } from "next/document";

const base = process.env.NODE_ENV === "production" ? "/datum-ingenieria" : "";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <style>{`:root{ --base-path: '${base}'; }`}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
