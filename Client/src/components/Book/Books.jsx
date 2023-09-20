import React, { useEffect, useState } from "react";
import "./Book.css";
import axios from "axios";
import Book from "./Book";
const URL = "https://ill-plum-nematode-sari.cyclic.cloud/books";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Books = () => {
  const [books, setBooks] = useState();
  const [rerender, setRerender] = useState(false);
  const changeState=()=>{
    setRerender(!rerender)
  }
  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, [rerender]);
  console.log(books);
  return (
    <div>
      <ul>
        {books &&
          books.map((book, i) => (
            <li key={i}>
              <Book book={book} callback={changeState} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Books;
