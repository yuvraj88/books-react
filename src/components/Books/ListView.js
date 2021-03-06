import React, { useContext, useCallback, useState } from "react";
import { BooksContext } from "../../context/BooksContext";
import "./ListView.css";
import { FiChevronDown } from "react-icons/fi";
import { BsArrowUpDown } from "react-icons/bs";
import styled from "styled-components";

const ListViewWrapper = styled.div`
  margin: 40px;
  @media (max-width: 768px) {
    margin: 10px;
  }
`;
const ListView = () => {
  const { search, setSearch } = useContext(BooksContext);
  const [sortBooksData, setSort] = useState(false);
  // TimeAgo.addDefaultLocale(en);

  const sortBooks = useCallback(
    (type) => {
      if (sortBooksData === true) {
        let reSortBooks = search.sort((a, b) => {
          return a.id - b.id;
        });
        setSearch(reSortBooks);
        setSort(false);
      } else {
        let sortedBooks;
        if (type === "perc") {
          sortedBooks = search.sort((a, b) => {
            return a.read_percentage - b.read_percentage;
          });
        } else if (type === "author") {
          sortedBooks = search.sort((a, b) => {
            return ("" + a.title).localeCompare(b.title);
          });
        } else if (type === "genre") {
          sortedBooks = search.sort((a, b) => {
            return ("" + a.genre).localeCompare(b.genre);
          });
        } else if (type === "last") {
          sortedBooks = search.sort((a, b) => {
            return ("" + a.last_opened).localeCompare(b.last_opened);
          });
        }
        setSearch(sortedBooks);
        setSort(true);
      }
    },
    [search, setSearch, sortBooksData]
  );

  return (
    <ListViewWrapper>
      <section>
        <header>
          <div
            className="col mobile__header"
            onClick={() => sortBooks("author")}
          >
            Book Title & Author
            <span>
              <BsArrowUpDown />
            </span>
          </div>
          <div className="col mobile" onClick={() => sortBooks("genre")}>
            Genre
            <span>
              <BsArrowUpDown />
            </span>
          </div>
          <div className="col mobile__header" onClick={() => sortBooks("perc")}>
            {/* <span> */}
            {sortBooksData === false ? (
              <>
                Reading Progress
                <BsArrowUpDown />
              </>
            ) : (
              <>
                Reading Progress
                <FiChevronDown />
              </>
            )}
            {/* </span> */}
          </div>
          <div className="col mobile" onClick={() => sortBooks("last")}>
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
    </ListViewWrapper>
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
      <div className="col first mobile__header">
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
      <div className="col mobile">{genre}</div>
      <div className="col mobile__header">{read_percentage}%</div>
      <div className="col mobile">{last_opened}</div>
    </div>
  );
};
export default ListView;
