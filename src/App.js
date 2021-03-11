import {
  Sidebar,
  Settings,
  SidebarDataBottom,
  Container,
  SidebarData,
  SettingsTitle,
  SettingsMobile,
  SettingsMobileInner,
} from "./components/Sidebar/Sidebar";
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
import Switch from "react-switch";
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
            <SidebarData>
              <h3>Library</h3>
              <div
                style={{
                  backgroundColor:
                    theme === "light"
                      ? lightTheme.background
                      : darkTheme.background,
                  borderRadius: "20px",
                  padding: "15px 0",
                  border: `1px solid ${theme.background}`,
                  display: "flex",
                  justifyContent: "space-between",
                  textAlign: "center",
                  marginTop: "10px",
                  alignContent: "center",
                }}
              >
                <div
                  style={{
                    marginLeft: "10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <FiPlayCircle size={20} />
                  <span style={{ marginRight: "10px" }}></span> My Books
                </div>

                <div
                  style={{
                    borderRadius: "40px",
                    backgroundColor:
                      theme === "light"
                        ? darkTheme.bookCount
                        : lightTheme.bookCount,
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
                <div
                  style={{
                    marginLeft: "10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <AiOutlinePlusCircle size={20} />
                  <span style={{ marginRight: "10px" }}></span> Add New Book
                </div>
              </div>
            </SidebarData>
            <SidebarDataBottom>
              <SettingsTitle>Settings</SettingsTitle>
              <Settings onClick={themeToggler}>
                <div
                  style={{
                    marginLeft: "10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <CgDarkMode size={20} />
                  <span style={{ marginRight: "10px" }}></span>
                  Dark Mode
                </div>

                <div
                  style={{
                    borderRadius: "40px",
                    marginRight: "10px",
                    padding: "5px 10px",
                  }}
                >
                  <Switch
                    onChange={themeToggler}
                    checked={theme === "light" ? false : true}
                    onColor={
                      theme === "dark"
                        ? darkTheme.switchOn
                        : lightTheme.switchOn
                    }
                    handleDiameter={8}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    height={10}
                    width={24}
                    className="react-switch"
                    id="material-switch"
                  />
                </div>
              </Settings>
              <SettingsMobile>
                <SettingsMobileInner>
                  <CgDarkMode
                    size={26}
                    onClick={themeToggler}
                    color={
                      mode === "light"
                        ? ({ theme }) => theme.iconColor
                        : ({ theme }) => theme.iconColor
                    }
                  />
                </SettingsMobileInner>
              </SettingsMobile>
            </SidebarDataBottom>
          </Sidebar>

          <Container>
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
          </Container>
        </div>
      </BooksContext.Provider>
    </ThemeProvider>
  );
};

export default App;
