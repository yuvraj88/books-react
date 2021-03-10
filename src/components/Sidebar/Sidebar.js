import styled from "styled-components";
export const Sidebar = styled.div`
  margin: 0;
  padding: 0;
  width: 300px;
  background-color: ${({ theme }) => theme.sidebarBackground};
  position: fixed;
  height: 100%;
  overflow: auto;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    position: relative;
  }
`;
export const Settings = styled.div`
  border-radius: 20px;
  padding: 20px 0;
  border: 1px solid ${({ theme }) => theme.sidebarBackground};
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin-top: 10px;
  align-content: center;
  :hover {
    background: #ccc;
  }
`;
