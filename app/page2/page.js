"use client"

// pages/page2.js
import Head from 'next/head';
import Link from 'next/link';

export default function Page2() {
  return (
    <div style={styles.container}>
      <Head>
        <title>Step 2</title>
      </Head>

      <main style={styles.main}>
        <h1 style={styles.title}>Step 2: Are You Ready? 😌</h1>
        <p style={styles.description}>One more step to go:</p>
          <a style={styles.button} href="/final">Finish</a>
      </main>
      <div style={styles.flowerBackground}></div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    padding: '0 2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  main: {
    textAlign: 'center',
    zIndex: 2
  },
  title: {
    fontSize: '3rem',
    color: '#333',
  },
  description: {
    fontSize: '1.5rem',
    margin: '1rem 0',
    color: '#666',
  },
  button: {
    marginTop: '2rem',
    padding: '1rem 2rem',
    fontSize: '1.25rem',
    color: '#fff',
    backgroundColor: '#0070f3',
    textDecoration: 'none',
    borderRadius: '5px',
  },
  flowerBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'url("/flower-pattern.png")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: 1,
    opacity: 0.5,
  },
};