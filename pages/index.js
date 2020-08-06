import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Patient Portal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ textAlign: 'center' }}>
        <h1 className="title">
          Welcome to the Patient Portal
        </h1>
        <Link href="/dashboard">
          <a>Dashboard</a>
        </Link>
        </main>
    </div>
  )
}
