import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <link rel='icon' type='image/jpg' href='/logo.jpg'/>
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
