import Footer from "./components/Footer";
import Header from "./components/Header";
import Skills from "./components/Skills";
import { Container } from "./styles/Container";
import { Global } from "./styles/Global";
import { About, Contact, Image, Main } from "./styles/Main";

const App = () => {
  return (
    <>
      <Global />
      <Container>
        {/* <GlobalFonts /> */}
        <Header />
        <Main>
          <strong>Software Engineer</strong>
          <Image src="./images/Cod-typing-pana.svg" alt="" />
          <Skills />
          <About id="about">
            <h3>About</h3>
            <p>
              I'm a software engineer based in addis ababa, Ethiopia. I am
              interested in full-stack development<br></br> and I am passtionate
              cloud computing and Dev-Ops.
            </p>
          </About>
          <Contact id="contact">
            <h3>Contact Me</h3>
            <p>
              Do you want to talk?
              <br />
              Let's make something incredible together!
            </p>
            <a href="mailto:abenezerame@gmail.com">Abenezerame@gmail.com</a>

            {/* <Form /> */}
          </Contact>
        </Main>
      </Container>
      <Footer />
    </>
  );
};

export default App;
