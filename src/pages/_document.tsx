import { Head, Html, Main, NextScript } from 'next/document'

import HeadContent from './_partials/HeadContent'

export default function Document() {
  return (
    <Html lang="en">
      {/* you can use your head tags here */}
      <Head>
        <HeadContent />
      </Head>

      <body>
        {/* greate a global flag using emotion to import your fonts here, also put the colorModeScript if you are using it */}

        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
