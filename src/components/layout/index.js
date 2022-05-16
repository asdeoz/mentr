import Header from '../header';

const Layout = ({ hideHeader, children }) => (
  <>
    { !hideHeader && <Header hide={hideHeader} /> }
    <main className={ hideHeader ? '' : 'main-padded' }>
      {children}
    </main>
  </>
);

export default Layout;
