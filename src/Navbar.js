import { Link } from 'react-router-dom';

const Navbar = ({ onLogout }) => (
  <nav className="bg-white-600 text-black p-6 flex justify-between items-center">
    <Link to="/" className="flex items-center">
      <img
        src={require("./assets/knife.png")}
        alt="Logo"
        className="h-12 w-12 mr-2"
      />
      <h1 className="text-2xl font-bold">AA Eats</h1>
    </Link>
    <div>
      <button
        onClick={onLogout}
        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  </nav>
);

export default Navbar;
