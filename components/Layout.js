import Head from 'next/head';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Rezzak -Web Developer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <main className="m-5 mt-[80px] p-5">{children}</main>
    </>
  );
};
export default Layout;
