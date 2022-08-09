import { useRef } from "react";
/**
 * The useRef hook is a built-in React hook that takes one argument
 * or parameter as its initial value and returns a reference.
 *  The reference has an interesting and useful property called current.
 * */
//usage
/**One of the most useful features of the useRef hook is that the data or value in a reference
 * or ref remains the same, even after component re-rendering.
 * Also, if you update a reference, it does not affect the rendering of the app, unlike states.
 * */
///useRef vs useState
/**
 *1, References do not affect component rendering but states do.
2,useState returns two properties or an array. One is the value or state and the other is the function to update the state. In contrast,
3, useRef returns only one value, which is the actual data stored.
 When the reference value is changed, it is updated without the need to refresh or re-render. 
 However in useState, the component must render again to update the state or its value.

 //When to Use Refs and States
 */
/**
Refs are useful when getting user input, DOM element properties and storing constantly updating values.

If you are storing component related info or use methods in components, however, states are the best option.} props 
 *
// important note :  if we access user value using 'ref' then the vlaue is unconrolled by react(called also unconrolled componenet)
//but if we access using use state to the user input then its conrolled value(also called controlled componenet)

so we have here uncontroled component  but in master branch we have controled component since we use  useState we control every keystrok by react
 */
const Form = (props) => {
  const inputUserName = useRef();
  const inputUserEmail = useRef();
  const subitHandler = (event) => {
    event.preventDefault();
    const name = inputUserName.current.value;
    const Email = inputUserEmail.current.value;

    props.onSaveData(name, Email);

    inputUserName.current.value = "";
    inputUserEmail.current.value = "";
  };
  return (
    <div className="form__container">
      <h1>ContactMe</h1>
      <form
        // style={{ display: "flex", flexDirection: "column" }}
        onSubmit={subitHandler}
      >
        <input type="text" placeholder="name" ref={inputUserName} />
        <input type="text" placeholder="Email" ref={inputUserEmail} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
export default Form;
