import styled from "styled-components";

export const Main = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Space+Mono&display=swap");

  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  margin: 30px 0;
  text-align: center;

  strong {
    text-align: center;
    font-family: "Space Mono", monospace;
    font-size: 70px;
  }

  h3 {
    font-family: "Space Mono", monospace;
    font-size: 20px;
  }

  p {
    font-family: "Space Mono", monospace;
    font-size: 15px;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-height: 400px;
  margin: 10px 0;
`;

export const SkillList = styled.ul`
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  span {
    font-size: 17px;
    padding: 10px 15px;
    margin: 2px 4px;
    border: 0.15rem solid #000;
    border-radius: 20px;
    background-color: #fff;
  }
`;

export const About = styled.div`
  padding: 20px 10px;

  p {
    font-size: 17px;
  }
`;
export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  align-items: center;

  p {
    font-size: 20px;
  }

  a {
    text-decoration: underline;
    font-size: 25px;
    color: #000;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  padding: 20px 0;

  button {
    padding: 10px 0;
    margin: 5px 0;
    border: 0.17rem solid black;
    border-radius: 10px;
  }

  textarea {
    border: 0.17rem solid black;
    border-radius: 10px;
    padding: 5px 10px;
  }
`;

export const StyledInput = styled.input`
  border: 0.17rem solid black;
  border-radius: 10px;
  margin: 5px 0;
  padding: 10px 5px;

  &:focus {
    outline: none;
  }
`;
