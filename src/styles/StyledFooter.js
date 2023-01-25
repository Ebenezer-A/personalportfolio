import styled from "styled-components";

export const StyledFooter = styled.footer`
  @import url("https://fonts.googleapis.com/css2?family=DM+Sans&display=swap");

  background-color: black;
  color: white;
  padding-top: 60px;
  padding-bottom: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    font-family: "DM Sans", sans-serif;
    font-size: 13px;
    margin-bottom: 0px 0px 3px;
  }
`;

export const Icons = styled.div`
  display: flex;

  a {
    padding: 0 15px;
    color: #fff;
  }
`;
