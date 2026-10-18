
import { Link } from 'react-router-dom';

function Home() {
  const todos = [
    { id: 1, title: 'Belajar React' },
    { id: 2, title: 'Mengerjakan tugas routing' },
  ];

  return (
    <section>
      <h1>To-do List</h1>

      <Link to="/todos/create">+ Buat Todo</Link>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}{' '}
            <Link to={`/todos/${todo.id}`}>
              Detail
            </Link>
            {' | '}
            <Link to={`/todos/${todo.id}/edit`}>
              Ubah
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Home;
