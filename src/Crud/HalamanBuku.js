import React, { useState } from "react";
import "./BookForm.css";

const BookForm = () => {
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState({
    nama: "",
    author: "",
    deskripsi: "",
    harga: "",
  });

  const [displayedValue, setDisplayedValue] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBook({
      ...book,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Data Buku:", book);

    setBooks([...books, book]);

    const bookInfo = `Nama: ${book.nama}, Penulis: ${book.author}, Deskripsi: ${book.deskripsi}, Harga: ${book.harga}`;

    setDisplayedValue(bookInfo);

    setBook({
      nama: "",
      author: "",
      deskripsi: "",
      harga: "",
    });
  };

  return (
    <div className="book-form-container">
      <h2>Formulir Buku</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nama">Nama Buku:</label>
          <input
            type="text"
            id="nama"
            name="nama"
            value={book.nama}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Penulis:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={book.author}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="deskripsi">Deskripsi:</label>
          <textarea
            id="deskripsi"
            name="deskripsi"
            value={book.deskripsi}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="harga">Harga:</label>
          <input
            type="text"
            id="harga"
            name="harga"
            value={book.harga}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Tambah Buku</button>
      </form>
      {displayedValue && (
        <div className="info-container">
          <h3>Informasi di atas:</h3>
          <p>{displayedValue}</p>
        </div>
      )}

      {books.length > 0 && (
        <div className="book-list-container">
          <h3>Daftar Buku:</h3>
          <ul>
            {books.map((b, index) => (
              <li key={index}>
                Nama: {b.nama}, Penulis: {b.author}, Deskripsi: {b.deskripsi}, Harga: {b.harga}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BookForm;
