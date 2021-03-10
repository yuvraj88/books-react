import React, { useContext } from "react";
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
  justify-content: space-around;
`;
const GridIconWithBorder = styled.div`
  border-radius: 10px;
  //border: 1px solid ${({ theme }) => theme.iconColor};
  background: ${({ theme }) => theme.iconColor};
  margin: auto;
  margin-right: 10px;

  padding: 15px;
  :hover {
    background: ${({ theme }) => theme.iconColor};
    cursor: pointer;
  }
`;
const GridIconWithoutBorder = styled.div`
  padding: 15px;
  border-radius: 10px;
  border: 1px solid transparent;
  margin: auto;
  margin-right: 10px;
  text-align: center;
  :hover {
    background: ${({ theme }) => theme.iconColor};
    cursor: pointer;
  }
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
    outline: none;
  }
`;

export default function Nav(props) {
  const { setMode, setSearch, mode } = useContext(BooksContext);

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
        {mode === "grid" ? (
          <>
            <GridIconWithBorder>
              <BsGrid onClick={() => setMode("grid")} />
            </GridIconWithBorder>
            <GridIconWithoutBorder>
              <BsList onClick={() => setMode("list")} />
            </GridIconWithoutBorder>
          </>
        ) : (
          <>
            <GridIconWithoutBorder>
              <BsGrid onClick={() => setMode("grid")} />
            </GridIconWithoutBorder>
            <GridIconWithBorder>
              <BsList onClick={() => setMode("list")} />
            </GridIconWithBorder>
          </>
        )}
        {/* <GridIconWithBorder>
          <BsGrid onClick={() => setMode("grid")} size={18} />
        </GridIconWithBorder>
        <GridIconWithBorder>
          <BsList onClick={() => setMode("list")} size={18} />
        </GridIconWithBorder> */}
        <InputSearch
          type="search"
          // icon={}
          onChange={(e) => {
            showFiltered(e);
          }}
        />
      </NacContainerIcons>
    </NavContainer>
  );
}
