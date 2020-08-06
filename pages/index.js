import Head from 'next/head'
import Link from 'next/link'
import LoginForm from '../components/LoginForm'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Patient Portal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <h1 className="title">
          Welcome to the Patient Portal
        </h1> 
        <br />
        <Link href="/dashboard">
          <a>Dashboard</a>
        </Link>

        <div>
          <LoginForm />
        </div>
        </main>
    </div>
  )
}
