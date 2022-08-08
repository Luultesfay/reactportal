import { useState } from "react";
const Form = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const subitHandler = (event) => {
    event.preventDefault();
    const inputData = {
      name: inputName,
      Email: inputEmail,
    };
    props.onSaveData(inputData);
    console.log(inputData);
    setInputName("");
    setInputEmail("");
  };
  return (
    <div className="form__container">
      <h1>ContactMe</h1>
      <form
        // style={{ display: "flex", flexDirection: "column" }}
        onSubmit={subitHandler}
      >
        <input
          type="text"
          placeholder="name"
          value={inputName}
          onChange={(event) => setInputName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={inputEmail}
          onChange={(event) => {
            setInputEmail(event.target.value);
          }}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
export default Form;
