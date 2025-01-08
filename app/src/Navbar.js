import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav className="bg-green-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">AA Eats</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
      </div>
    </nav>
  );

export default Navbar;