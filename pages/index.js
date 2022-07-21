import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title> ERA-Emmett </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to ERA-Emmett!" />
        <p className="description">
          If You See Emmett In real life, Ask him if you can join our team! <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
