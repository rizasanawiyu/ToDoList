
import { Link, useParams } from 'react-router-dom';

function TodoDetail() {
  const { id } = useParams();

  return (
    <section>
      <h1>Detail Todo</h1>

      <p>ID Todo: {id}</p>
      <p>Judul: Contoh Todo {id}</p>
      <p>Status: Belum selesai</p>

      <Link to={`/todos/${id}/edit`}>
        Ubah Todo
      </Link>

      <br />
      <Link to="/">Kembali ke Home</Link>
    </section>
  );
}

export default TodoDetail;
