import './Header.css';
import logo from '../../images/logo.png';

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1 className="header__title">Морской бой</h1>
      <img className="header__logo" src={logo} />
    </header>
  );
};
export default Header;
