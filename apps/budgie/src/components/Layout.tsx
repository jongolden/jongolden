import AccountsList from './AccountsList';

const Layout = ({ className = 'layout', children }) => (
  <div className={className}>
    <AccountsList />
    <div>{children}</div>
  </div>
);

export default Layout;
