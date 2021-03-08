import React, { useContext, useCallback, useState } from "react";
import { BooksContext } from "../../context/BooksContext";
import "./ListView.css";
import { FiChevronDown } from "react-icons/fi";
import { BsArrowUpDown } from "react-icons/bs";

const ListView = () => {
  const { search, setSearch } = useContext(BooksContext);
  const [sortBooksData, setSort] = useState(false);
  const sortBooks = useCallback(() => {
    if (sortBooksData === true) {
      let reSortBooks = search.sort((a, b) => {
        return a.id - b.id;
      });
      setSearch(reSortBooks);
      setSort(false);
    } else {
      let sortedBooks = search.sort((a, b) => {
        return a.read_percentage - b.read_percentage;
      });
      setSearch(sortedBooks);
      setSort(true);
    }
  }, [search, setSearch, sortBooksData]);

  return (
    <div style={{ margin: "40px" }}>
      <section>
        <header>
          <div className="col">
            Book Title & Author
            <span>
              <BsArrowUpDown />
            </span>
          </div>
          <div className="col">
            Genre
            <span>
              <BsArrowUpDown />
            </span>
          </div>
          <div className="col" onClick={sortBooks}>
            Reading Progress
            <span>
              {sortBooksData === false ? <BsArrowUpDown /> : <FiChevronDown />}
            </span>
          </div>
          <div className="col">
            Last Opened
            <span>
              <BsArrowUpDown />
            </span>
          </div>
        </header>

        {search.map((book, index) => {
          return (
            <BookData
              genre={book.genre}
              title={book.title}
              last_opened={book.last_opened}
              read_percentage={book.read_percentage}
              image={book.image}
              author={book.author}
              description={book.description}
              key={index}
            />
          );
        })}
      </section>
    </div>
  );
};
const BookData = ({
  author,
  title,
  image,
  genre,
  read_percentage,
  last_opened,
  description,
}) => {
  const { modal, setModal, setBookInfo } = useContext(BooksContext);
  const x = {
    genre,
    read_percentage,
    image,
    author,
    description,
    title,
  };
  return (
    <div
      className="row"
      onClick={() => {
        setModal(!modal);
        setBookInfo(x);
      }}
    >
      <div className="col first">
        <img
          src={image}
          alt="da"
          height="100"
          style={{ borderRadius: "10px" }}
        />
        <div className="second">
          <div style={{ width: "70%", fontWeight: "bold" }}>
            <p>{title}</p>
          </div>
          <div>
            <p>{author}</p>
          </div>
        </div>
      </div>
      <div className="col">{genre}</div>
      <div className="col">{read_percentage}</div>
      <div className="col">{last_opened}</div>
    </div>
  );
};
export default ListView;
