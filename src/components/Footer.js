import { AiOutlineLinkedin } from "react-icons/ai";
import { DiGithubAlt } from "react-icons/di";
import { HiOutlineMail } from "react-icons/hi";
import { RiTelegramLine } from "react-icons/ri";
import { Icons, StyledFooter } from "../styles/StyledFooter";

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <Icons>
          <a
            href="https://www.linkedin.com/in/abenezer-amare-b81a85218"
            target="_blank"
          >
            <AiOutlineLinkedin size={24} />
          </a>
          <a href="https://github.com/Ebenezer-A" target="_blank">
            <DiGithubAlt size={24} />
          </a>
          <a href="t.me/AbeniAw">
            <RiTelegramLine size={24} />
          </a>
          <a href="mailto:abenezerame@gmail.com">
            <HiOutlineMail size={24} />
          </a>
        </Icons>
        <p>Developed by Abenezer.</p>
      </StyledFooter>
    </>
  );
};

export default Footer;
