import Head from 'next/head';
import Error from '../components/Error';
export default function Custom404() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Head>
        <title>Jon4s</title>
        <meta name="theme-color" content="#282a36" />
        <meta name="description" content="My space on the web." />
      </Head>
      <Error code={404} message="This page could not be found." />
    </div>
  );
}
