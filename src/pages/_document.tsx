import Document, { Html, Head, Main, NextScript } from "next/document";

// Si estás desplegando en GitHub Pages, este valor debe coincidir con tu repo
const base = process.env.NODE_ENV === "production" ? "/datum-ingenieria" : "";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          {/* Inyectamos una variable CSS con el basePath */}
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
