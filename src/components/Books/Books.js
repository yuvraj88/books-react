import React, { useContext } from "react";
import { Book } from "./Book";
import { BooksContext } from "../../context/BooksContext";
export default function Books() {
  const { search } = useContext(BooksContext);

  return search.map((book, index) => {
    return (
      <div key={index}>
        <Book
          image={book.image}
          isModalOpen={false}
          key={index}
          id={index}
          title={book.title}
          read_percentage={book.read_percentage}
          genre={book.genre}
          description={book.description}
          author={book.author}
        />

        <div style={styles.book__details}>
          <h3>{book.title.substr(0, 20)}... </h3>
          <p>{book.author}</p>
        </div>
      </div>
    );
  });
}

const styles = {
  book__details: {
    marginLeft: "20px",
  },
};
