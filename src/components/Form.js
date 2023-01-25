import { StyledForm, StyledInput } from "../styles/Main";

const Form = () => {
  return (
    <StyledForm>
      <StyledInput type="text" name="email" placeholder="Email" />
      <StyledInput type="text" name="fullname" placeholder="Full Name" />
      <textarea
        type="textarea"
        rows="15"
        name="message"
        placeholder="Message"
      />
      <button type="submit">Submit</button>
    </StyledForm>
  );
};

export default Form;
