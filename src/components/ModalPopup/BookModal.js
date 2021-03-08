import React, { useContext } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { BooksContext } from "../../context/BooksContext";
import { AiOutlineCloseCircle } from "react-icons/ai";
const CloseButton = styled.button`
  padding: 10px 10px;
  border-radius: 10px;
  background-color: #eee;
  border: 1px solid #eee;
`;
const ContinueReading = styled.button`
  width: 300px;
  padding: 10px 10px;
  border-radius: 10px;
  background-color: #2579f0;
  border: 1px solid #2579f0;
  margin-left: 10px;
  color: #fff;
`;
const TopCloseIcon = styled.p`
  position: absolute;
  top: 8px;
  right: 16px;
  font-size: 18px;
`;
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "2% 5% 8%",
    borderRadius: "30px",
  },
};
const BookContainer = styled.div`
  width: 400px;
  height: 500px;
  background: white;
  text-align: center;
`;
const BookModal = (props) => {
  const { setModal, bookInfo } = useContext(BooksContext);
  const { image, title, author, description } = bookInfo;
  return (
    <Modal
      isOpen={true}
      ariaHideApp={false}
      // onAfterOpen={afterOpenModal}
      onRequestClose={() => setModal(false)}
      style={customStyles}
    >
      <TopCloseIcon>
        <AiOutlineCloseCircle size={28} onClick={() => setModal(false)} />
      </TopCloseIcon>
      <BookContainer>
        <img src={image} height="350" alt="" style={{ borderRadius: "30px" }} />
        <h3>{title}</h3>
        <p>{author}</p>
        <p>{description}</p>

        <CloseButton onClick={() => setModal(false)}>Close</CloseButton>
        <ContinueReading onClick={() => setModal(false)}>
          Continue Reading
        </ContinueReading>
      </BookContainer>
    </Modal>
  );
};
export default BookModal;
