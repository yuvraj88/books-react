import React, { useContext } from "react";
import "./nav.css";
import { BsGrid, BsList } from "react-icons/bs";
import { BooksContext } from "../../context/BooksContext";
import styled from "styled-components";
import { books } from "../../data/books";
import Logo from "./../../logo.svg";

const NavContainer = styled.div`
  height: 50px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  padding: 30px;
  border-bottom: 1px solid #ccc;
  border-radius: 10px;
  margin-left: 2%;
`;
const NacContainerIcons = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const InputSearch = styled.input`
  width: 50px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border: none;
  border: solid 1px #ccc;
  border-radius: 10px;
  font-size: 16px;
  background-color: #f0f0f0;
  background-repeat: no-repeat;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
  background: url(${Logo}) no-repeat scroll 7px 7px;
  background-position: left;

  &:focus {
    width: 350px;

    background: url(${Logo}) no-repeat scroll 7px 7px;
    background-position: left;
    padding-left: 50px;
  }
`;

export default function Nav() {
  const { setMode, setSearch } = useContext(BooksContext);

  const showFiltered = (e) => {
    const { value } = e.target;
    let searchBooks = [];
    for (let i = 0; i < books.length; i++) {
      if (books[i].title.toLowerCase().includes(value)) {
        searchBooks.push(books[i]);
      }
    }
    setSearch(searchBooks);
  };
  return (
    <NavContainer>
      <h2>Book Library ...</h2>
      <NacContainerIcons>
        <BsGrid
          onClick={() => setMode("grid")}
          size={24}
          style={{
            padding: "10px",
            borderRadius: "10px",
            border: `1px solid ${({ theme }) => theme.toggleBorder}`,
            backgroundColor: `${({ theme }) => theme.toggleBorder}`,
            marginRight: "10px",
          }}
        />
        <BsList
          onClick={() => setMode("list")}
          size={24}
          style={{
            padding: "10px",
            borderRadius: "10px",
            border: `1px solid ${({ theme }) => theme.background}`,
            backgroundColor: `${({ theme }) => theme.background}`,
            marginRight: "10px",
          }}
        />

        <InputSearch
          type="search"
          // icon={}
          onChange={(e) => {
            showFiltered(e);
          }}
        />

        {/* <input className="extand" /> */}
      </NacContainerIcons>
    </NavContainer>
  );
}
