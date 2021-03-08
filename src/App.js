import { Sidebar } from "./components/Sidebar/Sidebar";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { CgDarkMode } from "react-icons/cg";
import { FiPlayCircle } from "react-icons/fi";
import Books from "./components/Books/Books";
import Nav from "./components/Nav/Nav";
import React, { useState, useMemo } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./common/global";
import { lightTheme, darkTheme } from "./components/Theme";
import { books } from "./data/books";
import { BooksContext } from "./context/BooksContext";

import "./App.css";
import BookModal from "./components/ModalPopup/BookModal";
import ListView from "./components/Books/ListView";
const App = () => {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  const [modal, setModal] = useState("");
  const [bookInfo, setBookInfo] = useState(null);
  const [mode, setMode] = useState("grid");
  const [search, setSearch] = useState(books);
  const value = useMemo(
    () => ({
      modal,
      setModal,
      bookInfo,
      setBookInfo,
      mode,
      setMode,
      search,
      setSearch,
    }),
    [modal, setModal, bookInfo, setBookInfo, mode, setMode, search, setSearch]
  );

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <BooksContext.Provider value={value}>
        <div className="app">
          <Sidebar>
            <div style={{ marginLeft: "15px", marginRight: "15px" }}>
              <h3>Library</h3>
              <div
                style={{
                  backgroundColor: theme.background,
                  borderRadius: "20px",
                  padding: "20px 0",
                  border: `1px solid ${theme.background}`,
                  display: "flex",
                  justifyContent: "space-between",
                  textAlign: "center",
                  marginTop: "10px",
                  alignContent: "center",
                }}
              >
                <div style={{ marginLeft: "10px" }}>
                  <FiPlayCircle size={20} />
                  <span style={{ marginRight: "10px" }}></span> My Books
                </div>

                <div
                  style={{
                    borderRadius: "40px",
                    backgroundColor: "#F9F9F9",
                    marginRight: "10px",
                    padding: "5px 10px",
                  }}
                >
                  15
                </div>
              </div>
              <div
                style={{
                  padding: "20px 0",
                  display: "flex",
                  justifyContent: "space-between",
                  textAlign: "center",
                  marginTop: "10px",
                  alignContent: "center",
                }}
              >
                <div style={{ marginLeft: "10px" }}>
                  <AiOutlinePlusCircle size={20} />
                  <span style={{ marginRight: "10px" }}></span> Add New Book
                </div>
              </div>
            </div>
            <div
              style={{
                marginLeft: "15px",
                marginRight: "15px",
                marginTop: "100px",
              }}
            >
              <h3>Settings</h3>
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "20px",
                  padding: "20px 0",
                  border: "1px solid #ccc",
                  display: "flex",
                  justifyContent: "space-between",
                  textAlign: "center",
                  alignContent: "center",
                }}
              >
                <div>
                  <CgDarkMode size={20} />
                  <span> My Books</span>
                </div>

                <div>
                  <label className="switch">
                    <input type="checkbox" onChange={themeToggler} />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>
            </div>
          </Sidebar>

          <div style={{ marginLeft: "300px" }}>
            <Nav mode={mode} />
            {modal && <BookModal />}
            {mode === "grid" ? (
              <div className="grid">
                <Books books={search} />
              </div>
            ) : (
              <div className="list">
                <ListView />
              </div>
            )}
          </div>
        </div>
      </BooksContext.Provider>
    </ThemeProvider>
  );
};

export default App;
