import React from "react";
import "./App.css";
//import Greeting from "./Greeting";
//import portalDom from "react-dom";
import { useState } from "react";
import Form from "./components/Form";
import Error from "./components/Error";
/**
 * 
 *This React portal component exists outside the DOM hierarchy of the parent component.
  When the child component visually separates out from its parent component, 
  the portal can be used as a modal dialog box, tooltip, or loader to create the child component.
 */

function App() {
  const [showErrorModal, setShowErrorModal] = useState(false);
  const InputDataFormHandler = (inputData) => {
    if (inputData?.name === "" && inputData?.Email === "") {
      setShowErrorModal(true);
    } else {
      setShowErrorModal(false);
    }
  };
  return (
    <React.Fragment>
      <div className="App">
        {/* {portalDom.createPortal(<Greeting />, document.getElementById("portal"))} */}
        <Form onSaveData={InputDataFormHandler} />
        {showErrorModal === true ? (
          <Error setShowErrorModal={setShowErrorModal} />
        ) : (
          ""
        )}
      </div>
    </React.Fragment>
  );
}

export default App;
