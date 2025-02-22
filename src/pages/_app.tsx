import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title> RA - Boilerplate </title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A single project starter to work with Typescript, React,
          NextJS and Styled components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />{' '}
    </>
  )
}

export default App
