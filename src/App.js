import React from "react";
import "./App.css";
import Greeting from "./Greeting";
import portalDom from "react-dom";
/**
 * 
 *This React portal component exists outside the DOM hierarchy of the parent component.
  When the child component visually separates out from its parent component, 
  the portal can be used as a modal dialog box, tooltip, or loader to create the child component.
 */

function App() {
  return (
    <React.Fragment>
      <div className="App">heloo green man</div>
      {portalDom.createPortal(<Greeting />, document.getElementById("portal"))}
    </React.Fragment>
  );
}

export default App;
