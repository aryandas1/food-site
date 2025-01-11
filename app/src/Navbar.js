import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-white-600 text-black p-6 flex justify-between items-center">
    <Link to="/" className="flex items-center">
      <img
        src={require("./assets/knife.webp")}
        alt="Logo"
        className="h-12 w-12 mr-2"
      />
      <h1 className="text-2xl font-bold">AA Eats</h1>
    </Link>
  </nav>
);
export default Navbar;