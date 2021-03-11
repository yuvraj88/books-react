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
    // height: 80px;
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
    background: ${({ theme }) => theme.toggleBorder};
    cursor: pointer;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
export const SettingsMobile = styled.div`
  display: none;
  @media (max-width: 768px) {
    margin: 10px;
    background-color: ${({ theme }) => theme.sidebarBackground};
    display: flex;
    justify-content: flex-end;
  }
`;
export const SettingsMobileInner = styled.div`
  padding: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.toggleBorder};
`;
export const SidebarData = styled.div`
  margin-left: 15px;
  margin-right: 15px;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const SidebarDataBottom = styled.div`
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 100px;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0px;
  }
`;
export const SettingsTitle = styled.h3`
  @media (max-width: 768px) {
    display: none;
  }
`;
export const SidebarBottom = styled.div``;
export const Container = styled.div`
  margin-left: 300px;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;
