
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditTodo() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim()) return;

    alert(`Todo ID ${id} berhasil diubah (simulasi).`);
    navigate('/');
  }

  return (
    <section>
      <h1>Ubah Todo</h1>
      <p>ID Todo: {id}</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Judul Todo Baru</label>
        <input
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Masukkan judul baru"
          required
        />

        <button type="submit">Simpan Perubahan</button>
      </form>
    </section>
  );
}

export default EditTodo;
