import Header from './Header.jsx';
import Footer from './Footer.jsx';

export default function Layout({ activePage, children }) {
  return (
    <>
      <Header activePage={activePage} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
