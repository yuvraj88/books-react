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