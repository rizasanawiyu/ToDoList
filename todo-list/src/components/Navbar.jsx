import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      {' | '}
      <Link to="/todos/create">Buat Todo</Link>
    </nav>
  );
}

export default Navbar;