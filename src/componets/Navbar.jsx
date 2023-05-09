import { Link } from 'react-router-dom';
import '../styling/navbar.css';
const Navbar = () => {
  const navBar = [
    { title: 'Home', slug: '/' },
    { title: 'About', slug: '/about' },
  ];
  return (
    <section className="navbar_section">
      <nav className="nav_div">
        <ul className="nav_ul">
          <Link to="/">
            <img
              className="logo"
              src="https://www.shutterstock.com/image-vector/db-initials-monogram-letter-text-260nw-1821601613.jpg"
            ></img>
          </Link>
          {navBar.map((i, id) => (
            <li className="nav_li" key={id}>
              <Link to={i.slug}>{i.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};
export default Navbar;
