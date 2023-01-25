import styled from "styled-components";

export const StyledHeader = styled.header`
  @import url("https://fonts.googleapis.com/css2?family=Space+Mono&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=DM+Sans&display=swap");

  background-color: white;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 4px solid;

  h1 {
    font-family: "Space Mono", monospace;
  }

  div {
    font-family: "DM Sans", sans-serif;
  }

  a {
    text-decoration: none;
    color: #000;
  }
`;
