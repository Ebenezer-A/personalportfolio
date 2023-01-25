import styled from "styled-components";

export const NavList = styled.ul`
  padding: 0 30px;
  display: flex;

  @media (max-width: 1024px) {
    font-size: 8px;
    flex-direction: column;
    position: absolute;
    right: 90px;
    top: 20px;
    background-color: white;
    padding: 0;
    margin: 0;
    z-index: 0;
  }

  span {
    padding: 0 25px;
    font-size: 20px;
    font-family: "DM Sans", sans-serif;
  }
`;
