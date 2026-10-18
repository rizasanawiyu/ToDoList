
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateTodo() {
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim()) return;

    alert(`Todo "${title}" berhasil dibuat (simulasi).`);
    navigate('/');
  }

  return (
    <section>
      <h1>Buat Todo</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Judul Todo</label>
        <input
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Masukkan judul Todo"
          required
        />

        <button type="submit">Simpan Todo</button>
      </form>
    </section>
  );
}

export default CreateTodo;
