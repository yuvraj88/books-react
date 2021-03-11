import React, { useContext } from "react";
import styled from "styled-components";
import { BooksContext } from "../../context/BooksContext";

const BookStyle = styled.div`
  color: #fff;
  font-size: 1em;
  margin: 1em;
  height: 350px;
  width: 220px;
  padding: 0.25em 1em;
  border-radius: 20px;
  background-image: url(${(props) => props.background || "palevioletred"});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  @media (max-width: 768px) {
    height: 250px;
    width: 140px;
    padding: 0.25em 1em;
  }
`;

const ReadPercentage = styled.div`
  width: 40px;
  opacity: 0.9;
  height: 15px;
  padding: 10px;

  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  text-align: center;
  position: absolute;
  top: 8px;
  left: 1px;
  font-size: 14px;
  height: 20px;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  position: relative;
  overflow: hidden;
`;
const Genre = styled.div`
  background: #000;
  opacity: 0.8;
  // height: 15px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #000;
  position: absolute;
  bottom: 8px;
  right: 16px;
  font-size: 14px;
  text-align: center;
  font-weight: bold;
  color: white;
`;
export const Book = (props) => {
  const { modal, setModal, setBookInfo } = useContext(BooksContext);
  const x = {
    genre: props.genre,
    read_percentage: props.read_percentage,
    image: props.image,
    author: props.author,
    description: props.description,
    title: props.title,
  };
  return (
    <>
      <BookStyle
        background={props.image}
        onClick={() => {
          console.log(props.genre);
          setModal(!modal);
          setBookInfo(x);
        }}
      >
        {/* {props.title} */}
        <ReadPercentage>{props.read_percentage}%</ReadPercentage>
        <Genre>{props.genre}</Genre>
      </BookStyle>
    </>
  );
};
