import { Fragment } from "react";
import portalDom from "react-dom";
const Error = (props) => {
  console.log(props);
  return (
    <Fragment>
      {portalDom.createPortal(
        <>
          {" "}
          <div className="overlay" />
          <div
            className="Error--description"
            onClick={() => props.setShowErrorModal(false)}
          >
            <p>Please fill the field on the form !!!!!</p>
            <div className="close">X</div>
          </div>
        </>,

        document.getElementById("portal")
      )}
    </Fragment>
  );
};
export default Error;
