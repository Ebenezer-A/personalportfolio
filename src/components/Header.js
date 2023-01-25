import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiDownloadCloud } from "react-icons/fi";
import { NavList } from "../styles/NavList";
import { NavListFalse } from "../styles/NavListFalse";
import { StyledHeader } from "../styles/StyledHeader";
import { StyledMenu } from "../styles/StyledMenu";

const Header = () => {
  const [click, setClick] = useState(true);

  return (
    <>
      <StyledHeader>
        <h1>
          <a href="/">Abenezer</a>
        </h1>
        {click ? (
          <NavListFalse>
            <span>
              <a href="/">Home</a>
            </span>
            <span>
              <a href="#about">About</a>
            </span>
            <span>
              <a
                href="https://docs.google.com/document/d/1J7a1TafQwTs6VygSSBIJuYWCdFV58-VOa1_expda2J4/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <FiDownloadCloud />
                Resume
              </a>
            </span>
          </NavListFalse>
        ) : (
          <NavList>
            <span>
              <a href="/">Home</a>
            </span>
            <span>
              <a href="#about">About</a>
            </span>
            <span>
              <a
                href="https://docs.google.com/document/d/1J7a1TafQwTs6VygSSBIJuYWCdFV58-VOa1_expda2J4/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <FiDownloadCloud />
                Resume
              </a>
            </span>
          </NavList>
        )}

        <StyledMenu onClick={() => setClick(!click)}>
          {click ? <FaBars size={"22px"} /> : <FaTimes size={"22px"} />}
        </StyledMenu>
      </StyledHeader>
    </>
  );
};

export default Header;
